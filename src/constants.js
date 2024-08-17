// Home 

import homeimg from '../src/assets/home.webp'

// projects 
import p1 from './assets/reconcat.png'
import p2 from './assets/strike.png'
import p3 from './assets/ipin.png'


// skills icons 
import bash from '../src/assets/icons/bash.svg'
import linux from '../src/assets/icons/linux.svg'
import bootstrap from '../src/assets/icons/bootstrap.svg'
import c from '../src/assets/icons/c.svg'
import css from '../src/assets/icons/css.svg'
import html from '../src/assets/icons/html.svg'
import js from '../src/assets/icons/js.svg'
import mysql from '../src/assets/icons/mysql.svg'
import git from '../src/assets/icons/git.svg'
import python from '../src/assets/icons/python.svg'
import rlang from '../src/assets/icons/rlang.svg'
import react from '../src/assets/icons/react.svg'
import scss from '../src/assets/icons/scss.svg'
import tailwind from '../src/assets/icons/tailwind.svg'

// education 
import eduImg from '../src/assets/eduimg.svg'

export const home = [
  {
    img:homeimg,
    name:"Mridupawan Bordoloi",
    description:"A dedicated ethical hacker and frontend web developer. I have a strong passion for exploring and embracing new technologies, constantly pushing the boundaries of my knowledge and expertise"
  }
]

export const about = [{
  aboutMe:"I am a dedicated ethical hacker and frontend web developer with a robust passion for exploring and embracing new technologies. Over the years, I have honed my skills in both fields, constantly pushing the boundaries of my knowledge and expertise. My journey began with a fascination for how things work under the hood, driving me to delve deep into the realms of cybersecurity and web development.As an ethical hacker, I specialize in identifying vulnerabilities in systems and applications before malicious actors can exploit them. My expertise spans various domains, including penetration testing, bug hunting, and security research."
}]

export const skills = [


  {
    img: html,
    name: 'HTML'
  },
  {
    img: css,
    name: 'CSS'
  },
  {
    img: tailwind,
    name: 'Tailwind'
  },
  {
    img: scss,
    name: 'SCSS'
  },
  {
    img: bootstrap,
    name: 'Bootstrap'
  },
  {
    img: js,
    name: 'Javascript'
  },
  {
    img: python,
    name: 'Python'
  },
  {
    img: c,
    name: 'C'
  },
  {
    img: rlang,
    name: 'R Lang'
  }
  ,
  {
    img: bash,
    name: 'Bash'
  }
  ,
  {
    img: react,
    name: 'ReactJS'
  },
  {
    img: linux,
    name: 'Linux'
  },
  {
    img: git,
    name: 'Git'
  },
  {
    img: mysql,
    name: 'MySQL'
  }


];

export const education = [
  {
    img:eduImg
  },
  {
    clgName:'Assam downtown University',
    course:'Master Degree :- MCA',
    year:'2024 - Present'
  },
  {
    clgName:'Aray Vidyapeeth College',
    course:'Bechalor Degree :- B.Com Hons',
    year:'2021 - 2023'
  },
  {
    clgName:'Royal Academy junior College',
    course:'12th :- Commerce',
    year:'2018 - 2020'
  }
]

export const projects = [
  {
    img: p1,
    name: "ReconCat",
    detail: 'ReconCat is a OSINT & reconnaissance tool written in bash script. ',
    btnText: 'Github',
    btnUrl: 'https://github.com/xxehacker/reconcat'
  },
  {
    img: p2,
    name: "Strike",
    detail: 'A python tool to quickly analyze all IPs and see which ones have open ports and vulnerabilities .',
    btnText: 'Github',
    btnUrl: 'https://github.com/xxehacker/strike'
  },
  {
    img: p3,
    name: "Ipinfoca",
    detail: 'The tool that collects information about IP address .',
    btnText: 'Github',
    btnUrl: 'https://github.com/xxehacker/ipinfoca'
  },
];


export const links = [
  {
    domain: 'https://www.x.com/',
    path: 'xxehacker',
  },
  {
    domain: 'https://www.instagram.com/',
    path: 'mridupawan_0x1',
  },
  {
    domain: 'https://www.github.com/',
    path: 'xxehacker',
  },
  {
    domain: 'https://www.medium.com/',
    path: '@xxehacker',
  },
  {
    domain: 'https://in.linkedin.com/in/',
    path: 'mridupawan-bordoloi-xxehacker',
  }
];