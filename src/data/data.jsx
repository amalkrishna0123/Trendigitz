import heroimg from "./../assets/heroimg.png";

import hightlightimg from "./../assets/highlightimg.png";
import bussinesman from "./../assets/snekerimg.png";

import clip from "./../assets/clip.mp4";
import vcover1 from "./../assets/vcover1.jpg";
import vcover2 from "./../assets/vcover2.jpg";
import vcover3 from "./../assets/vcover3.jpg";

import psale1 from "./../assets/psale1.png";
import psale2 from "./../assets/psale2.png";
import psale3 from "./../assets/psale3.png";

import product1 from "./../assets/product1.png";
import product2 from "./../assets/product2.png";
import product3 from "./../assets/product3.png";
import product4 from "./../assets/product4.png";
import product5 from "./../assets/product5.png";
import product6 from "./../assets/product6.png";
import product7 from "./../assets/product7.png";
import product8 from "./../assets/product8.png";
import product9 from "./../assets/product9.png";
import product10 from "./../assets/product10.png";



import facebook from "./../assets/facebook.svg";
import instagram from "./../assets/instagram.svg";
import twitter from "./../assets/twitter.svg";
import youtube from "./../assets/youtube.svg";
import messenger from "./../assets/messenger.svg";

const heroapi = {
  title: "In a World of Trends",
  subtitle: "Remain Timeless",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Noise Quad Call 1.81",
      text: "ColorFit Quad Call",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "1999",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Fire-Boltt Phoenix Pro 1.39",
      text: "	Phoenix Pro",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Diesel Analog Black",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "Apple Watch Ultra 2 WITH LIMITLESS CHOICES",
  text: "Our mission is to propel time forward. We achieve this by fostering a sense of community through our timepieces, contributing to the preservation of our planet, and enhancing accessibility to the world of sports through innovative watch designs.",
  btn: "Explore More",
  url: "https://www.amazon.in/Apple-Cellular-Smartwatch-Precision-Extra-Long/dp/B0CHY1ZNT4/ref=sr_1_12?keywords=apple%2Bwatch&qid=1700660548&sr=8-12&th=1",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "boAt Newly Launched Wave Elevate Pro Smart Watch",
  text: "Through our meticulously crafted timepieces, we strive to advance the world by uniting communities, championing environmental stewardship, and promoting the inclusive spirit of sports for everyone",
  btn: "Explore More",
  url: "https://www.amazon.in/boAt-Elevate-Functional-Assistant-Monitoring/dp/B0CH3558KP/ref=sr_1_33?crid=2X4SG3ZGEBOHT&keywords=watch&psr=EY17&qid=1700662511&s=todays-deals&sprefix=watch%2Ctodays-deals%2C285&sr=1-33&th=1",
  img: bussinesman,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "NIBOSI Men's Analog Watch",
      text: " Casual Watches with Stainless Steel",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "2149",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Fire-Boltt Jewel",
      text: "Luxury Stainless Steel Smart Watch",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "2499",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Fastrack Limitless FS1 Pro",
      text: "Luxury Stainless Steel Smart Watch",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "3599",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Cultsport Ace X 1.96",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "3199",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "NAVIFORCE 9197L-GGNGN",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "4299",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "NIBOSI Watch ",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "3399",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Casio Watch-MTP-V300L-1AUDF",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "2599",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Casio Edifice EFR-539SG-1AVUDF(EX188)",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "3700",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "boAt Xtend Talk Smart Watch ",
      text: "Luxuary Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "4200",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "boAt Ultima Call Max",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "2999",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "TAGG Verve NEO Smartwatch 1.69",
      text: "Luxuary Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "3399",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "boAt Wave Elevate Smart Watch",
      text: "Premium Metallic Build Smartwatch",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "4299",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Premium Brands",
  news: [
    {
      title: "Samsung Galaxy Watch5 Bluetooth",
      text: "The Samsung Galaxy Watch5 Bluetooth is an epitome of style and innovation, tailored exclusively for Android users. With a stunning 44mm sapphire display, it offers a brilliant visual experience. Elevate your connectivity and lifestyle with advanced features",
      img: "https://m.media-amazon.com/images/I/41s2wuK+FdL._SX342_SY445_.jpg",
      url: "https://www.amazon.in/Samsung-Bluetooth-Sapphire-Compatible-Android/dp/B0B99Q76XT/ref=sr_1_19?crid=3KQ3GWCL0N5E0&keywords=samsung+watch&qid=1700664724&rnid=3439816031&s=watches&sprefix=samsung+watch%2Cwatches%2C288&sr=1-19",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Apple Watch SE smart watch",
      text: "The Apple Watch SE (2nd Gen) [GPS + Cellular 40mm] is a cutting-edge smartwatch that seamlessly integrates into your active lifestyle. With GPS and cellular capabilities.",
      img: "https://m.media-amazon.com/images/I/71lGe8rucNL._SX679_.jpg",
      time: "41 Mins",
      like: "5/5",
      url: "https://www.amazon.in/Apple-Watch-Cellular-Starlight-Aluminium/dp/B0BDKKTM6B/ref=sr_1_8?crid=2PNRQ5H32BH2B&keywords=watch&qid=1700663635&refinements=p_36%3A3000000-&rnid=3439816031&sprefix=watch%2Caps%2C328&sr=8-8&th=1",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Apple Watch Series 9 ",
      text: "Smartwatch with Midnight Aluminum Case with Midnight Sport Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
      img: "https://m.media-amazon.com/images/I/81mHRsWENaL._SX679_.jpg",
      time: "2 Hours",
      url: "https://www.amazon.in/Apple-Smartwatch-Midnight-Aluminum-Resistant/dp/B0CHY11Z6T/ref=sr_1_12?crid=2PNRQ5H32BH2B&keywords=watch&qid=1700663635&refinements=p_36%3A3000000-&rnid=3439816031&sprefix=watch%2Caps%2C328&sr=8-12",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Samsung Galaxy Watch6 LTE",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: "https://m.media-amazon.com/images/I/716k1yOpslL._SX679_.jpg",
      time: "7 Months",
      url: "https://www.amazon.in/Samsung-Galaxy-Graphite-Compatible-Android/dp/B0CCV7WCPV/ref=sr_1_20?crid=2PNRQ5H32BH2B&keywords=watch&qid=1700663635&refinements=p_36%3A3000000-&rnid=3439816031&sprefix=watch%2Caps%2C328&sr=8-20",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Apple Watch Series 8 ",
      text: "Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
      img: "https://m.media-amazon.com/images/I/71ulah9iIwL._SX679_.jpg",
      time: "1 Months",
      url: "https://www.amazon.in/Apple-Midnight-Aluminium-Fitness-Resistant/dp/B0BDKGNDTV/ref=sr_1_29?crid=2PNRQ5H32BH2B&keywords=watch&qid=1700663635&refinements=p_36%3A3000000-&rnid=3439816031&sprefix=watch%2Caps%2C328&sr=8-29&th=1",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Fire-Boltt Asteroid 1.43",
      text: "Super AMOLED Display Smart Watch, One Tap Bluetooth Calling, 466 * 466 px Resolution, 123 Sports Modes, in-Built Voice Assistance, 350mAh Large Battery (Black)",
      img: "https://m.media-amazon.com/images/I/71AxLdT5lJL._SX679_.jpg",
      time: "25 Days",
      url: "https://www.amazon.in/Fire-Boltt-Asteroid-Bluetooth-Resolution-Assistance/dp/B0C5D2HW1Z/ref=sr_1_1_sspa?keywords=samsung%2Bwatch&qid=1700664473&s=watches&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Samsung Galaxy Watch5 Pro LTE",
      text: "The Samsung Galaxy Watch5 Pro LTE is a pinnacle of smartwatch innovation, exclusively crafted for Android users. With a premium 45mm black titanium build, it epitomizes sophistication and durability. Unleash the power of LTE connectivity",
      img: "https://m.media-amazon.com/images/I/31xxEYRx4aL._SX300_SY300_QL70_FMwebp_.jpg",
      url: "https://www.amazon.in/Samsung-Galaxy-Titanium-Compatible-Android/dp/B0B99PHSS1/ref=sr_1_12?crid=3KQ3GWCL0N5E0&keywords=samsung+watch&qid=1700664724&rnid=3439816031&s=watches&sprefix=samsung+watch%2Cwatches%2C288&sr=1-12",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Samsung Galaxy Watch4",
      text: "The Samsung Galaxy Watch4 Classic Bluetooth is a powerful and stylish smartwatch tailored for Android compatibility. Boasting a 4.6 cm display, it delivers vibrant visuals and advanced features. Its sleek black design exudes sophistication",
      img: "https://m.media-amazon.com/images/I/319h2OJ4JZL._SY445_SX342_QL70_FMwebp_.jpg",
      url: "https://www.amazon.in/Galaxy-Watch4-Classic-Bluetooth-4-6cm/dp/B09DG9HY4M/ref=sr_1_11?crid=3KQ3GWCL0N5E0&keywords=samsung+watch&qid=1700664724&rnid=3439816031&s=watches&sprefix=samsung+watch%2Cwatches%2C288&sr=1-11",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Samsung Galaxy Watch4 Bluetooth",
      text: "The Samsung Galaxy Watch4 Classic Bluetooth  is a sleek and sophisticated smartwatch designed for seamless integration with Android devices. With its 4.2 cm display, it offers a vivid visual experience, while its silver finish adds a touch of elegance. Elevate your connectivity and style with this cutting-edge wearable.",
      img: "https://m.media-amazon.com/images/I/71lGe8rucNL._SX679_.jpg",
      url: "https://www.amazon.in/Samsung-Galaxy-Watch4-Classic-Bluetooth/dp/B09DG6S874/ref=sr_1_9?crid=3KQ3GWCL0N5E0&keywords=samsung+watch&qid=1700664724&rnid=3439816031&s=watches&sprefix=samsung+watch%2Cwatches%2C288&sr=1-9",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About Trendigitz"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Trendigitz Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };