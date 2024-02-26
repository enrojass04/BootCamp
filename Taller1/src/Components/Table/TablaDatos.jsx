// TablaDatos.js
import React from 'react';

const TablaDatos = ({ datos, columnas, nombreTabla}) => {
  return (
    <table className="table-auto w-full mt-10">
      <caption className="text-lg font-bold mb-2">{nombreTabla}</caption>
      <thead>
        <tr className="bg-violet-400 px-4 py-2">
          {columnas.map((columna, index) => (
            <th key={index} className='px-2 py-4'>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index} className='px-4 py-2'>
            {columnas.map((columna, columnIndex) => (
              <td key={columnIndex} className="border">{fila[columna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDatos;
