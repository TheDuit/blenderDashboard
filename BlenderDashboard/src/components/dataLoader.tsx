import blenderData from './blenderData';
import styled from 'styled-components';
import Bar from './bar.tsx'

const TableSt = styled.table`
    width:100dvw;
    background-color: #001719;

    & tr{
        height: 2.5rem;
        padding:1rem;
    }

    & td{
        text-align: end;
    }

    & label{
        padding:1rem;
        color:#fff;
        font-family: sans-serif;
    }
`;

const BlenderDataLoader = ()=>{
    return(
      <TableSt>
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
                </thead>
        {blenderData.map(item=>{
            return(
            <tr>
                <td>
                    <label>{item.name}</label>
                </td>
                <td>
                    <Bar score={item.score} />
                </td>
            </tr>
            )
        })}
      </TableSt>
    )
}

export default BlenderDataLoader;
