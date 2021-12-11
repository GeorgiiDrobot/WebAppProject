import './App.css';
import i18n, { t } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const translationEn = {welcome: "Welcome!",
                      homepage: "Homepage",
                      about: "About",
                      whoAmI: "Who am I?"};
const translationRu = {welcome: "Добро пожаловать!",
                       homepage: "Домой",
                       about: "Инфо",
                       whoAmI: "Кто я?"};


i18n
  .use(initReactI18next)
  .init( {
    resources: {
      en: {translation: translationEn },
      ru: {translation: translationRu },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {escapeValue: false},
  })


function Home() {
  return (
    <>
      <main className='page-wrap'>
        <h2>{t('homepage')}</h2>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main className='page-wrap'>
        <h2>{t('whoAmI')}</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}


function App() {
    const {t} = useTranslation();

    const onChange = (event) => {
      i18n.changeLanguage(event.target.value);
    }





  return (
    <Suspense fallback="loading.." >
    <div className="App">
      
      <header className="App-header">
      <h1>{t('welcome')}</h1>
        <nav className='nav-panel'>
          <ul>
            <li><Link to="/home">{t('homepage')}</Link></li>
            <li><Link to="/about">{t('about')}</Link></li>
          </ul>
        </nav>
        
        <select name="language" onChange={onChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
    </Suspense>
  );
}

export default App;
