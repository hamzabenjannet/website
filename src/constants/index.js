import {
  backendDeveloperSvg,
  cloudAdministratorSvg,
  cloudDeskPng,
  clubbookPng,
  cssPng,
  edidactPng,
  figmaPng,
  gitPng,
  htmlPng,
  javascriptPng,
  jenkinsPng,
  linuxPenguinPng,
  mongodbPng,
  nodejsPng,
  phpPng,
  reactNativeDeveloperSvg,
  reactjsPng,
  reduxPng,
  sentinelPng,
  softwareEngineerSvg,
  typescriptPng,
  wordpressPng,
} from "../assets";

import styles from "../styles";

export const navLinks = [
  {
    id: "#About",
    title: "about",
  },
  {
    id: "#Experience",
    title: "experience",
  },
  {
    id: "#Projects",
    title: "projects",
  },
  // {
  //   id: "#music",
  //   title: "music",
  // },
  // {
  //   id: "#photography",
  //   title: "photography",
  // },
  // {
  //   id: "#Blog",
  //   title: "blog",
  // },
  // {
  //   id: "#Shop",
  //   title: "shop",
  // },
  {
    id: "#Contact",
    title: "contact",
  },
];

const about = [
  {
    title: "about.title",
    label: "about.label",
    content: "about.description.content",
  },
];

const services = [
  {
    title: "serviceCard.service.title.0",
    icon: softwareEngineerSvg,
  },
  {
    title: "serviceCard.service.title.1",
    icon: reactNativeDeveloperSvg,
  },
  {
    title: "serviceCard.service.title.2",
    icon: backendDeveloperSvg,
  },
  {
    title: "serviceCard.service.title.3",
    icon: cloudAdministratorSvg,
  },
];

const experiences = [
  {
    title: "experience.experienceCard.0.title",
    company_name: "experience.experienceCard.0.company_name",
    date: "experience.experienceCard.0.date",
    points: [
      "experience.experienceCard.0.points.0",
      "experience.experienceCard.0.points.1",
      "experience.experienceCard.0.points.2",
      "experience.experienceCard.0.points.3",
    ],
    icon: "https://maxapps-maximo.com/maxapps-logo.svg",
    iconBg: "#e9e9e9",
  },
  {
    title: "experience.experienceCard.1.title",
    company_name: "experience.experienceCard.1.company_name",
    icon: "https://branper.com/logo.png",
    iconBg: "#e9e9e9",
    date: "experience.experienceCard.1.date",
    points: [
      "experience.experienceCard.1.points.0",
      "experience.experienceCard.1.points.1",
      "experience.experienceCard.1.points.2",
      "experience.experienceCard.1.points.3",
      "experience.experienceCard.1.points.4",
      "experience.experienceCard.1.points.5",
    ],
  },
  {
    title: "experience.experienceCard.2.title",
    company_name: "experience.experienceCard.2.company_name",
    icon: "https://edidact.ch/wp-content/uploads/2023/06/Logo-edidact.png",
    iconBg: "#e9e9e9",
    date: "experience.experienceCard.2.date",
    points: [
      "experience.experienceCard.2.points.0",
      "experience.experienceCard.2.points.1",
      "experience.experienceCard.2.points.2",
      "experience.experienceCard.2.points.3",
      "experience.experienceCard.2.points.4",
      "experience.experienceCard.2.points.5",
    ],
  },
  {
    title: "experience.experienceCard.3.title",
    company_name: "experience.experienceCard.3.company_name",
    icon: "https://www.utopia.tn/wp-content/uploads/2021/05/cropped-logo-utopia-1.png",
    iconBg: "#E6DEDD",
    date: "experience.experienceCard.3.date",
    points: [
      "experience.experienceCard.2.points.0",
      "experience.experienceCard.2.points.1",
      "experience.experienceCard.2.points.2",
      "experience.experienceCard.2.points.3",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: htmlPng,
  },
  {
    name: "CSS 3",
    icon: cssPng,
  },
  {
    name: "JavaScript",
    icon: javascriptPng,
  },
  {
    name: "TypeScript",
    icon: typescriptPng,
  },
  {
    name: "React JS",
    icon: reactjsPng,
  },
  {
    name: "React Native",
    icon: reduxPng,
  },
  {
    name: "Node JS",
    icon: nodejsPng,
  },
  {
    name: "MongoDB",
    icon: mongodbPng,
  },
  {
    name: "PHP",
    icon: phpPng,
  },
  {
    name: "Wordpress",
    icon: wordpressPng,
  },
  {
    name: "Linux",
    icon: linuxPenguinPng,
  },
  {
    name: "Jenkins",
    icon: jenkinsPng,
  },
  {
    name: "Git",
    icon: gitPng,
  },
  {
    name: "Figma",
    icon: figmaPng,
  },
];

const projects = [
  {
    name: "projects.projectCard.name.0",
    description: "projects.projectCard.description.0",
    tags: [
      {
        name: "Maximo",
        color: "blue-text-gradient",
      },
      {
        name: "React Native",
        color: "orange-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://maxapps-maximo.com/static/732d43e1e844171ca23022b4c70a27bf/4034d/herosectionIm.webp",
    project_link: "https://maxapps-maximo.com/why-choosing-ibm-maximo-solution",
  },
  //
  {
    name: "projects.projectCard.name.1",
    description: "projects.projectCard.description.1",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "LLMs",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://branper.uat.branper.com/static/media/pros.69278443e7673a034a19.jpg",
    project_link: "https://branper.com",
  },

  {
    name: "projects.projectCard.name.2",
    description: "projects.projectCard.description.2",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "LLM/AI",
        color: "orange-text-gradient",
      },
    ],
    image: sentinelPng,
    project_link: "https://sentinel.branper.com",
  },
  {
    name: "projects.projectCard.name.3",
    description: "projects.projectCard.description.3",
    tags: [
      {
        name: "VueJs",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "CI/CD",
        color: "blue-text-gradient",
      },
      {
        name: "Open Fire",
        color: "pink-text-gradient",
      },
      {
        name: "vs-code",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "orange-text-gradient",
      },
    ],
    image: cloudDeskPng,
    project_link: "#",
  },
  {
    name: "portfolio.projects.projectCard.name.4",
    description: "projects.projectCard.description.4",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Open Fire/Jitsi",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "blue-text-gradient",
      },
    ],
    image: edidactPng,
    project_link: "https://edidact.ch/",
  },
  {
    name: "projects.projectCard.name.5",
    description: "projects.projectCard.description.5",
    tags: [
      {
        name: "PrestaShop",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "jQuery",
        color: "green-text-gradient",
      },
    ],
    image: clubbookPng,
    project_link: "http://club-book.com",
  },
];

const footer = {
  title: "footer.title",
  links: [
    {
      title: "footer.links.0.title",
      underline: "[soundcloud.com/ocean-fly]",
      href: "http://soundcloud.com/ocean-fly/tracks",
      reactIconBs: "BsSoundwave",
    },
    {
      title: "footer.links.1.title",
      underline: "[eyeem.com/u/oceanfly]",
      href: "https://www.eyeem.com/p/94835674?u=https://www.eyeem.com/u/oceanfly/market",
      reactIconBs: "BsFileImage",
    },
    {
      title: "footer.links.2.title",
      underline: "[github.com/hamzabenjnnet/website]",
      href: "https://github.com/hamzabenjannet/website",
      reactIconBs: "BsGithub",
    },
  ],
};

export { styles, about, services, technologies, experiences, projects, footer };
