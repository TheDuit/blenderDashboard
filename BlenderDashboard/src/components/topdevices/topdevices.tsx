import { useEffect, useState } from "react"
import styled from "styled-components"
import { DevicesContainer, DevicesGeneralContainer } from "./topdevicesstyle"


const TopDevicesContaier = styled.div`
`

const TopDevices = ()=>{
    const [blenderData, setBlenderData] = useState('');

    useEffect(()=>{
        fetch('http://localhost:8000/gettopdevices',{
            method:'GET'
        }).then( response => {
            if (!response.ok){
                throw new Error('Falha no carregamento dos dados');
            }
                return response.json()
            }
        ).then(data =>{
            setBlenderData(data)
            console.log(blenderData.devices)
        })
    },[])

    if(blenderData.length === 0){
        return(
            <div>Carregando...</div>
        )
    }
    return(
            <div>
                <DevicesGeneralContainer>
                {blenderData.devices.map((device, index)=>(
                        <DevicesContainer>
                            <td key={index}>{`${index + 1}º`}</td>
                            <td key={index}>{device.name}</td>
                            <td key={index}>{device.type}</td>
                            <td key={index}>{device.score}</td>
                            <td key={index}>{device.benchmarks}</td>
                        </DevicesContainer>
                ))}
                </DevicesGeneralContainer>
            </div>
        )
    
}

export default TopDevices