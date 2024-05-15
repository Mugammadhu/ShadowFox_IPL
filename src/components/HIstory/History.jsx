/* eslint-disable react/no-unescaped-entities */
import "./history.css";
import { getImageUrl } from "../../utils.jsx";

export const History = () => {
  return (
    <main className="historyContainer">
      <h1 className="history-title">HISTORY OF CSK</h1>
      <div className="abt-csk">
        <img src={getImageUrl("History/CSKTeam.png")} alt="" />
        <p>
          Chennai Super Kings (CSK) is an Indian professional cricket franchise
          based in Chennai, Tamil Nadu. The team competes in the Indian Premier
          League (IPL) and was one of the eight franchises incorporated when the
          league was established in 2008. The team plays its home matches at the
          M. A. Chidambaram Stadium in Chennai and is owned by Chennai Super
          Kings Cricket Limited.
        </p>
      </div>

      <div className="formation">
        <h2>Formation (2008):</h2>
        <div className="formation-container">
          <p>
            {" "}
            Chennai Super Kings was formed in 2008 as one of the eight founding
            members of the Indian Premier League (IPL). The franchise is owned
            by India Cements, with former ICC Chairman N. Srinivasan being one
            of the key figures behind the team's establishment.
          </p>
          <img src={getImageUrl("History/cskOwner.png")} alt="" />
        </div>
        <a
          href="https://en.wikipedia.org/wiki/N._Srinivasan"
          className="btn  border-0 formationLink"
          target="_blank"
        >
          Know More About Srinivasan
        </a>
      </div>

      <div className="Leadership">
        <h2>Initial Years (2008-2010):</h2>
        <div className="leadership-container">
          <img src={getImageUrl("History/msd.png")} alt="" />
          <p>
            Under the leadership of M.S. Dhoni and with a strong core of players
            like Suresh Raina, Murali Vijay, and Michael Hussey, CSK quickly
            established itself as a dominant force in the IPL. They reached the
            final in the inaugural season in 2008 but lost to the Rajasthan
            Royals. However, they clinched their maiden IPL title in 2010 by
            defeating the Mumbai Indians in the final
          </p>
        </div>
        <a
          href="https://en.wikipedia.org/wiki/MS_Dhoni"
          className="btn  border-0 leadershipLink"
          target="_blank"
        >
          Know More About MS.Dhoni
        </a>
      </div>

      <div className="success">
        <h2>Success and Consistency (2011-2015): </h2>
        <div className="success-container">
          <p>
            CSK continued their successful run in the following years, reaching
            the playoffs every season. They won the IPL title again in 2011 and
            2018, becoming the second team after the Mumbai Indians to win the
            championship multiple times. They also won the Champions League
            Twenty20 tournament twice in 2010 and 2014.
          </p>
          <img src={getImageUrl("History/success.png")} alt="" />
        </div>
      </div>

      <div className="suspension">
        <h2>Two-Year Suspension (2016-2017): </h2>
        <div className="suspension-container">
          <img src={getImageUrl("History/suspension.png")} alt="" />
          <p>
            In 2016 and 2017, the Chennai Super Kings were suspended from the
            IPL due to their owners' involvement in the 2013 IPL betting case.
            This hiatus deprived fans of seeing their beloved team in action.
            However, CSK bounced back strongly in 2018, displaying resilience
            and determination as they returned to the league and reclaimed their
            status among the top teams.
          </p>
        </div>
        <a
          href="https://www.mpl.live/blog/the-reason-why-csk-was-banned-from-ipl/#:~:text=to%20find%20out.-,CSK%20banned%20from%20IPL%20for%20Spot%20Fixing,the%20charges%20of%20spot%2Dfixing."
          className="btn  border-0 suspensionLink"
          target="_blank"
        >
          Know More About MS.Dhoni
        </a>
      </div>

      <div className="return">
        <h2>Return to IPL (2018-present):</h2>
        <div className="return-container">
          <p>
          After serving the suspension, CSK made a remarkable comeback in the 2018 IPL season, winning the title by defeating the Sunrisers Hyderabad. Led by Dhoni, Raina, and Bravo, with key contributions from new additions, CSK's core remained strong. They reached the final again in 2019 but lost to the Mumbai Indians. Despite challenges like injuries and aging players, CSK has maintained its competitive edge in the IPL. They also clinched the 2023 IPL trophy by defeating the Gujarat Giants at the Narendra Modi Stadium.
          </p>
          <img src={getImageUrl("History/success.png")} alt="" />
        </div>
      </div>
    </main>
  );
};
