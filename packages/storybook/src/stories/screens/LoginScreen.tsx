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
    <main className={styles.page}>
      <div className={styles.brand} aria-hidden="true">
        RR
      </div>

      <div className={styles.card}>
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
            <input
              id="login-password"
              type="password"
              className={styles.passwordInput}
              placeholder="••••••••"
              autoComplete="current-password"
              aria-required="true"
              required
            />
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
  );
}
