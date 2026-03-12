import StyleDictionary from 'style-dictionary';
import type { Config, TransformedToken } from 'style-dictionary/types';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getPath(token: TransformedToken): string[] {
  return token.path as string[];
}

// ─── Transformer : couleurs Figma → hex CSS ───────────────────────────────────
StyleDictionary.registerTransform({
  name: 'color/figma-hex',
  type: 'value',
  filter: (token: TransformedToken) => (token.type ?? token.$type) === 'color',
  transform: (token: TransformedToken): string => {
    const val = (token.original?.$value ?? token.$value) as {
      hex?: string;
      alpha?: number;
      components?: number[];
    };

    if (!val || typeof val !== 'object') return String(val ?? '');

    if (val.hex) {
      if (typeof val.alpha === 'number' && val.alpha < 1) {
        const r = Math.round((val.components?.[0] ?? 0) * 255);
        const g = Math.round((val.components?.[1] ?? 0) * 255);
        const b = Math.round((val.components?.[2] ?? 0) * 255);
        return `rgba(${r}, ${g}, ${b}, ${val.alpha})`;
      }
      return val.hex;
    }

    return String(val);
  },
});

// ─── Transformer : nombres → px ───────────────────────────────────────────────
StyleDictionary.registerTransform({
  name: 'number/px-or-opacity',
  type: 'value',
  filter: (token: TransformedToken) => (token.type ?? token.$type) === 'number',
  transform: (token: TransformedToken): string => {
    const path = getPath(token);
    const raw = token.original?.$value ?? token.$value;
    const num = Number(raw);

    if (path[0] === 'opacity') return String(num / 100);
    if (num === 999) return '9999px';
    return `${num}px`;
  },
});

// ─── Transformer : font-weight string → valeur numérique CSS ──────────────────
const WEIGHT_MAP: Record<string, string> = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

StyleDictionary.registerTransform({
  name: 'fontWeight/string-to-number',
  type: 'value',
  filter: (token: TransformedToken) => {
    const path = getPath(token);
    return path[0] === 'font' && path[1] === 'weight';
  },
  transform: (token: TransformedToken): string => {
    const val = String(token.original?.$value ?? token.$value).toLowerCase();
    return WEIGHT_MAP[val] ?? val;
  },
});

// ─── Transformer : font-family → quoted CSS value ─────────────────────────────
StyleDictionary.registerTransform({
  name: 'fontFamily/quoted',
  type: 'value',
  filter: (token: TransformedToken) => {
    const path = getPath(token);
    return path[0] === 'font' && path[1] === 'family';
  },
  transform: (token: TransformedToken): string => {
    const val = String(token.original?.$value ?? token.$value);
    return val.includes(' ') ? `"${val}"` : val;
  },
});

// ─── Formats CSS Variables ─────────────────────────────────────────────────────
StyleDictionary.registerFormat({
  name: 'css/variables-root',
  format: ({ dictionary }): string => {
    const vars = dictionary.allTokens
      .map((t) => `  --${t.name}: ${String(t.value ?? t.$value)};`)
      .join('\n');
    if (!vars) return '';
    return [
      '/**',
      ' * Ce fichier est généré automatiquement. Ne pas modifier.',
      ' */',
      '',
      ':root {',
      vars,
      '}',
      '',
    ].join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'css/variables-dark',
  format: ({ dictionary }): string => {
    const vars = dictionary.allTokens
      .map((t) => `  --${t.name}: ${String(t.value ?? t.$value)};`)
      .join('\n');
    if (!vars) return '';
    return [
      '/**',
      ' * Ce fichier est généré automatiquement. Ne pas modifier.',
      ' * Appliqué via [data-theme="dark"] sur l\'élément racine.',
      ' */',
      '',
      '[data-theme="dark"] {',
      vars,
      '}',
      '',
    ].join('\n');
  },
});

// ─── Parser : supprime les $extensions racine (métadonnées Figma) ─────────────
StyleDictionary.registerParser({
  name: 'figma/strip-root-extensions',
  pattern: /\.json$/,
  parser: ({ contents }) => {
    const obj = JSON.parse(contents);
    delete obj.$extensions;
    return obj;
  },
});

// ─── Liste des transforms par plateforme ──────────────────────────────────────
// En SD v4, registerTransformGroup n'accepte que des transforms de type "value".
// On déclare donc les transforms explicitement par plateforme.
const VALUE_TRANSFORMS = [
  'color/figma-hex',
  'number/px-or-opacity',
  'fontWeight/string-to-number',
  'fontFamily/quoted',
];

// ─── Helper build ──────────────────────────────────────────────────────────────
async function buildPlatform(source: string[], config: Omit<Config, 'source'>) {
  const sd = new StyleDictionary({
    source,
    parsers: ['figma/strip-root-extensions'],
    // Active le support natif du format DTCG ($value, $type)
    // SD v4 mappe alors $value → value avant d'appliquer les transformers
    usesDtcg: true,
    ...config,
  });
  await sd.buildAllPlatforms();
}

// ── Numbers ────────────────────────────────────────────────────────────────────
await buildPlatform(['src/numbers.tokens.json'], {
  platforms: {
    'css/numbers': {
      transforms: ['name/kebab', ...VALUE_TRANSFORMS],
      buildPath: 'build/css/',
      files: [{ destination: 'numbers.css', format: 'css/variables-root' }],
    },
  },
});

// ── Typographie ────────────────────────────────────────────────────────────────
await buildPlatform(['src/typo.tokens.json'], {
  platforms: {
    'css/typography': {
      transforms: ['name/kebab', ...VALUE_TRANSFORMS],
      buildPath: 'build/css/',
      files: [
        {
          destination: 'typography.css',
          format: 'css/variables-root',
          filter: (token: TransformedToken) => getPath(token)[0] === 'font',
        },
      ],
    },
  },
});

// ── Couleurs light mode ────────────────────────────────────────────────────────
await buildPlatform(['src/colors-light-mode.tokens.json'], {
  platforms: {
    'css/colors-light': {
      transforms: ['name/kebab', ...VALUE_TRANSFORMS],
      buildPath: 'build/css/',
      files: [{ destination: 'colors-light.css', format: 'css/variables-root' }],
    },
  },
});

// ── Couleurs dark mode ─────────────────────────────────────────────────────────
await buildPlatform(['src/colors-dark-mode.tokens.json'], {
  platforms: {
    'css/colors-dark': {
      transforms: ['name/kebab', ...VALUE_TRANSFORMS],
      buildPath: 'build/css/',
      files: [{ destination: 'colors-dark.css', format: 'css/variables-dark' }],
    },
  },
});

// ── JSON plat ──────────────────────────────────────────────────────────────────
await buildPlatform(
  ['src/typo.tokens.json', 'src/numbers.tokens.json', 'src/colors-light-mode.tokens.json'],
  {
    platforms: {
      json: {
        transforms: ['name/kebab', ...VALUE_TRANSFORMS],
        buildPath: 'build/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json/nested',
          },
        ],
      },
    },
  }
);

console.log('\n✅ Tokens générés avec succès dans build/');