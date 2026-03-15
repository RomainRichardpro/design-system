import styles from './TypographyTokens.module.css';

const FONT_SIZES = [
  '--font-size-12',
  '--font-size-14',
  '--font-size-16',
  '--font-size-20',
  '--font-size-24',
  '--font-size-32',
  '--font-size-40',
  '--font-size-72',
];

const FONT_WEIGHTS = [
  { token: '--font-weight-regular', label: 'Regular' },
  { token: '--font-weight-medium', label: 'Medium' },
  { token: '--font-weight-semi-bold', label: 'Semi Bold' },
  { token: '--font-weight-bold', label: 'Bold' },
  { token: '--font-weight-extra-bold', label: 'Extra Bold' },
];

const FONT_FAMILIES = [
  { token: '--font-family-tagline', label: 'Tagline' },
  { token: '--font-family-title', label: 'Title' },
  { token: '--font-family-text', label: 'Text' },
];

function getValue(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

export function TypographyTokens() {
  return (
    <div className={styles.root}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Familles de police</h3>
        <div className={styles.familyList}>
          {FONT_FAMILIES.map(({ token, label }) => {
            const value = getValue(token);
            return (
              <div key={token} className={styles.familyRow}>
                <span className={styles.familySample} style={{ fontFamily: `var(${token})` }}>
                  Aa
                </span>
                <div className={styles.familyInfo}>
                  <span className={styles.familyLabel}>{label}</span>
                  <span className={styles.tokenName}>{token.replace('--', '')}</span>
                  <span className={styles.tokenValue}>{value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Tailles de police</h3>
        <div className={styles.sizeList}>
          {FONT_SIZES.map((token) => {
            const value = getValue(token);
            return (
              <div key={token} className={styles.sizeRow}>
                <span className={styles.tokenName}>{token.replace('--', '')}</span>
                <span
                  className={styles.sizeSample}
                  style={{ fontSize: `var(${token})`, fontFamily: 'var(--font-family-text)' }}
                >
                  Texte exemple
                </span>
                <span className={styles.tokenValue}>{value}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Graisses</h3>
        <div className={styles.weightList}>
          {FONT_WEIGHTS.map(({ token, label }) => {
            const value = getValue(token);
            return (
              <div key={token} className={styles.weightRow}>
                <span className={styles.tokenName}>{token.replace('--', '')}</span>
                <span
                  className={styles.weightSample}
                  style={{
                    fontWeight: `var(${token})`,
                    fontFamily: 'var(--font-family-text)',
                  }}
                >
                  {label}
                </span>
                <span className={styles.tokenValue}>{value}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
