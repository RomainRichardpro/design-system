import { useState } from 'react';
import { Button } from '@romainrichardpro/react';
import { Checkbox } from '@romainrichardpro/react';
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
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Connexion</h1>
          <p className={styles.subtitle}>Bienvenue, connectez-vous à votre compte</p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="vous@exemple.com"
              autoComplete="email"
              required
              aria-required="true"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              aria-required="true"
            />
          </div>

          <div className={styles.row}>
            <Checkbox label="Se souvenir de moi" checked={rememberMe} onChange={setRememberMe} />
            <a href="#forgot" className={styles.forgotLink}>
              Mot de passe oublié ?
            </a>
          </div>

          <Button
            type="submit"
            level="primary"
            size="m"
            loading={isLoading}
            loadingLabel="Connexion en cours"
            className={styles.submitButton}
          >
            Se connecter
          </Button>
        </form>
      </div>
    </main>
  );
}
