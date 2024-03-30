export type Experiences = {
  company: string;
  technologies: string[];
  description: string;
  puesto: string
  };
  
  const projects: Experiences[] = [
    {
      company: "Universidad Privada Cumbre:",
      technologies: ["PASANTE - SOPORTE TECNICO"],
      description: "Soporte Aulas, Docentes, Estudiantes, Cableado de aulas, Instalacion de sistemas operativos.",
      puesto: "Pasante"
    },
    {
      company: "Biopetrol:",
      technologies: ["HTML", "CSS", "JS", "CODEIGNITER"],
      description: "Programador aprendiz, creación de KPI para recursos humanos RRHH.",
      puesto: "Programador"
    },
    {
      company: "Universidad Privada Cumbre:",
      technologies: ["HTML", "CSS", "JS", "PHP", "JQUERY"],
      description: "Creación de sistema de convalidación, creacion reportes, y mantenimiento del sistema CEC.",
      puesto: "Programador Jr."
    },
    {
      company: "Universidad Privada Cumbre:",
      technologies: ["HTML", "MYSQL", "CSS", "JS", "PHP", "ORACLE", "LARAVEL", "REACT"],
      description: "Mantenimiento del sistema de CAJA (CEC), mantemiento del portal Cumbre, y portal ITC y creación de nuevas funcionalidades.",
      puesto: "Programador Jr."
    },
  ];
  
  export default projects;
  