import "./points.css";
import { getImageUrl } from "../../utils";

export const Points = () => {
  return (
    <main className="pointsContainer">
      <h1 className="pointsTitle">POINTS TABLE</h1>
      <div className="table-responsive">
        <table className="table table-hover table-borderedless  points_table mx-auto">
          <thead className="table-dark">
            <tr >
              <th>POS</th>
              <th>STATUS</th>
              <th className="tteam">TEAM</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>NRR</th>
              <th>PTS</th>
              <th>RECENT FORM</th>
            </tr>
          </thead>
          <tbody className="table-light">
            <tr>
              <td><span className="qualified">Q</span>1</td>
              <td><img src={getImageUrl("Team/neutral.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/kkrteam.png")} className="timg" />
                  KKR
                </div>
              </td>
              <td>13</td>
              <td>9</td>
              <td>3</td>
              <td>+1.428</td>
              <td>19</td>
              <td>
               <div className="recent">
              <img src={getImageUrl("Team/N.svg")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
            </td>
            </tr>
            <tr>
              <td><span className="qualified">Q</span>2</td>
              <td><img src={getImageUrl("Team/loss.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/rrteam.png")} className="timg" />
                  RR
                </div>
              </td>
              <td>13</td>
              <td>8</td>
              <td>5</td>
              <td>+0.273</td>
              <td>16</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td><span className="qualified">Q</span>3</td>
              <td><img src={getImageUrl("Team/neutral.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/srhteam.png")} className="timg" />
                  SRH
                </div>
              </td>
              <td>13</td>
              <td>8</td>
              <td>5</td>
              <td>0.406</td>
              <td>15</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/N.svg")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src={getImageUrl("Team/win.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/cskteam.png")} className="timg" />
                  CSK
                </div>
              </td>
              <td>13</td>
              <td>7</td>
              <td>5</td>
              <td>0.528</td>
              <td>14</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src={getImageUrl("Team/win.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/dcteam.png")} className="timg" />
                  DC
                </div>
              </td>
              <td>14</td>
              <td>7</td>
              <td>7</td>
              <td>-0.377</td>
              <td>14</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td><img src={getImageUrl("Team/win.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/lsgteam.jpg")} className="timg" />
                  LSG
                </div>
              </td>
              <td>14</td>
              <td>7</td>
              <td>7</td>
              <td>-0.667</td>
              <td>14</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td><img src={getImageUrl("Team/win.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/rcbteam.jpg")} className="timg" />
                  RCB
                </div>
              </td>
              <td>13</td>
              <td>6</td>
              <td>7</td>
              <td>+0.387</td>
              <td>12</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td><span className="eliminated">E</span>8</td>
              <td><img src={getImageUrl("Team/neutral.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/gtteam.png")} className="timg" />
                  GT
                </div>
              </td>
              <td>14</td>
              <td>5</td>
              <td>7</td>
              <td>-1.063</td>
              <td>12</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/N.svg")} className="simg" />
              <img src={getImageUrl("Team/N.svg")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td><span className="eliminated">E</span>9</td>
              <td><img src={getImageUrl("Team/win.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/pkteam.png")} className="timg" />
                  PBKS
                </div>
              </td>
              <td>13</td>
              <td>5</td>
              <td>8</td>
              <td>-0.347</td>
              <td>10</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
               </div>
              </td>
            </tr>
            <tr>
              <td><span className="eliminated">E</span>10</td>
              <td><img src={getImageUrl("Team/loss.png")} className="simg" /></td>
              <td>
                <div className="tableflex">
                  <img src={getImageUrl("Team/miteam.png")} className="timg" />
                  MI
                </div>
              </td>
              <td>14</td>
              <td>4</td>
              <td>10</td>
              <td>-0.318</td>
              <td>8</td>
              <td>
              <div className="recent">
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/W.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
              <img src={getImageUrl("Team/L.png")} className="simg" />
               </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
