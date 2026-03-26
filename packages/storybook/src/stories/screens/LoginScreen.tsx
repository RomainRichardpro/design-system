import { useState } from 'react';
import { Button, Checkbox, InputContainer } from '@romainrichardpro/react';
import styles from './LoginScreen.module.css';

export function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className={styles.page}>
      {/* ── Left panel — decorative ────────────────────────────────── */}
      <div className={styles.left} aria-hidden="true">
        <div className={styles.leftContent}>
          <span className={styles.brand}>RR</span>
          <div className={styles.headline}>
            <p className={styles.headlineText}>
              Construire
              <br />
              des systèmes
              <br />
              qui durent.
            </p>
            <p className={styles.headlineSub}>Design System open-source — @romainrichardpro</p>
          </div>
        </div>
      </div>

      {/* ── Right panel — form ─────────────────────────────────────── */}
      <main className={styles.right}>
        <div className={styles.formWrapper}>
          <header className={styles.header}>
            <h1 className={styles.title}>Se connecter</h1>
            <p className={styles.subtitle}>Accédez à votre espace de travail.</p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <InputContainer label="Adresse e-mail" placeholder="jean.dupont@email.com" isRequired />

            <div className={styles.passwordField}>
              <div className={styles.passwordLabelRow}>
                <label htmlFor="login-password" className={styles.fieldLabel}>
                  Mot de passe{' '}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </label>
                <a href="#forgot" className={styles.forgotLink}>
                  Mot de passe oublié ?
                </a>
              </div>
              <div className={styles.passwordInputWrapper}>
                <input
                  id="login-password"
                  type="password"
                  className={styles.passwordInputInner}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  aria-required="true"
                  required
                />
              </div>
            </div>

            <Checkbox label="Se souvenir de moi" checked={rememberMe} onChange={setRememberMe} />

            <Button
              type="submit"
              level="primary"
              size="m"
              loading={isLoading}
              loadingLabel="Connexion en cours"
              className={styles.submit}
            >
              Se connecter
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
