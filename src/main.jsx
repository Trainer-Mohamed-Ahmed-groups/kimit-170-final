import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'sweetalert2/src/sweetalert2.scss'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enTranslation from "./locale/en.json"
import arTranslation from "./locale/ar.json"
import ThemeProvider from './context/ThemeContext.jsx';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: localStorage.getItem('language'),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
