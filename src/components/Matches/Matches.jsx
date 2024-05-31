import finals from "../../data/finals.json";
import playoffs from "../../data/playoffs.json";
import leagueMatches from "../../data/matches.json";
import { MatchList } from "./MatchList";
import "./matches.css";

export const Matches = () => {
  let matches=leagueMatches.reverse()
  let playoffsTeam=playoffs.reverse()
  return (
    <main className="matchContainer">
      <h1 className="matchContainer__title">Matches</h1>

      <h4 className="finals__title">Finals</h4>
      <div className="matchContainer__finals">
        {finals.map((final) => (
          <MatchList key={final.id} data={final} />
        ))}
      </div>
      <h4 className="playoffs__title">Playoffs</h4>
      <div className="matchContainer__playoffs">
        {playoffsTeam.map((playoff) => (
          <MatchList key={playoff.id} data={playoff} />
        ))}
      </div>
      <h4 className="League__title">League Matches</h4>
      <div className="matchContainer__matches">
        {matches.map((match) => (
          <MatchList key={match.id} data={match} />
        ))}
      </div>
    </main>
  );
};
