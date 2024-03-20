import fmdb from "../../assets/fmdb.jpg";
import Little_lemon from "../../assets/Little_lemon.jpg";
import Dashboard from "../../assets/Dashboard2.jpg";
import Foody_app from "../../assets/Foody_app.jpg";
import Subscription from "../../assets/Subscription.jpg";
import Portfolio_2 from "../../assets/Portfolio_2.jpg";
import Portfolio from "../../assets/Portfolio.jpg";

export const projects = [
  {
    id: "fmdb",
    img: fmdb,
    imgAlt: "Website link",
    imgInfo: "Free Movie Database App",
    description:
      "This Next.js-powered FMDB website offers users a seamless experience, featuring effortless CRUD operations for database management using APIs. Authentication is implemented using NextAuth.js for admin use cases. Tailwind CSS is utilized to ensure a sleek and modern interface. Real-time updates and smooth navigation are maintained, enhancing the database management experience",
    url: "https://fmdbase.vercel.app/",
    work: "Designer and Developer",
    instruction:
      "Enjoy free movies, explore a vast collection of movies available for free on legal online sources",
    link: "https://fmdbase.vercel.app/",
  },
  {
    id: "little_lemmon",
    img: Little_lemon,
    imgAlt: "Website link",
    imgInfo: "Restaurant Reservation App",
    description:
      "This React.js-powered restaurant reservation app allows users to effortlessly book their desired date and view real-time availability for booking times, leading them to a successful reservation confirmation.",
    url: "https://little-lemon-8a62a.web.app/",
    work: "Designer and Developer",
    instruction:
      "Click on Reserve a Table button, choose from given options for reservations and Voila!!!",
    link: "https://little-lemon-8a62a.web.app/",
  },
  {
    id: "dashboard",
    img: Dashboard,
    imgAlt: "Website link",
    imgInfo: "Login and Dashboard App",
    description:
      "This is a web application built using React.js. It includes a login page, a dashboard, and charts for data visualization. The application uses standard CSS for styling.",
    url: "https://dashboard-project-jet.vercel.app/dashboard",
    work: "Developer",
    instruction: "Login with random email Id and password",
    link: "https://dashboard-project-jet.vercel.app/",
  },
  {
    id: "foody",
    img: Foody_app,
    imgAlt: "Website link",
    imgInfo: "Food Ordering App",
    description:
      "This React.js and Firebase-powered web app enables seamless food ordering. Instantly updating the cart and calculating the total, it fetches food items from the database. Upon successful order placement, it records order details and personal information in the database.",
    url: "https://food-database-96eed.web.app/",
    work: "Developer",
    instruction:
      "Add food items, check Cart, click Order, add delivery details and Confirm",
    link: "https://food-database-96eed.web.app/",
  },
  {
    id: "subscription",
    img: Subscription,
    imgAlt: "Web link",
    imgInfo: "Subscription Plan App",
    description:
      "This is a responsive web application built using React.js and standard CSS for selecting subscription plan, when plan selected limited time offer and total price automatically gets updated based on plan",
    url: "https://subscription-72f41.web.app/",
    work: "Developer",
    instruction:
      "Select different plans to check updated discount and total price.",
    link: "https://subscription-72f41.web.app/",
  },
  {
    id: "portfolio2",
    img: Portfolio_2,
    imgAlt: "Website link",
    imgInfo: "Old Portfolio Showcase App",
    description:
      "This is a dummy portfolio web application built using React.js. It includes three sections: Introduction,Featured Projects and Contact me. When clicked on right side navigation (Projects & Contact Me), scrolls to respective sections",
    url: "https://portfolio-project-padam.web.app/",
    work: "Developer",
    instruction:
      "Click on Icons and other Navigation buttons to view the different sections of the app, scroll up to see navigation bar.",
    link: "https://portfolio-project-padam.web.app/",
  },
  {
    id: "Portfolio",
    img: Portfolio,
    imgAlt: "Website link",
    imgInfo: "Portfolio Showcase App",
    description:
      "This is a portfolio web application which you are looking at now, built using Next.js and React.js. It has carousel for Happy Client section. It includes a Home, Projects, Blog, About page. It uses grid css for listings and completely made with standard css.",
    url: "https://padamkarki.github.io/my_portfolio/",
    work: "Designer and Developer",
    instruction:
      "Navigate through different pages, Hover over and click on cards for checking animation",
    link: "https://padamkarki.github.io/my_portfolio/",
  },
];

export const webProjects = [];
