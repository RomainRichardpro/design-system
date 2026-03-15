import styles from './ScaleTokens.module.css';

const SPACING_TOKENS = [
  '--spacing-00',
  '--spacing-01',
  '--spacing-02',
  '--spacing-03',
  '--spacing-04',
  '--spacing-05',
  '--spacing-06',
  '--spacing-07',
  '--spacing-08',
  '--spacing-09',
  '--spacing-10',
  '--spacing-11',
  '--spacing-12',
  '--spacing-13',
];

function getValue(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

export function SpacingTokens() {
  const maxPx = 64;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thName}>Variable</th>
          <th className={styles.thBar}>Aperçu</th>
          <th className={styles.thValue}>Valeur</th>
        </tr>
      </thead>
      <tbody>
        {SPACING_TOKENS.map((token) => {
          const value = getValue(token);
          const px = parseFloat(value);
          const width = Math.min((px / maxPx) * 100, 100);
          return (
            <tr key={token} className={styles.row}>
              <td className={styles.cellName}>
                <code className={styles.varName}>{token}</code>
              </td>
              <td className={styles.cellBar}>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${width}%`, minWidth: px > 0 ? '2px' : '0' }}
                  />
                </div>
              </td>
              <td className={styles.cellValue}>
                <span className={styles.valueText}>{value || '—'}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
