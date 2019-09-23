const fs = require('fs');
const LanguageDetector = require('i18next-browser-languagedetector')

import i18next from 'i18next'
import Log from '@/xmpp/util/Log';
import Client from '@/xmpp/Client';
// import * as LanguageDetector from 'i18next-browser-languagedetector'

let supportedLangs = fs.readdirSync('../../locales/').filter(filename => {
   if (!/\.json$/.test(filename)) {
      return false;
   }

   let file = require(`../../locales/${filename}`);

   for (let key in file.translation) {
      if (typeof file.translation[key] === 'string') {
         return true;
      }
   }

   return false;
}).map(filename => filename.replace(/\.json$/, ''));
const __LANGS__ = supportedLangs;
let resources = __LANGS__.reduce((resources, lang) => {
   resources[lang] = require(`../../locales/${lang}.json`);

   return resources;
}, {});

export default class Translation {
   private static initialized = false;

   public static initialize() {
      if (Client.getOption('autoLang')) {
          i18next.use(LanguageDetector);
      }

      i18next.init({
         debug: Client.isDebugMode(),
         lng: Client.getOption('lang'),
         fallbackLng: 'en',
         returnNull: false,
         resources,
         interpolation: {
            prefix: '__',
            suffix: '__'
         },
         saveMissing: true,
         detection: {
            order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],
         },
      });

      i18next.on('missingKey', function(language, namespace, key, res) {
         Log.info(`[i18n] Translation of "${key}" is missing for language "${language}". Namespace: ${namespace}. Resource: ${res}.`);
      });

      Translation.initialized = true;
   }

   public static t(text: string, param?): string {
      if (!Translation.initialized) {
         Log.warn('Translator not initialized');

         return text;
      }

      let translatedString = i18next.t(text, param);

      return translatedString;
   }

   public static getCurrentLanguage() {
      return i18next.language;
   }
}
