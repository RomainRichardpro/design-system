import { useState } from 'react';
import { Button, Checkbox, InputContainer } from '@romainrichardpro/react';
import styles from './LoginScreenV2.module.css';

export function LoginScreenV2() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* En-tête */}
        <div className={styles.cardHeader}>
          <span className={styles.brand}>RR</span>
          <div className={styles.titles}>
            <h1 className={styles.title}>Bon retour.</h1>
            <p className={styles.subtitle}>Connectez-vous à votre espace de travail.</p>
          </div>
        </div>

        {/* Formulaire */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <InputContainer label="Adresse e-mail" placeholder="jean.dupont@email.com" isRequired />

          {/* Champ mot de passe avec lien oublié */}
          <div className={styles.passwordField}>
            <div className={styles.passwordLabelRow}>
              <label htmlFor="v2-password" className={styles.passwordLabel}>
                Mot de passe{' '}
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <a href="#forgot" className={styles.forgotLink}>
                Mot de passe oublié ?
              </a>
            </div>
            <div className={styles.passwordWrapper}>
              <input
                id="v2-password"
                type="password"
                className={styles.passwordInput}
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

        {/* Pied de card */}
        <p className={styles.signup}>
          Pas encore de compte ?{' '}
          <a href="#signup" className={styles.signupLink}>
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
}
