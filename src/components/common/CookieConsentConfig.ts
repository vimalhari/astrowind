import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies!',
          description:
            'Hi there! Criztec Technologies uses cookies to enhance your browsing experience and provide personalized services. By clicking "Accept all", you consent to our use of all cookies. You can manage your preferences by clicking "Manage preferences".',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="/privacy">Privacy Policy</a>\n<a href="/terms">Terms and Conditions</a>',
        },
        preferencesModal: {
          title: 'Your Cookie Preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'About Cookies',
              description:
                'Cookies are small text files that websites place on your computer to store information about your preferences and activity. They help us improve your experience on our site and provide you with relevant content.',
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These cookies are essential for the website to function properly and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our website and services over time.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any questions regarding our cookie policy and your choices, please <a class="cc__link" href="mailto:info@criztec.com">contact us</a>.',
            },
          ],
        },
      },
    },
  },
};
