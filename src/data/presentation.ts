type Social = {
  label: string;
  link: string;
  icon: string;
  colorIcon: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

type InformacionPersonal = {
  age: number;
}

const presentation: Presentation = {
  mail: "🇧🇴 maicolarteaga0711@gmail.com",
  title: "Soy Maicol Erick 👋",
  profile: "/astronauta.jpg",
  description:
    "🥑Hola, soy un programador Full-stack que busca mejorar constantemente llevo aproxidamente 2 años mejorando mis habilidades tanto en la programación como mis habilidades blandas. ",
  socials: [
    {
      icon: 'fas fa-envelope fa-lg',
      label: "",
      link: "mailto:maicolarteaga0711@gmail.com?Subjet=Interesado%20en%20sus%20servicios",
      colorIcon: "",
    },
    {
      icon: 'fab fa-linkedin fa-lg',
      label: "",
      link: "https://www.linkedin.com/in/maicolerickarteaga/",
      colorIcon: "",
    },
    {
      icon: 'fab fa-github fa-lg',
      label: "",
      link: "https://github.com/Erick0711",
      colorIcon: "",
    },
  ],
};

const informacionPersonal: InformacionPersonal = {
  age: 24
}

export default presentation;
