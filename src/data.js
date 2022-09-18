import Hero from "./images/hero.png";
import Real1 from "./images/real1.png";
import Real2 from "./images/real2.png";
import Real3 from "./images/real3.png";
import Coaching from "./images/coaching.png";
import Brand1 from "./images/brand1.png";
import Brand2 from "./images/brand2.png";
import Brand3 from "./images/brand3.png";
import Brand4 from "./images/brand4.png";
import Brand5 from "./images/brand5.png";
import Model from "./images/model.png";

export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Our Models",
    href: "our_models",
  },
  {
    name: "Gallery",
    href: "our_models",
  },
  {
    name: "Blog",
    href: "our_models",
  },
];

export const hero = {
  title: "BE YOU TI FUL",
  subtitle:
    "The secret to modelling is not being perfect, being a model is about more than just beauty. We bring out the real model in you, letting your star shine even brighter. ",
  buttonText1: "Become A Model",
  buttonText2: "Hire A model",
  image: <Hero/>
};

export const model = {
  image: <Model/>,  
  heading: "Our Model",
  title: "ARAMIDE DOLE",
  subtitle:
    "Aramide Dole was born in Nigeria. She started her modelling career with Real Agency after one of our scouts discovered her in a slum in Makoko, Lagos Nigeria. She has worked with numerous brands, including Fendi, L’Oreal, New Look and others, Aramide's rise to fame has encouraged a lot of young girls who came from where she was born. In 2020 Aramide won the Model Award Africa as the Fast rising African Model of the year. She was also nominated as Flebandy Model of the year.",
  buttonModel: "See More"
};

export const real = {
  heading: "INSIDE REAL",
  items: [
    {
      image: <Real1 />,
      title: "",
      subtitle: "",
    },
    {
      image: <Real2 />,
      title: "",
      subtitle: "",
    },
    {
      image: <Real3 />,
      title: "",
      subtitle: "",
    },
  ],
};