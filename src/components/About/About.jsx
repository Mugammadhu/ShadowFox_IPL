import "./about.css";
import { getImageUrl } from "../../utils";
import iplBaseAbt from "../../data/ipl/iplbaseabt.json";
import iplAbt from "../../data/ipl/iplabt.json"
import { AboutCard } from "./AboutCard";

export const About = () => {


  let baseAbout= JSON.parse(localStorage.getItem("baseAbout"));
  let About= JSON.parse(localStorage.getItem("About"));
  console.log(baseAbout)
  console.log(About)

  if(baseAbout===null && About===null){
    localStorage.setItem("baseAbout",JSON.stringify(iplBaseAbt));
    localStorage.setItem("About",JSON.stringify(iplAbt))
    baseAbout= JSON.parse(localStorage.getItem("baseAbout"));
    About= JSON.parse(localStorage.getItem("About"));
  }

  if(baseAbout !== null  && About !== null){
    var{imgSrc,team,about,history1,history2,history3}=baseAbout;
  }
  

  console.log(baseAbout)
  console.log(About)


 

  return (
    <main className="abt_container">
      <h1 className="abt_title">About {team}</h1>
      <div className="abt_team">
        <div className="abt_img">
          <img src={getImageUrl(imgSrc)} alt={`${team} image`} />
        </div>
        <div className="abt_team--para">
          <p>
          {about}
          </p>
        </div>
      </div>
      <div className="history">
        <h1 className="history_title">History</h1>
        <ul>
          <li>{history1}</li>
          <li>{history2}</li>
          <li>{history3}</li>
        </ul>
      </div>
      <div className="member">
        {About.map((abt)=> <AboutCard key={abt.id} abt={abt}/>)}
      </div>
    </main>
  );
};
