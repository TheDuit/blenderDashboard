import styled from "styled-components";
import { useEffect, useState } from "react";
import Bar from "./bar";

const TableSt = styled.table`
  width: -webkit-fill-available;
  background-color: #001719;
  margin: auto;
  color: #fff;
  font-family: sans-serif;
  position: relative;
  left:0;

  & tr {
    height: 2.5rem;
    padding: 1rem;
    vertical-align: middle;
  }

  & td {
    width: fit-content;
    text-align: center;
  }

  & label {
    padding: 1rem;
  }
`;

const BlenderDataLoader = () => {
  const [blenderData, setBlenderData] = useState(null);

  useEffect(() => {
    fetch('https://blenderopendatacaller.onrender.com/api/blenderData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha na solicitação.');
        }
        return response.json();
      })
      .then(data => {
        setBlenderData(data)
      })
      .catch(error => {
        console.error('Erro:', error)
      })
  }, []);

  return (
    <div>
    <TableSt>
      <thead>
        <tr>
          {blenderData && blenderData.columns.map((column, index) => (
            <td key={index}>{column.display_name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
      {blenderData && blenderData.rows.map((column, index) => (
            index <=50 &&
            <tr>
              <td>{column[0]}</td>
              <td>{column[1]}</td>
              <Bar score={column[2]}/>
              <td>{column[3]}</td>
            </tr>
          ))}
      </tbody>
    </TableSt>
  </div>
  );
};

export default BlenderDataLoader;
