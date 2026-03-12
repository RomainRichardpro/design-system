import styles from './ColorTokens.module.css';

// ─── Structure par catégorie > groupe ─────────────────────────────────────────

interface TokenGroup {
  label: string;
  tokens: string[];
}

interface TokenCategory {
  title: string;
  groups: TokenGroup[];
}

const CATEGORIES: TokenCategory[] = [
  {
    title: 'Background',
    groups: [
      {
        label: 'Désactivé',
        tokens: ['--background-disabled'],
      },
      {
        label: 'Brand primaire',
        tokens: [
          '--background-brand-primary-default',
          '--background-brand-primary-hover',
          '--background-brand-primary-active',
          '--background-brand-primary-inverse-default',
          '--background-brand-primary-inverse-hover',
          '--background-brand-primary-inverse-active',
        ],
      },
      {
        label: 'Brand secondaire',
        tokens: [
          '--background-brand-secondary-default',
          '--background-brand-secondary-hover',
          '--background-brand-secondary-active',
          '--background-brand-secondary-inverse-default',
          '--background-brand-secondary-inverse-hover',
          '--background-brand-secondary-inverse-active',
        ],
      },
      {
        label: 'Accent',
        tokens: [
          '--background-accent-default',
          '--background-accent-hover',
          '--background-accent-active',
          '--background-accent-inverse-default',
          '--background-accent-inverse-hover',
          '--background-accent-inverse-active',
        ],
      },
      {
        label: 'Succès',
        tokens: [
          '--background-status-success-default',
          '--background-status-success-hover',
          '--background-status-success-active',
          '--background-status-success-inverse-default',
          '--background-status-success-inverse-hover',
          '--background-status-success-inverse-active',
        ],
      },
      {
        label: 'Information',
        tokens: [
          '--background-status-info-default',
          '--background-status-info-hover',
          '--background-status-info-active',
          '--background-status-info-inverse-default',
          '--background-status-info-inverse-hover',
          '--background-status-info-inverse-active',
        ],
      },
      {
        label: 'Avertissement',
        tokens: [
          '--background-status-warning-default',
          '--background-status-warning-hover',
          '--background-status-warning-active',
          '--background-status-warning-inverse-default',
          '--background-status-warning-inverse-hover',
          '--background-status-warning-inverse-active',
        ],
      },
      {
        label: 'Erreur',
        tokens: [
          '--background-status-error-default',
          '--background-status-error-hover',
          '--background-status-error-active',
          '--background-status-error-inverse-default',
          '--background-status-error-inverse-hover',
          '--background-status-error-inverse-active',
        ],
      },
      {
        label: 'Neutre',
        tokens: [
          '--background-neutral-default',
          '--background-neutral-alt',
          '--background-neutral-raised',
          '--background-neutral-inverse',
        ],
      },
    ],
  },
  {
    title: 'Border',
    groups: [
      {
        label: 'Désactivé',
        tokens: ['--border-disabled'],
      },
      {
        label: 'Brand primaire',
        tokens: [
          '--border-brand-primary-default',
          '--border-brand-primary-hover',
          '--border-brand-primary-active',
          '--border-brand-primary-inverse-default',
          '--border-brand-primary-inverse-hover',
          '--border-brand-primary-inverse-active',
        ],
      },
      {
        label: 'Brand secondaire',
        tokens: [
          '--border-brand-secondary-default',
          '--border-brand-secondary-hover',
          '--border-brand-secondary-active',
          '--border-brand-secondary-inverse-default',
          '--border-brand-secondary-inverse-hover',
          '--border-brand-secondary-inverse-active',
        ],
      },
      {
        label: 'Accent',
        tokens: [
          '--border-accent-default',
          '--border-accent-hover',
          '--border-accent-active',
          '--border-accent-inverse-default',
          '--border-accent-inverse-hover',
          '--border-accent-inverse-active',
        ],
      },
      {
        label: 'Succès',
        tokens: [
          '--border-status-success-default',
          '--border-status-success-hover',
          '--border-status-success-active',
          '--border-status-success-inverse-default',
          '--border-status-success-inverse-hover',
          '--border-status-success-inverse-active',
        ],
      },
      {
        label: 'Information',
        tokens: [
          '--border-status-info-default',
          '--border-status-info-hover',
          '--border-status-info-active',
          '--border-status-info-inverse-default',
          '--border-status-info-inverse-hover',
          '--border-status-info-inverse-active',
        ],
      },
      {
        label: 'Avertissement',
        tokens: [
          '--border-status-warning-default',
          '--border-status-warning-hover',
          '--border-status-warning-active',
          '--border-status-warning-inverse-default',
          '--border-status-warning-inverse-hover',
          '--border-status-warning-inverse-active',
        ],
      },
      {
        label: 'Erreur',
        tokens: [
          '--border-status-error-default',
          '--border-status-error-hover',
          '--border-status-error-active',
          '--border-status-error-inverse-default',
          '--border-status-error-inverse-hover',
          '--border-status-error-inverse-active',
        ],
      },
      {
        label: 'Neutre',
        tokens: [
          '--border-neutral-default',
          '--border-neutral-alt',
          '--border-neutral-raised',
          '--border-neutral-inverse',
        ],
      },
    ],
  },
  {
    title: 'Text',
    groups: [
      {
        label: 'Désactivé',
        tokens: ['--text-disabled'],
      },
      {
        label: 'Brand primaire',
        tokens: ['--text-brand-primary-default', '--text-brand-primary-on-default'],
      },
      {
        label: 'Brand secondaire',
        tokens: ['--text-brand-secondary-default', '--text-brand-secondary-on-default'],
      },
      {
        label: 'Accent',
        tokens: ['--text-accent-default', '--text-accent-on-default'],
      },
      {
        label: 'Succès',
        tokens: ['--text-status-success-default', '--text-status-success-on-default'],
      },
      {
        label: 'Information',
        tokens: ['--text-status-info-default', '--text-status-info-on-default'],
      },
      {
        label: 'Avertissement',
        tokens: ['--text-status-warning-default', '--text-status-warning-on-default'],
      },
      {
        label: 'Erreur',
        tokens: ['--text-status-error-default', '--text-status-error-on-default'],
      },
      {
        label: 'Neutre',
        tokens: [
          '--text-neutral-default',
          '--text-neutral-alt',
          '--text-neutral-raised',
          '--text-neutral-inverse',
        ],
      },
    ],
  },
  {
    title: 'Icon',
    groups: [
      {
        label: 'Désactivé',
        tokens: ['--icon-disabled'],
      },
      {
        label: 'Brand primaire',
        tokens: ['--icon-brand-primary-default', '--icon-brand-primary-on-default'],
      },
      {
        label: 'Brand secondaire',
        tokens: ['--icon-brand-secondary-default', '--icon-brand-secondary-on-default'],
      },
      {
        label: 'Accent',
        tokens: ['--icon-accent-default', '--icon-accent-on-default'],
      },
      {
        label: 'Succès',
        tokens: ['--icon-status-success-default', '--icon-status-success-on-default'],
      },
      {
        label: 'Information',
        tokens: ['--icon-status-info-default', '--icon-status-info-on-default'],
      },
      {
        label: 'Avertissement',
        tokens: ['--icon-status-warning-default', '--icon-status-warning-on-default'],
      },
      {
        label: 'Erreur',
        tokens: ['--icon-status-error-default', '--icon-status-error-on-default'],
      },
      {
        label: 'Neutre',
        tokens: [
          '--icon-neutral-default',
          '--icon-neutral-alt',
          '--icon-neutral-raised',
          '--icon-neutral-inverse',
        ],
      },
    ],
  },
];

// ─── Utilitaires ──────────────────────────────────────────────────────────────

function getValue(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

function isLight(hex: string): boolean {
  const c = hex.replace('#', '');
  if (c.length < 6) return true;
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

// ─── Composants ───────────────────────────────────────────────────────────────

function ColorRow({ token }: { token: string }) {
  const value = getValue(token);
  const light = value ? isLight(value) : true;

  return (
    <tr className={styles.row}>
      <td className={styles.cellSwatch}>
        <div
          className={styles.swatch}
          style={{
            backgroundColor: value ? `var(${token})` : 'transparent',
            border: light ? '1px solid #e5e5e5' : 'none',
          }}
          aria-hidden="true"
        />
      </td>
      <td className={styles.cellName}>
        <code className={styles.varName}>{token}</code>
      </td>
      <td className={styles.cellValue}>
        <span className={styles.hexValue}>{value || '—'}</span>
      </td>
    </tr>
  );
}

function GroupRow({ label }: { label: string }) {
  return (
    <tr className={styles.groupRow}>
      <td colSpan={3} className={styles.groupLabel}>
        {label}
      </td>
    </tr>
  );
}

function CategoryTable({ category }: { category: TokenCategory }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{category.title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.thSwatch}>Aperçu</th>
            <th className={styles.thName}>Variable</th>
            <th className={styles.thValue}>Valeur</th>
          </tr>
        </thead>
        <tbody>
          {category.groups.map((group) => (
            <>
              <GroupRow key={`group-${group.label}`} label={group.label} />
              {group.tokens.map((token) => (
                <ColorRow key={token} token={token} />
              ))}
            </>
          ))}
        </tbody>
      </table>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function ColorTokens() {
  return (
    <div className={styles.root}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Focus</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thSwatch}>Aperçu</th>
              <th className={styles.thName}>Variable</th>
              <th className={styles.thValue}>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <ColorRow token="--focus" />
          </tbody>
        </table>
      </section>
      {CATEGORIES.map((cat) => (
        <CategoryTable key={cat.title} category={cat} />
      ))}
    </div>
  );
}