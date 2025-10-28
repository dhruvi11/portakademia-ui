import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          enterUsernamePassword: "Enter Username and Password",
          username: "Username",
          password: "Password",
          login: "Login",
          signinOffice365: "Sign in with Office365",
          noAccount: "No Account?",
          here: "Here",
          vistulaFooter: "© Vistula University Portal",
        },
      },
      pl: {
        translation: {
          enterUsernamePassword: "Wpisz nazwę użytkownika i hasło",
          username: "Nazwa użytkownika",
          password: "Hasło",
          login: "Zaloguj się",
          signinOffice365: "Zaloguj się przez Office365",
          noAccount: "Brak konta?",
          here: "Tutaj",
          vistulaFooter: "© Portal Uniwersytetu Vistula",
        },
      },
      fr: {
        translation: {
          enterUsernamePassword: "Entrez votre nom d'utilisateur et mot de passe",
          username: "Nom d'utilisateur",
          password: "Mot de passe",
          login: "Connexion",
          signinOffice365: "Se connecter avec Office365",
          noAccount: "Pas de compte ?",
          here: "Ici",
          vistulaFooter: "© Portail de l'Université Vistula",
        },
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
