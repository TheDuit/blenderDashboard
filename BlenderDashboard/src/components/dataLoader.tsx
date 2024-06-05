import styled from "styled-components";
import { useEffect, useState } from "react";
import Loader from "./loader";
import Bar from "./bar";
import Row from "./tableRow";

const TableSt = styled.table`
  background-color: #00181b;
  width: 90%;
  padding:1rem;
  margin-top: 10vh;

  & td{
    padding:1rem;
    text-align: center;
    vertical-align: middle;
  }
`


const BlenderDataLoader = () => {
  const [blenderData, setBlenderData] = useState([]);

  useEffect(() => {
    fetch('https://blenderopendatacaller.onrender.com/api/blenderData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha na solicitação.');
        }
        return response.json();
      })
      .then(data => {
        const interData = data.rows.slice(2500,2705).map(item => ({
          id: item[0],
          computeType: item[1],
          ranges: [12000],
          measures: [item[2]],
          markers: [item[2]],
        }));
        console.log(interData);
        setBlenderData(interData);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  if (blenderData.length === 0) {
    return (<Loader></Loader>)
  }

  return (
    <>
      <TableSt>
        <thead>
            <tr>
              <th>Device</th>
              <th>Compute Type</th>
              <th>Score</th>
            </tr>
          </thead>
            <tbody>
              {console.log(blenderData)}
              {blenderData.map(elem =>(
                  <Row name={elem.id} computeType={elem.computeType} bar={[elem]}/>
              )
              )}  
            </tbody>
      </TableSt>
    </>
  )
}
export default BlenderDataLoader;
