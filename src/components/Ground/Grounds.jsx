import "./grounds.css"
import groundData from "../../data/grounds.json"
import { GroundCard } from "./GroundCard"
export const Grounds = () => {
  return (
    <main className="groundContainer">
      <h1 className="groundTitle">GROUNDS</h1>
      <div className="cardList1">
         {groundData.map((ground)=><GroundCard key={ground.id} ground={ground}/>)}
      </div>
    </main>
  )
}
