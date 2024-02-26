import Table from "../../Components/Table"
import TablaDatos from "../../Components/Table/TablaDatos";

const datosHabilidadesPersonales = [
  { id: 1, Descripción: 'Habilidades analíticas y de resolución de problemas.' },
  { id: 2, Descripción: 'Excelentes habilidades de comunicación verbal y escrita.' },
  { id: 3, Descripción: 'Capacidad para trabajar de manera efectiva en equipos multidisciplinarios' },
  { id: 4, Descripción: 'Orientado a resultados y acostumbrado a trabajar bajo presión.' },
];
const columnasHabilidadesPersonales = ['id', 'Descripción'];

const datosHabilidadesTecnicas = [
  { id: 1, Lenguaje: 'JavaScript', Nivel: 'Intermedio' },
  { id: 2, Lenguaje: 'React', Nivel: 'Intermedio' },
  { id: 3, Lenguaje: 'HTML', Nivel: 'Intermedio' },
  { id: 4, Lenguaje: 'CSS', Nivel: 'Intermedio' },
  { id: 5, Lenguaje: 'SQL', Nivel: 'Intermedio' },
  { id: 6, Lenguaje: 'Git', Nivel: 'Intermedio' },
];
const columnasHabilidadesTecnicas = ['id', 'Lenguaje', 'Nivel'];

const nombreTablas = ['Habilidades Personales', 'Habilidades Técnicas'];

export default function About_Me() {
    return (
      <div className="w-3/4 m-auto mt-10">
        <h1 className="mx-auto bg-slate-700 text-xl font-bold mt-5 rounded-xl w-[300px] h-[40px] py-1">
          Edwin Rojas Suárez
        </h1>
        <p className="text-justify mt-5">
          Ingeniero de Sistemas altamente motivado
          y dedicado, con una sólida formación
          académica y experiencia en análisis de
          requerimientos, pruebas funcionales y
          soporte técnico. A pesar de estar
          pendiente de la obtención del título, poseo
          habilidades técnicas y analíticas, así como
          una exitosa trayectoria en proyectos de
          desarrollo de software.
        </p>
        
        <div>
          {nombreTablas.map((nombreTabla, index) => (
            <TablaDatos
              key={index}
              datos={index === 0 ? datosHabilidadesPersonales : datosHabilidadesTecnicas}
              columnas={index === 0 ? columnasHabilidadesPersonales : columnasHabilidadesTecnicas}
              nombreTabla={`Tabla ${index + 1}: ${nombreTabla}`}
            />
          ))}
        </div>

      </div>
    )
  }