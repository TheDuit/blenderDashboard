import styled from "styled-components";
import Bar from "./bar";

const RowSt = styled.tr` 
`;

const Row = ({name, computeType, bar })=>{
    return(
    <RowSt>
        <td>{name}</td>
        <td>{computeType}</td>
        <td><Bar data={bar}/></td>
    </RowSt>
    )
}

export default Row;