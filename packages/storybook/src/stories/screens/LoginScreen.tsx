import { useState } from 'react';
import { Button, Checkbox, InputContainer } from '@romainrichardpro/react';
import styles from './LoginScreen.module.css';

export function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string)?.trim();
    const password = formData.get('password') as string;

    let hasError = false;
    if (!email) {
      setEmailError('Veuillez saisir votre adresse e-mail.');
      hasError = true;
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Veuillez saisir votre mot de passe.');
      hasError = true;
    } else {
      setPasswordError('');
    }
    if (hasError) return;

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
            <InputContainer
              label="Adresse e-mail"
              isRequired
              status={emailError ? 'Error' : undefined}
              withSupportingText={!!emailError}
              supportingText={emailError}
            >
              <input
                name="email"
                type="email"
                className={`${styles.fieldInput}${emailError ? ` ${styles.fieldInputError}` : ''}`}
                placeholder="jean.dupont@email.com"
                autoComplete="email"
              />
            </InputContainer>

            <div className={styles.passwordField}>
              <InputContainer
                label="Mot de passe"
                isRequired
                status={passwordError ? 'Error' : undefined}
                withSupportingText={!!passwordError}
                supportingText={passwordError}
              >
                <div
                  className={`${styles.passwordInputWrapper}${passwordError ? ` ${styles.passwordInputWrapperError}` : ''}`}
                >
                  <input
                    name="password"
                    type="password"
                    className={styles.passwordInputInner}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>
              </InputContainer>
              <a href="#forgot" className={styles.forgotLink}>
                Mot de passe oublié ?
              </a>
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
