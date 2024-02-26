export default function Projects() {

  const projects = [
    {
      name: 'Api Postres',
      description: "Proyecto educativo realizado en la Unviersidad Politécnico Grancoombiano de una aplicación CRUD realizada en express.js y Vue. En este proyecto se encuentra tanto los archivos del frontend, backend y la BD usada.",
      projectsImageSrc: "../src/assets/Photos/pj1.png",
      githubLink: "https://github.com/enrojass04/API-Postres-Vue-Node",
    },
    {
      name: 'Wordle',
      description: "Proyecto educativo realizado en la Unviersidad Politécnico Grancoombiano usando programación POO, lenguajes usados Java, DB MySQL, y JavaFX.",
      projectsImageSrc: "../src/assets/Photos/pj2.png",
      githubLink: "https://github.com/enrojass04/WORDLE",
    },
    {
      name: 'Mis jugadores preferidos de la NBA',
      description: "Proyecto educativo realizado para el BootCamp Talento Tech, realizado en React donde se aplican primeros conceptos de la programación por componentes.",
      projectsImageSrc: "../src/assets/Photos/pj3.png",
      githubLink: "https://github.com/enrojass04/TalentoTech/tree/master/lab1",
    },
  ];

    return (
      <div name="Projects" className=" w-3/4 m-auto pt-5">
        <h2 className="font-semibold text-[40px]">Projects</h2>
        <div className="mt-10">
          {projects.map((p) => (
            <div className="">
              <span>
                <p className="text-white mx-auto text-[25px] mb-5">{p.name}</p>
              </span>
              <div className="">
                <img className="rounded-xl w-[400px] h-[250px] mx-auto my-auto" src={p.projectsImageSrc} alt="" />  
              </div>
              <span className="text-justify">
                <p className="text-white mt-5 mb-3">{p.description}</p>
              </span>
              <div className="mx-auto mb-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-[300px] h-[40px]">
                  <a href={p.githubLink} target="_blank">Ver repositorio en Github</a>
                </div>
            </div>            
          ))}
        </div>
      </div>
    )
  }