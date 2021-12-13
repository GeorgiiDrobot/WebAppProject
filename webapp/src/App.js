import './App.css';
import i18n, { t } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Formik } from 'formik';
import NewsList from './components/NewsList';
import Card from './components/Card';


const translationEn = {
  welcome: "Welcome!",
  homepage: "Homepage",
  about: "About",
  news: "News",
  whoAmI: "Who am I?",
  contact: "Contact",
  email: "E-mail",
  password: "Password",
  required: "Required",
  submit: "Submit",
  homeHeading: "Most interesting NFTs",
  firstNftStory: "In 2017, the Larva Labs team launched the CryptoPunks project of 10,000 NFT images measuring 24x24 pixels. Initially, many non-interchangeable tokens from this collection were distributed for free.",
  firstSecParag: "These are the creators of CryptoPunks, the pioneers of NFT. John Watkinson and Matt Hall created a blockchain with 10,000 characters. The emphasis was on maximum simplicity — two-dimensional pixel images resembling Minecraft characters.",
  firstText: "On February 19, one of 24 cryptopunk monkeys was sold. At the time of writing, #6965 ranks third in terms of selling price among the CryptoPunks collection.",
  secondNftText: "Oh hi! I'm Sub-Million Pali ID 312213. All you need to know about me is I hate cereal with a passion. When I'm not summoning ghosts, I'm playing chess! I like your face.",
  secondNftInfo: "In CryptoKitties, users collect and breed oh-so-adorable creatures that we call CryptoKitties! Each kitty has a unique genome that defines its appearance and traits. Players can breed their kitties to create new furry friends and unlock rare cattributes.",
  secondNftInfoPar: "CryptoKitties is one of the world’s first blockchain games. ‘Blockchain’ is the technology that makes things like Bitcoin possible. While CryptoKitties isn’t a digital currency, it does offer the same security: each CryptoKitty is one-of-a-kind and 100% owned by you. It cannot be replicated, taken away, or destroyed.",
  contactHeading: "If you want to contact me - Sign up!",
};
const translationRu = {
  welcome: "Привет!",
  homepage: "Домой",
  about: "Инфо",
  news: "Новости",
  whoAmI: "Кто я?",
  contact: "Контакты",
  email: "Логин",
  password: "Пароль",
  required: "Необходимо",
  submit: "Отправить",
  homeHeading: "Самые интересные NFT",
  firstSecParag: "Это создатели Криптопанков (CryptoPunks), первопроходцы NFT. Джон Уоткинсон и Мэтт Холл создали блокчейн с 10 000 персонажей. Упор был на максимальную простоту — двухмерные пиксельные изображения, напоминающие персонажей Minecraft.",
  firstNftStory: "В 2017 году команда Larva Labs запустила проект CryptoPunks из 10 000 NFT-изображений размером 24х24 пикселей. Изначально многие невзаимозаменяемые токены из этой коллекции были распределены бесплатно.",
  firstText: "19 февраля был продан один из 24 криптопанков-обезьян. На момент написания #6965 занимает третье место по цене продажи среди коллекции CryptoPunks.",
  secondNftText: "О, привет! Я Субмиллионный палийский идентификатор 312213. Все, что вам нужно знать обо мне, это то, что я страстно ненавижу хлопья. Когда я не вызываю призраков, я играю в шахматы! Мне нравится твое лицо.",
  secondNftInfo: "В CryptoKitties пользователи собирают и разводят таких очаровательных существ, которых мы называем CryptoKitties! У каждого котенка есть уникальный геном, который определяет его внешний вид и черты характера. Игроки могут разводить своих кошечек, чтобы заводить новых пушистых друзей и открывать редкие атрибуты кошек.",
  secondNftInfoPar: "CryptoKitties - одна из первых в мире блокчейн-игр. Блокчейн - это технология, которая делает возможными такие вещи, как Биткойн. Хотя CryptoKitties не является цифровой валютой, она обеспечивает ту же безопасность: каждый CryptoKitty является единственным в своем роде и на 100 % принадлежит вам.",
  contactHeading: "Если хотите связаться со мной - зарегистрируйтесь!",
};


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      ru: { translation: translationRu },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  })





function App() {


  const { t } = useTranslation();
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
              <li><Link to="/contact">{t('contact')}</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/news">{t('news')}</Link></li>
            </ul>
          </nav>

          <select name="language" onChange={onChange}>
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/news" element={<News />} />

        </Routes>
      </div>
    </Suspense>
  );
}

function About() {
  return (
    
      <div className='page-wrap'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='main'><h2>{t('whoAmI')}</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>

        </div>

        <div className='footer'>
        <ul>
                <li><a href="//">Facebook</a></li>
                <li><a href="//">GitHub</a></li>
                <li><a href="//">LinkedIn</a></li>
            </ul>
        </div>

      </div>

      
    
  );
}

function Faq() {
  return (
    
      <div className='page-wrap'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='main'>
        </div>

        <div className='footer'>
        <ul>
                <li><a href="//">Facebook</a></li>
                <li><a href="//">GitHub</a></li>
                <li><a href="//">LinkedIn</a></li>
            </ul>
        </div>

      </div>

      
    
  );
}

function News() {
  return (
    
      <div className='page-wrap'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='main'>
          <NewsList />
        </div>

        <div className='footer'>
        <ul>
                <li><a href="//">Facebook</a></li>
                <li><a href="//">GitHub</a></li>
                <li><a href="//">LinkedIn</a></li>
            </ul>
        </div>

      </div>

      
    
  );
}

function Contact() {


  return (
    <>
      <div className='page-wrap'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='main'>
          <div className='contactHeading'>
            <h2>{t('contactHeading')}</h2>
          </div>
          <div>
            <Formik
              className='form'
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={t('email')}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder={t('password')}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    {t('submit')}
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className='footer'>
        <ul>
                <li><a href="//">Facebook</a></li>
                <li><a href="//">GitHub</a></li>
                <li><a href="//">LinkedIn</a></li>
            </ul>
        </div>

      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <div className='page-wrap'>
        <div className='left'></div>
        <div className='right'></div>
        <div className='main'>
          <h2>{t('homeHeading')}</h2>
          <div className='cardsLayout'>
            <Card
              title={'CryptoPunk #6965'}
              imageUrl='https://forklog.com/wp-content/uploads/888-1024x342.png'
              text={t('firstText')}
            />
            <div className='cardInfo'>
              <p>{t('firstNftStory')}</p>
              <p>{t('firstSecParag')}</p>
            </div>
          </div>

          <div className='cardsLayout'>
            <Card
              title={'Sub-Million Pali ID 312213'}
              imageUrl='https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/312213.svg'
              text={t('secondNftText')}
            />
            <div className='cardInfo'>
              <p>{t('secondNftInfo')}</p>
              <p>{t('secondNftInfoPar')}</p>
            </div>
          </div>



        </div>

        <div className='footer'>
        <ul>
                <li><a href="//">Facebook</a></li>
                <li><a href="//">GitHub</a></li>
                <li><a href="//">LinkedIn</a></li>
            </ul>
        </div>

      </div>
    </>
  );
}



export default App;
