import styled from "styled-components";
import { ResponsiveBullet } from '@nivo/bullet';

const BarWrapper = styled.div`


  & div{
    width:-webkit-fill-available !important;
    height: 70px !important;
  }
`

const theme = {
    axis: {
      textColor: '#eee',
      fontSize: '14px',
      tickColor: '#eee',
    },
    grid: {
      stroke: '#888',
      strokeWidth: 1
    },
  };

const Bar = ({data}:any)=>{
    return(
      <BarWrapper>
        <ResponsiveBullet
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        spacing={70}
        rangeColors="#4a6468"
        measureColors={"#f77c00"}
        measureBorderColor="#E37200"
        markerColors="#ff5500"
        markerSize={0}
        titleAlign="start"
        titleOffsetX={20}
        titleOffsetY={100}



        measureSize={1}
      />
      </BarWrapper>
    );
}

export default Bar;
