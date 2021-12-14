import './App.css';
import i18n, { t } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Suspense, useEffect, useRef, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Formik } from 'formik';
import NewsList from './components/NewsList';
import Card from './components/Card';


const translationEn = {
  welcome: "Welcome!",
  homepage: "Homepage",
  about: "Drawing",
  news: "News",
  tryIt: "Try to draw your first NFT!",
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
  firstQuestion: "What is NFT? How does this abbreviation stand for?",
  firstAnswer: "NFT - Non-fungible token",
  secQuestion: "How does it work?",
  secAnswer: "Most NFT tokens are part of the Ethereum blockchain. Ethereum is a cryptocurrency, the same as bitcoin or dogecoin, but its blockchain also supports NFT tokens. They store additional information that makes these tokens work differently compared to the ETH cryptocurrency. It is worth noting that other blockchains can implement their own versions of NFT. By the way, some have already done it.",
  thirdQuestion: "What should I buy at the NFT supermarket?",
  thirdAnswer: "NFT tokens are anything but necessarily digital. For example, drawings, music, your brain downloaded and turned into artificial intelligence. But the real excitement was associated with the use of this technology for the sale of digital art.",
  forthQuestion: "So people can buy my cool tweets?",
  forthAnswer: "I don't think anyone will be able to prevent their sale, but that's not exactly what I meant. Many people talk about NFT as an evolution of fine art collecting — digital art collecting.",
  fifthQuestion: "Do people really think this is going to turn into art collecting?",
  fifthAnswer: "I'm sure some people hope so. For example, someone who paid almost $390,000 for a 50-second video by Grimes, or a person who paid $6.6 million for a video by the artist Beeple. This is a really cool artist, one of his works is being auctioned by Christie's.",
  sixthQuestion: "You will say that you can right-click on the Beeple video and upload a file for which some person paid millions of dollars.",
  sixthAnswer: "How rude! But yes, that's when it gets a little... weird. You can copy a digital file as many times as you want, including the very works that are sold as NFT. But NFTs are designed to give you something that cannot be copied: the ownership of the work (although the artist can still retain copyright and reproduction rights, as is the case with real works of art). Speaking in terms of collecting fine art: anyone can buy a copy of a Monet painting. But only one person will own the original.",
  seventhQuestion: "So, is each NFT unique?",
  seventhAnswer: "In a boring, technical sense, each NFT is a unique token in the blockchain. Acquiring an NFT can be like buying a Van Gogh when there is only one final and real version of the painting. But, in fact, an NFT can also be a collectible card when there are 50 or 100 numbered copies of the same work of art.",
  eighthQuestion: "I heard something about kittens. Tell me about the kittens.",
  eighthAnswer: "NFT tokens became technically possible when the Ethereum blockchain added their support as part of a new standard. Of course, one of the first uses of such tokens was the CryptoKitties game, which offered users to trade and sell virtual kittens. Thank you, Internet!",
  ninethQuestion: "Can I buy NFT with cryptocurrency?",
  ninethAnswer: "Yeah, probably. Many trading platforms accept Ethereum. But technically, everyone can sell NFT and request any currency they want.",
};
const translationRu = {
  welcome: "Привет!",
  homepage: "Домой",
  about: "Рисование",
  news: "Новости",
  tryIt: "Попробуйте нарисовать Ваш первый NFT!",
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
  firstQuestion: "Что такое NFT? Как расшифровывается эта аббревиатура?",
  firstAnswer: "NFT (Non-fungible token) — не-взаимозаменяемые токены.",
  secQuestion: "Как это работает?",
  secAnswer: "Большинство NFT-токенов являются частью блокчейна Ethereum. Ethereum — это криптовалюта, такая же как биткойн или dogecoin, но ее блокчейн поддерживает и NFT-токены. Они хранят дополнительную информацию, которая заставляет эти токены работать иначе, по сравнению с криптовалютой ETH. Стоит отметить, что другие блокчейны могут реализовывать свои собственные версии NFT. Кстати, некоторые уже это сделали.",
  thirdQuestion: "Что стоит купить в NFT-супермаркете?",
  thirdAnswer: "NFT-токены — это что угодно, но обязательно цифровое. Например, рисунки, музыка, ваш мозг, скачанный и превращенный в искусственный интеллект. Но настоящий ажиотаж был связан с использованием этой технологии для продажи именно цифрового искусства.",
  forthQuestion: "То есть люди могут купить мои крутые твиты?",
  forthAnswer: "Не думаю, что кто-то сможет препятствовать их продаже, но я не совсем это имел в виду. Многие говорят о NFT как об эволюции коллекционирования изобразительного искусства — коллекционирование цифрового искусства.",
  fifthQuestion: "Неужели люди думают, что это действительно превратится в коллекционирование произведений искусства?",
  fifthAnswer: "Я уверен, что некоторые люди на это надеются. Например, тот, кто заплатил почти 390 000 долларов за 50-секундное видео Граймс, или человек, заплативший 6,6 миллиона долларов за видео художника Beeple. Это правда крутой художник, одно из его произведений выставлено на аукционе «Кристис» (Christie’s).",
  sixthQuestion: "Вы скажете, что можно щелкнуть по видео Beeple правой кнопкой мыши и загрузить себе файл, за который какой-то человек заплатил миллионы долларов.",
  sixthAnswer: "Как грубо! Но да, именно в этот момент становится немного… странно. Вы можете скопировать цифровой файл сколько угодно раз, включая те самые произведения, которые продаются как NFT. Но NFT предназначены для того, чтобы дать вам то, что нельзя скопировать: право собственности на произведение (хотя художник по-прежнему может сохранять авторские права и права на воспроизведение, как и в случае с реальными произведениями искусства). Если говорить в терминах коллекционирования изобразительного искусства: любой желающий может купить копию картины Моне. Но только один человек будет владеть оригиналом.",
  seventhQuestion: "Итак, каждый NFT уникален?",
  seventhAnswer: "В скучном, техническом смысле каждый NFT — это уникальный токен в блокчейне. Приобретение NFT может быть похоже на покупку Ван Гога, когда есть только одна окончательная и реальная версия картины. Но, на самом деле, NFT может представлять собой и коллекционную карточку, когда есть 50 или 100 пронумерованных копий одного и того же произведения искусства.",
  eighthQuestion: "Я слышал, что-то о котятах. Расскажите мне про котят.",
  eighthAnswer: "NFT-токены стали технически возможными, когда блокчейн Ethereum добавил их поддержку как часть нового стандарта. Конечно, одним из первых использований таких токенов стала игра CryptoKitties, которая предлагала пользователям торговать и продавать виртуальных котят. Спасибо, Интернет!",
  ninethQuestion: "Могу ли я купить NFT за криптовалюту?",
  ninethAnswer: "Да, наверное. Многие торговые площадки принимают Ethereum. Но технически каждый человек может продать NFT и запросить любую валюту, какую захочет.",

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

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)



  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2)
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke();
  }
  return (

    <div className='page-wrap'>
      <div className='main'><h2>{t('tryIt')}</h2>
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />



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
        <div className='faq-container'>
          <div className='question-container'>
            <h2>{t('firstQuestion')}</h2>
            <p>{t('firstAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('secQuestion')}</h2>
            <p>{t('secAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('thirdQuestion')}</h2>
            <p>{t('thirdAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('forthQuestion')}</h2>
            <p>{t('forthAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('fifthQuestion')}</h2>
            <p>{t('fifthAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('sixthQuestion')}</h2>
            <p>{t('sixthAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('seventhQuestion')}</h2>
            <p>{t('seventhAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('eighthQuestion')}</h2>
            <p>{t('eighthAnswer')}</p>
          </div>
          <div className='question-container'>
            <h2>{t('ninethQuestion')}</h2>
            <p>{t('ninethAnswer')}</p>
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
                if (!values.email || !values.password) {
                  errors.email = 'Please fill the form';
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
