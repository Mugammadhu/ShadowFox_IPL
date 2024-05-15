import { useParams } from "react-router-dom"
import players from '../../data/cskplayer/player.json';


export const Player = () => {
    const {id}=useParams();
    const data=players.find((player)=>player.id==id)

  return (
    <main>
      <h1>{id}</h1>
        <h1>{data.name}</h1>
    </main>
  )
}
