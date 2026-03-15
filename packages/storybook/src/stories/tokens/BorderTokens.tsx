import styles from './BorderTokens.module.css';

const BORDER_WIDTH_TOKENS = [
  '--border-width-00',
  '--border-width-01',
  '--border-width-02',
  '--border-width-03',
  '--border-width-04',
];

function getValue(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

export function BorderTokens() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thName}>Variable</th>
          <th className={styles.thPreview}>Aperçu</th>
          <th className={styles.thValue}>Valeur</th>
        </tr>
      </thead>
      <tbody>
        {BORDER_WIDTH_TOKENS.map((token) => {
          const value = getValue(token);
          const px = parseFloat(value);
          return (
            <tr key={token} className={styles.row}>
              <td className={styles.cellName}>
                <code className={styles.varName}>{token}</code>
              </td>
              <td className={styles.cellPreview}>
                <div
                  className={styles.line}
                  style={{
                    borderBottomWidth: px > 0 ? value : '0',
                    borderBottomStyle: 'solid',
                    borderBottomColor: '#111',
                  }}
                />
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
