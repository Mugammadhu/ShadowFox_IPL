import { useParams } from "react-router-dom";
import ground from "../../data/ground.json";
import "./ground.css";
import { getImageUrl } from "../../utils";

export const Ground = () => {
  const { id } = useParams();
  const GroundId = Number(id);

  const data = ground.find((grd) => grd.Id === GroundId);
  const {
    stadium,
    capacity,
    address,
    homeGround,
    about1,
    about2,
    about3,
    srcImage,
    mapImg,
    seatImg,
    link
  } = data;

  console.log(data);
  return (
    <main className="groundMain">
      <h1 className="groundMain__title">{stadium}</h1>
      <p className="groundMain__capacity">Capacity : {capacity}</p>
      <img src={getImageUrl(srcImage)} alt={`${stadium} image`} className="groundMain__img"/>
      <h2 className="groundMain__about--title">ABOUT :</h2>
      <ul className="groundMain__about--content">
        <li className="homeGround">{`${stadium} is home ground of ${homeGround}.`}</li>
        <li>{about1}</li>
        <li>{about2}</li>
        <li>{about3}<a href={link} className="ground_link" target="_blank"> Know More</a></li>
      </ul>
      <div className="groundimg_div">
        <div className="map">
            <h1 className="map-seatimg--h2">Map</h1>
            <img src={getImageUrl(mapImg)} alt="Map" className="map-seatimg"/>
            <h3 className="stadium__address">{address}</h3>
        </div>
        <div>
            <h1 className="map-seatimg--h2">Seating Plan</h1>
            <img src={getImageUrl(seatImg)} alt="Seating Plan" className="map-seatimg"/>
        </div>
      </div>
    </main>
  );
};
