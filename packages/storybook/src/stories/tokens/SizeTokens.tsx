import styles from './ScaleTokens.module.css';

const SIZE_TOKENS = [
  '--sizes-00',
  '--sizes-01',
  '--sizes-02',
  '--sizes-03',
  '--sizes-04',
  '--sizes-05',
  '--sizes-06',
  '--sizes-07',
  '--sizes-08',
  '--sizes-09',
  '--sizes-10',
  '--sizes-11',
  '--sizes-12',
  '--sizes-13',
];

function getValue(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

export function SizeTokens() {
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
        {SIZE_TOKENS.map((token) => {
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