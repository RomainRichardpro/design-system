import { useState } from 'react';
import { Button, InputContainer, TextInput } from '@romainrichardpro/react';
import styles from './ContactScreen.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstname = (formData.get('firstname') as string)?.trim();
    const lastname = (formData.get('lastname') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const subject = (formData.get('subject') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    let hasError = false;

    if (!firstname) {
      setFirstnameError('Veuillez saisir votre prénom.');
      hasError = true;
    } else setFirstnameError('');

    if (!lastname) {
      setLastnameError('Veuillez saisir votre nom.');
      hasError = true;
    } else setLastnameError('');

    if (!email) {
      setEmailError('Veuillez saisir votre adresse e-mail.');
      hasError = true;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('Veuillez saisir une adresse e-mail valide.');
      hasError = true;
    } else setEmailError('');

    if (!subject) {
      setSubjectError('Veuillez saisir un sujet.');
      hasError = true;
    } else setSubjectError('');

    if (!message) {
      setMessageError('Veuillez saisir votre message.');
      hasError = true;
    } else setMessageError('');

    if (hasError) return;

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
          <div className={styles.confirmation} role="status" aria-live="polite">
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
            <InputContainer
              label="Prénom"
              isRequired
              status={firstnameError ? 'Error' : undefined}
              withSupportingText={!!firstnameError}
              supportingText={firstnameError}
            >
              <TextInput
                name="firstname"
                status={firstnameError ? 'Error' : 'Default'}
                placeholder="Marie"
                autoComplete="given-name"
                autoFocus
                onChange={() => {
                  if (firstnameError) setFirstnameError('');
                }}
              />
            </InputContainer>

            <InputContainer
              label="Nom"
              isRequired
              status={lastnameError ? 'Error' : undefined}
              withSupportingText={!!lastnameError}
              supportingText={lastnameError}
            >
              <TextInput
                name="lastname"
                status={lastnameError ? 'Error' : 'Default'}
                placeholder="Dupont"
                autoComplete="family-name"
                onChange={() => {
                  if (lastnameError) setLastnameError('');
                }}
              />
            </InputContainer>
          </div>

          <InputContainer
            label="Adresse e-mail"
            isRequired
            status={emailError ? 'Error' : undefined}
            withSupportingText={!!emailError}
            supportingText={emailError}
          >
            <TextInput
              name="email"
              type="email"
              status={emailError ? 'Error' : 'Default'}
              placeholder="marie.dupont@email.com"
              autoComplete="email"
              onChange={() => {
                if (emailError) setEmailError('');
              }}
            />
          </InputContainer>

          <InputContainer
            label="Sujet"
            isRequired
            status={subjectError ? 'Error' : undefined}
            withSupportingText={!!subjectError}
            supportingText={subjectError}
          >
            <TextInput
              name="subject"
              status={subjectError ? 'Error' : 'Default'}
              placeholder="Collaboration, question, retour sur le DS…"
              onChange={() => {
                if (subjectError) setSubjectError('');
              }}
            />
          </InputContainer>

          <InputContainer
            label="Message"
            isRequired
            status={messageError ? 'Error' : undefined}
            withSupportingText={!!messageError}
            supportingText={messageError}
          >
            <div
              className={`${styles.textareaWrapper}${messageError ? ` ${styles.textareaWrapperError}` : ''}`}
            >
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Décrivez votre projet ou votre demande en quelques lignes."
                rows={5}
                aria-required="true"
                required
                onChange={() => {
                  if (messageError) setMessageError('');
                }}
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
