import styled from "styled-components";

const Barst = styled.div`
    height: 2rem;
    border-radius: .5rem;
    width: ${(props)=> props.scoreWidth /10 + 'px'};
    background:rgba(123,188,255,1);
    transition: ease-in-out 200ms;
    position: relative;
    
    &:hover{
        padding-right: 1rem;
        background:#0167ce;
        transition: ease-in-out 200ms;
    }

`;

const Bar = ({score}:any)=>{
    return(
        <Barst scoreWidth={score}></Barst>
    );
}

export default Bar;
