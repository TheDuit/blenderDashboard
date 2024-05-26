import styled from "styled-components";

const Barst = styled.div`
    display: flex;
    height: 2rem;
    border-radius: .5rem;
    width: ${(props)=> props.scoreWidth /10 + 'px'};
    background:#E37200;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    
    &:hover{
        background:#cd5200;
        transition: ease-in-out 200ms;
    }

    & label{
        position: absolute;
        font-weight: bolder;
        transition: ease-in-out 200ms;
        color: #ffffff;
    }

    &:hover label{
        transition: ease-in-out 200ms;
        color: #fff;
    }


`;

const Bar = ({score}:any)=>{
    return(
        <Barst scoreWidth={score}><label>{score} Points </label></Barst>
    );
}

export default Bar;
