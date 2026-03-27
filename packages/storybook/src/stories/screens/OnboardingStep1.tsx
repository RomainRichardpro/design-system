/*
 * Direction créative :
 * 1. Ressenti : moment fondateur et solennel — nommer son espace est un acte symbolique.
 *    L'écran doit inspirer confiance et ambition, pas excitation superficielle. B2B premium.
 * 2. Élément inoubliable : "Créer votre espace." en Vesterbro 40px blanc sur fond violet.
 *    Il commande toute la composition. Tout le reste lui est subordonné.
 * 3. Ton extrême : contraste fort — split violet/blanc assumé sans compromis.
 *    Le violet (--background-brand-secondary-default) occupe 42% de l'écran et ancre l'identité.
 *    Le blanc livre la précision utilitaire.
 */

import { useState } from 'react';
import { Button, Checkbox, InputContainer } from '@romainrichardpro/react';
import styles from './OnboardingStep1.module.css';

export function OnboardingStep1() {
  const [isLoading, setIsLoading] = useState(false);
  const [cguAccepted, setCguAccepted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className={styles.page}>
      {/* ── Panneau gauche — violet ── */}
      <aside className={styles.panel} aria-label="Présentation de l'étape">
        <div className={styles.panelInner}>
          <span className={styles.logo}>RR</span>

          <div className={styles.panelContent}>
            <p className={styles.stepLabel}>Étape 1 sur 3</p>
            <h1 className={styles.headline}>Créer votre espace.</h1>
            <p className={styles.tagline}>
              Votre espace de travail est le point de départ de tout — nommez-le avec soin.
            </p>
          </div>

          <div className={styles.progressDots} role="list" aria-label="Progression">
            <span
              className={styles.dot}
              data-active="true"
              role="listitem"
              aria-current="step"
              aria-label="Étape 1, en cours"
            />
            <span className={styles.dot} role="listitem" aria-label="Étape 2" />
            <span className={styles.dot} role="listitem" aria-label="Étape 3" />
          </div>
        </div>
      </aside>

      {/* ── Panneau droit — formulaire ── */}
      <main className={styles.content}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Informations de base</h2>
            <p className={styles.formSubtitle}>
              Ces informations peuvent être modifiées à tout moment dans vos paramètres.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <InputContainer
              label="Nom de l'espace de travail"
              placeholder="Acme Corp"
              isRequired
            />

            <InputContainer label="Secteur d'activité" isRequired>
              <select
                className={styles.select}
                aria-required="true"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir un secteur
                </option>
                <option value="tech">Technologie & Logiciel</option>
                <option value="finance">Finance & Assurance</option>
                <option value="sante">Santé & Médical</option>
                <option value="industrie">Industrie & Manufacture</option>
                <option value="conseil">Conseil & Services</option>
                <option value="autre">Autre</option>
              </select>
            </InputContainer>

            <InputContainer label="Taille de l'équipe" isRequired>
              <select
                className={styles.select}
                aria-required="true"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner
                </option>
                <option value="solo">Juste moi</option>
                <option value="2-10">2 à 10 personnes</option>
                <option value="11-50">11 à 50 personnes</option>
                <option value="51-200">51 à 200 personnes</option>
                <option value="200+">Plus de 200 personnes</option>
              </select>
            </InputContainer>

            <div className={styles.cguRow}>
              <Checkbox
                label="J'accepte les conditions générales d'utilisation et la politique de confidentialité"
                checked={cguAccepted}
                onChange={setCguAccepted}
              />
            </div>

            <Button
              type="submit"
              level="primary"
              size="m"
              loading={isLoading}
              loadingLabel="Création de l'espace en cours"
              className={styles.submit}
            >
              Continuer
            </Button>
          </form>

          <p className={styles.loginHint}>
            Déjà un compte ?{' '}
            <a href="#login" className={styles.loginLink}>
              Se connecter
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
