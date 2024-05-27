import styled from "styled-components";
import { useEffect, useState } from "react";
import { ResponsiveBullet } from '@nivo/bullet';

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
        const interData = data.rows.slice(0,10).map(item => ({
          id: item[0],
          ranges: [12000],
          measures: [item[2]],
          markers: [item[2]],
        }));
        console.log(interData);  // Verificação dos dados no console
        setBlenderData(interData);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  if (blenderData.length === 0) {
    return <div>Loading...</div>;  // Exibir um estado de carregamento enquanto os dados estão sendo carregados
  }

  return (
      <ResponsiveBullet
        data={blenderData}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        rangeColors="#00000030"
        measureBorderColor="#E37200"
        markerColors="#ff5500"
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
        theme={theme}
      />
  );
};

export default BlenderDataLoader;
