import { useState } from 'react';
import { Button, InputContainer } from '@romainrichardpro/react';
import styles from './ContactScreen.module.css';

export function ContactScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSent(true);
    }, 1800);
  }

  if (sent) {
    return (
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <span className={styles.brand}>RR</span>
          <div className={styles.confirmation}>
            <h1 className={styles.confirmationTitle}>Reçu cinq sur cinq.</h1>
            <p className={styles.confirmationSub}>
              Votre message a bien été envoyé. On vous répond sous 24h.
            </p>
            <Button level="secondary" size="m" onClick={() => setSent(false)}>
              Envoyer un autre message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <span className={styles.brand}>RR</span>

        <header className={styles.header}>
          <h1 className={styles.headline}>Parlons.</h1>
          <p className={styles.sub}>
            Une question, un projet, une collaboration — on vous répond sous 24h.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldRow}>
            <InputContainer label="Prénom" placeholder="Marie" isRequired />
            <InputContainer label="Nom" placeholder="Dupont" isRequired />
          </div>

          <InputContainer label="Adresse e-mail" placeholder="marie.dupont@email.com" isRequired />

          <InputContainer
            label="Sujet"
            placeholder="Collaboration, question, retour sur le DS…"
            isRequired
          />

          <InputContainer label="Message" isRequired>
            <div className={styles.textareaWrapper}>
              <textarea
                className={styles.textarea}
                placeholder="Décrivez votre projet ou votre demande en quelques lignes."
                rows={5}
                aria-required="true"
              />
            </div>
          </InputContainer>

          <Button
            type="submit"
            level="primary"
            size="m"
            loading={isLoading}
            loadingLabel="Envoi en cours"
            className={styles.submit}
          >
            Envoyer le message
          </Button>
        </form>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Ou écrivez directement à{' '}
            <a href="mailto:studio@richard.pro" className={styles.footerLink}>
              studio@richard.pro
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
