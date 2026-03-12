import StyleDictionary from 'style-dictionary';
import type { Config, TransformedToken } from 'style-dictionary/types';

// ─── Transformer : couleurs Figma → hex CSS ───────────────────────────────────
StyleDictionary.registerTransform({
  name: 'color/figma-hex',
  type: 'value',
  filter: (token: TransformedToken) => token.$type === 'color',
  transform: (token: TransformedToken): string => {
    const val = token.$value as { hex: string; alpha: number; components: number[] };
    if (val?.hex) {
      if (typeof val.alpha === 'number' && val.alpha < 1) {
        const r = Math.round(val.components[0] * 255);
        const g = Math.round(val.components[1] * 255);
        const b = Math.round(val.components[2] * 255);
        return `rgba(${r}, ${g}, ${b}, ${val.alpha})`;
      }
      return val.hex;
    }
    return String(token.$value);
  },
});

// ─── Transformer : nombres → px ───────────────────────────────────────────────
StyleDictionary.registerTransform({
  name: 'number/px-or-opacity',
  type: 'value',
  filter: (token: TransformedToken) => token.$type === 'number',
  transform: (token: TransformedToken): string => {
    const path = token.path as string[];
    if (path[0] === 'opacity') return String(Number(token.$value) / 100);
    if (Number(token.$value) === 999) return '9999px';
    return `${token.$value}px`;
  },
});

// ─── Transformer : font-weight string → valeur numérique CSS ──────────────────
const WEIGHT_MAP: Record<string, string> = {
  regular: '400', medium: '500', semibold: '600', bold: '700', extrabold: '800',
};

StyleDictionary.registerTransform({
  name: 'fontWeight/string-to-number',
  type: 'value',
  filter: (token: TransformedToken) => {
    const path = token.path as string[];
    return path[0] === 'font' && path[1] === 'weight';
  },
  transform: (token: TransformedToken): string => {
    const val = String(token.$value).toLowerCase();
    return WEIGHT_MAP[val] ?? token.$value;
  },
});

// ─── Transformer : font.weight.italic → --font-style-italic ──────────────────
StyleDictionary.registerTransform({
  name: 'name/italic-as-style',
  type: 'name',
  filter: (token: TransformedToken) => {
    const path = token.path as string[];
    return path[0] === 'font' && path[1] === 'weight' && path[2] === 'italic';
  },
  transform: (): string => 'font-style-italic',
});

// ─── Transformer : font-family → quoted CSS value ─────────────────────────────
StyleDictionary.registerTransform({
  name: 'fontFamily/quoted',
  type: 'value',
  filter: (token: TransformedToken) => {
    const path = token.path as string[];
    return path[0] === 'font' && path[1] === 'family';
  },
  transform: (token: TransformedToken): string => {
    const val = String(token.$value);
    return val.includes(' ') ? `"${val}"` : val;
  },
});

// ─── Formats CSS Variables ─────────────────────────────────────────────────────
StyleDictionary.registerFormat({
  name: 'css/variables-root',
  format: ({ dictionary }): string => {
    const vars = dictionary.allTokens
      .map((t) => `  --${t.name}: ${String(t.value)};`)
      .join('\n');
    if (!vars) return '';
    return `/**\n * Ce fichier est généré automatiquement. Ne pas modifier.\n */\n\n:root {\n${vars}\n}\n`;
  },
});

StyleDictionary.registerFormat({
  name: 'css/variables-dark',
  format: ({ dictionary }): string => {
    const vars = dictionary.allTokens
      .map((t) => `  --${t.name}: ${String(t.value)};`)
      .join('\n');
    if (!vars) return '';
    return `/**\n * Ce fichier est généré automatiquement. Ne pas modifier.\n * Appliqué via [data-theme="dark"] sur l'élément racine.\n */\n\n[data-theme="dark"] {\n${vars}\n}\n`;
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

// ─── Groupe de transforms partagé ─────────────────────────────────────────────
StyleDictionary.registerTransformGroup({
  name: 'rr-ds/css',
  transforms: [
    'attribute/cti',
    'name/kebab',
    'color/figma-hex',
    'number/px-or-opacity',
    'fontWeight/string-to-number',
    'name/italic-as-style',
    'fontFamily/quoted',
  ],
});

// ─── Configuration principale ──────────────────────────────────────────────────
// ⚠️  En Style Dictionary v4, `source` se déclare PAR PLATEFORME via des
//     instances séparées, ou on filtre les tokens par plateforme via `filter`.
//     On crée donc une instance SD par groupe de fichiers sources.

async function buildPlatform(source: string[], config: Omit<Config, 'source'>) {
  const sd = new StyleDictionary({
    source,
    parsers: ['figma/strip-root-extensions'],
    ...config,
  });
  await sd.buildAllPlatforms();
}

// ── Numbers ────────────────────────────────────────────────────────────────────
await buildPlatform(['src/numbers.tokens.json'], {
  platforms: {
    'css/numbers': {
      transformGroup: 'rr-ds/css',
      buildPath: 'build/css/',
      files: [{ destination: 'numbers.css', format: 'css/variables-root' }],
    },
  },
});

// ── Typographie ────────────────────────────────────────────────────────────────
await buildPlatform(['src/typo.tokens.json'], {
  platforms: {
    'css/typography': {
      transformGroup: 'rr-ds/css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'typography.css',
          format: 'css/variables-root',
          filter: (token: TransformedToken) => (token.path as string[])[0] === 'font',
        },
      ],
    },
  },
});

// ── Couleurs light mode ────────────────────────────────────────────────────────
await buildPlatform(['src/colors-light-mode.tokens.json'], {
  platforms: {
    'css/colors-light': {
      transformGroup: 'rr-ds/css',
      buildPath: 'build/css/',
      files: [{ destination: 'colors-light.css', format: 'css/variables-root' }],
    },
  },
});

// ── Couleurs dark mode ─────────────────────────────────────────────────────────
await buildPlatform(['src/colors-dark-mode.tokens.json'], {
  platforms: {
    'css/colors-dark': {
      transformGroup: 'rr-ds/css',
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
        transformGroup: 'rr-ds/css',
        buildPath: 'build/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json/nested',
            filter: (token: TransformedToken) => {
              // Exclut les métadonnées Figma racine ($extensions de fichier)
              if (token.path.join('.') === '$extensions') return false;
              const ext = token.$extensions as Record<string, unknown> | undefined;
              return ext?.['com.figma.hiddenFromPublishing'] !== true;
            },
          },
        ],
      },
    },
  }
);

console.log('\n✅ Tokens générés avec succès dans build/');