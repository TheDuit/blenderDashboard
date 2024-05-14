import blenderData from './blenderData';

const BlenderDataLoader = ()=>{
    return(
      <table>
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
                    <div>{item.score}</div>
                </td>
            </tr>
            )
        })}
      </table>
    )
}

export default BlenderDataLoader;
