import styles from './RadiusTokens.module.css';

const RADIUS_TOKENS = [
  '--radius-00',
  '--radius-01',
  '--radius-02',
  '--radius-03',
  '--radius-04',
  '--radius-05',
  '--radius-06',
  '--radius-07',
  '--radius-08',
];

function getValue(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

export function RadiusTokens() {
  return (
    <div className={styles.grid}>
      {RADIUS_TOKENS.map((token) => {
        const value = getValue(token);
        const borderRadius = value === '9999px' ? '50%' : value;
        return (
          <div key={token} className={styles.card}>
            <div className={styles.preview}>
              <div className={styles.box} style={{ borderRadius }} />
            </div>
            <code className={styles.varName}>{token}</code>
            <span className={styles.value}>{value || '—'}</span>
          </div>
        );
      })}
    </div>
  );
}