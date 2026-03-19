import { useState } from 'react';
import { Button, Checkbox } from '@romainrichardpro/react';
import styles from './SettingsScreen.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = 'profil' | 'notifications' | 'securite' | 'apparence' | 'facturation';
type Theme = 'light' | 'dark' | 'system';

interface NotificationState {
  comments: boolean;
  mentions: boolean;
  releases: boolean;
  digest: boolean;
  security: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SECTIONS: { id: Section; label: string }[] = [
  { id: 'profil', label: 'Profil' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'securite', label: 'Sécurité' },
  { id: 'apparence', label: 'Apparence' },
  { id: 'facturation', label: 'Facturation' },
];

const NOTIFICATION_OPTIONS: {
  key: keyof NotificationState;
  label: string;
  description: string;
}[] = [
  {
    key: 'comments',
    label: 'Commentaires sur vos contributions',
    description: "Recevez une notification quand quelqu'un commente vos travaux.",
  },
  {
    key: 'mentions',
    label: 'Mentions',
    description: 'Soyez averti lorsque vous êtes mentionné dans un fil de discussion.',
  },
  {
    key: 'releases',
    label: 'Nouvelles versions publiées',
    description: 'Notifications lors de la publication de nouvelles versions du design system.',
  },
  {
    key: 'digest',
    label: 'Récapitulatif hebdomadaire',
    description: "Un résumé hebdomadaire de toute l'activité de votre équipe.",
  },
  {
    key: 'security',
    label: 'Alertes de sécurité',
    description: 'Recevez des alertes pour toute activité suspecte sur votre compte.',
  },
];

const THEME_OPTIONS: { id: Theme; label: string }[] = [
  { id: 'light', label: 'Clair' },
  { id: 'dark', label: 'Sombre' },
  { id: 'system', label: 'Système' },
];

// ─── Composant principal ──────────────────────────────────────────────────────

export function SettingsScreen() {
  const [activeSection, setActiveSection] = useState<Section>('profil');
  const [notifications, setNotifications] = useState<NotificationState>({
    comments: true,
    mentions: true,
    releases: false,
    digest: true,
    security: true,
  });
  const [theme, setTheme] = useState<Theme>('dark');

  function handleNotificationChange(key: keyof NotificationState, value: boolean) {
    setNotifications((prev: NotificationState) => ({ ...prev, [key]: value }));
  }

  return (
    <div className={styles.page}>
      {/* Sidebar — visible sur desktop uniquement */}
      <nav className={styles.sidebar} aria-label="Navigation des paramètres">
        <p className={styles.sidebarTitle}>Paramètres</p>
        <ul className={styles.navList} role="list">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={[styles.navItem, activeSection === id ? styles.navItemActive : '']
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setActiveSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Onglets — visible sur mobile uniquement */}
      <div className={styles.tabsBar} role="tablist" aria-label="Navigation des paramètres">
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            className={[styles.tab, activeSection === id ? styles.tabActive : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => setActiveSection(id)}
            aria-selected={activeSection === id}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Contenu principal */}
      <main className={styles.main}>
        {activeSection === 'profil' && <SectionProfil />}
        {activeSection === 'notifications' && (
          <SectionNotifications
            notifications={notifications}
            onChange={handleNotificationChange}
          />
        )}
        {activeSection === 'securite' && <SectionSecurite />}
        {activeSection === 'apparence' && (
          <SectionApparence theme={theme} onThemeChange={setTheme} />
        )}
        {activeSection === 'facturation' && <SectionFacturation />}
      </main>
    </div>
  );
}

// ─── Section Profil ───────────────────────────────────────────────────────────

function SectionProfil() {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectionTitle}>Profil</h1>

      {/* Bloc avatar */}
      <div className={styles.card}>
        <div className={styles.avatarBlock}>
          <div className={styles.avatar} aria-label="Initiales RR">
            RR
          </div>
          <div className={styles.avatarInfo}>
            <p className={styles.avatarName}>Romain Richard</p>
            <p className={styles.avatarEmail}>romain@richard.pro</p>
          </div>
          <Button level="secondary" size="s">
            Changer la photo
          </Button>
        </div>
      </div>

      {/* Formulaire informations générales */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Informations générales</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="prenom">
                Prénom
              </label>
              <input
                id="prenom"
                type="text"
                className={styles.input}
                defaultValue="Romain"
                autoComplete="given-name"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nom">
                Nom
              </label>
              <input
                id="nom"
                type="text"
                className={styles.input}
                defaultValue="Richard"
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="username">
              {"Nom d'utilisateur"}
            </label>
            <input
              id="username"
              type="text"
              className={styles.input}
              defaultValue="romainrichardpro"
              autoComplete="username"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="bio">
              Bio
            </label>
            <input
              id="bio"
              type="text"
              className={styles.input}
              placeholder="Parlez-nous de vous..."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="website">
              Site web
            </label>
            <input
              id="website"
              type="url"
              className={styles.input}
              placeholder="https://"
              autoComplete="url"
            />
          </div>

          <div className={styles.formActions}>
            <Button level="primary" size="s" type="submit">
              Enregistrer
            </Button>
            <Button level="secondary" size="s" type="button">
              Annuler
            </Button>
          </div>
        </form>
      </div>

      {/* Bloc e-mail */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Adresses e-mail</h2>
        <div className={styles.emailRow}>
          <span className={styles.emailAddress}>romain@richard.pro</span>
          <span className={styles.badge}>Vérifiée</span>
        </div>
        <Button level="secondary" size="s">
          + Ajouter une adresse
        </Button>
      </div>
    </div>
  );
}

// ─── Section Notifications ────────────────────────────────────────────────────

interface NotificationSectionProps {
  notifications: NotificationState;
  onChange: (key: keyof NotificationState, value: boolean) => void;
}

function SectionNotifications({ notifications, onChange }: NotificationSectionProps) {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectionTitle}>Notifications</h1>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Préférences e-mail</h2>
        <div className={styles.checkboxList}>
          {NOTIFICATION_OPTIONS.map(({ key, label, description }) => (
            <div key={key} className={styles.checkboxItem}>
              <Checkbox
                id={`notif-${key}`}
                label={label}
                checked={notifications[key]}
                onChange={(v) => onChange(key, v)}
              />
              <p className={styles.checkboxDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Sécurité ─────────────────────────────────────────────────────────

function SectionSecurite() {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectionTitle}>Sécurité</h1>

      {/* Mot de passe */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Mot de passe</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="current-password">
              Mot de passe actuel
            </label>
            <input
              id="current-password"
              type="password"
              className={styles.input}
              autoComplete="current-password"
            />
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="new-password">
                Nouveau mot de passe
              </label>
              <input
                id="new-password"
                type="password"
                className={styles.input}
                autoComplete="new-password"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="confirm-password">
                Confirmation
              </label>
              <input
                id="confirm-password"
                type="password"
                className={styles.input}
                autoComplete="new-password"
              />
            </div>
          </div>

          <div className={styles.formActions}>
            <Button level="primary" size="s" type="submit">
              Mettre à jour
            </Button>
          </div>
        </form>
      </div>

      {/* Sessions actives */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Sessions actives</h2>
        <div className={styles.sessionList}>
          <div className={styles.sessionItem}>
            <div className={styles.sessionInfo}>
              <p className={styles.sessionDevice}>macOS · Chrome</p>
              <p className={styles.sessionMeta}>Paris, France · Session actuelle</p>
            </div>
            <span className={styles.badgeActive}>Actif</span>
          </div>
          <div className={styles.sessionItem}>
            <div className={styles.sessionInfo}>
              <p className={styles.sessionDevice}>iPhone · Safari</p>
              <p className={styles.sessionMeta}>Paris, France · Il y a 3 heures</p>
            </div>
            <Button level="secondary" size="s">
              Révoquer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Apparence ────────────────────────────────────────────────────────

interface ApparenceSectionProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

function SectionApparence({ theme, onThemeChange }: ApparenceSectionProps) {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectionTitle}>Apparence</h1>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Thème</h2>
        <div className={styles.themeCards} role="radiogroup" aria-label="Sélecteur de thème">
          {THEME_OPTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={theme === id}
              className={[styles.themeCard, theme === id ? styles.themeCardActive : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => onThemeChange(id)}
            >
              <div
                className={[styles.themePreview, styles[`themePreview-${id}`]]
                  .filter(Boolean)
                  .join(' ')}
                aria-hidden="true"
              />
              <span className={styles.themeLabel}>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Langue et région</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="language">
              Langue
            </label>
            <select id="language" className={styles.select} defaultValue="fr">
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="timezone">
              Fuseau horaire
            </label>
            <select id="timezone" className={styles.select} defaultValue="Europe/Paris">
              <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York (UTC−5)</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <Button level="primary" size="s" type="submit">
              Enregistrer
            </Button>
            <Button level="secondary" size="s" type="button">
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Section Facturation ──────────────────────────────────────────────────────

function SectionFacturation() {
  return (
    <div className={styles.section}>
      <h1 className={styles.sectionTitle}>Facturation</h1>

      <div className={styles.card}>
        <div className={styles.planHeader}>
          <div>
            <p className={styles.planName}>Plan Pro</p>
            <p className={styles.planRenewal}>Renouvellement le 1er avril 2026</p>
          </div>
          <p className={styles.planPrice}>
            29 €<span className={styles.planPricePeriod}>/mois</span>
          </p>
        </div>
        <div className={styles.formActions}>
          <Button level="primary" size="s">
            {"Passer à l'annuel (−20%)"}
          </Button>
          <Button level="secondary" size="s">
            {"Gérer l'abonnement"}
          </Button>
        </div>
      </div>

      {/* Zone dangereuse */}
      <div className={styles.dangerZone}>
        <h2 className={styles.dangerTitle}>Zone dangereuse</h2>
        <p className={styles.dangerDescription}>
          La suppression de votre compte est irréversible. Toutes vos données seront
          définitivement effacées.
        </p>
        <div>
          <Button level="secondary" size="s" className={styles.dangerButton}>
            Supprimer mon compte
          </Button>
        </div>
      </div>
    </div>
  );
}
