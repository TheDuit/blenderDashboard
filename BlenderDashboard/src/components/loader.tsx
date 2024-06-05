import styled from "styled-components"

const LoaderSt = styled.div`
    margin:auto;
    width: 30vh;
    height: 30vh;
    border: 6px solid #a8a8a8;
    border-top: 6px solid #E37200;
    border-radius: 100%;
    animation: spinner 2s linear infinite;

    @keyframes spinner {
        0% {
            transform: rotate(0deg) scale(1);
        }
        50% {
            transform: rotate(180deg) scale(1.05);
        }

        100%
        {
            transform: rotate(360deg) scale(1);

        }
    }

`

const Loader = ()=>{
    return(
        <LoaderSt/>
    )
};

export default Loader;