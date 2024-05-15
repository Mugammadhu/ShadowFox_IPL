import teams from '../../data/teams.json'
import { CardTeam } from './CardTeam'
import './team.css'

export const Teams = () => {
  return (
    <main className="teams-container">
      <div className="teams-header">
        <h1>Teams</h1>
      </div>
      <div  className="teams">
          {teams.map((team)=>(<CardTeam key={team.id} team={team}/>))}
      </div>
    </main>
  )
}
