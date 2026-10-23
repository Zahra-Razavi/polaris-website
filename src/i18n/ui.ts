export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    mainNav: 'Main',
    footerNav: 'Footer',
    signIn: 'Sign in',
    requestDemo: 'Request a demo',
    seeHow: 'See how it works',
    home: 'Home',
    comingSoon: 'This page is in progress.',
    inThisSection: 'In this section',
    notFoundTitle: 'Page not found',
    backHome: 'Back to home',
    homeTitle: 'Research security due diligence, built in Canada',
    metaDescription: 'Polaris is a Canadian research security due diligence platform.',
  },
  fr: {
    skip: 'Passer au contenu',
    menu: 'Menu',
    mainNav: 'Principal',
    footerNav: 'Pied de page',
    signIn: 'Se connecter',
    requestDemo: 'Demander une démo',
    seeHow: 'Voir le fonctionnement',
    home: 'Accueil',
    comingSoon: 'Cette page est en cours de préparation.',
    inThisSection: 'Dans cette section',
    notFoundTitle: 'Page introuvable',
    backHome: "Retour à l'accueil",
    homeTitle: 'La diligence raisonnable en sécurité de la recherche, conçue au Canada',
    metaDescription: 'Polaris est une plateforme canadienne de diligence raisonnable en sécurité de la recherche.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
