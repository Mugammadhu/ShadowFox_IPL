/* eslint-disable react/prop-types */
import "./tablecard.css";

export const TableCard = ({ batfil: { year, data } }) => {
  const [MAT, NO, RUNS, HS, AVG, BF, SR, hundred, fifty, fours, sixes, CT, ST] =
    data;
  return (
    
      <tr className="border-bottom">
      <td className="year">{year}</td>
      <td >{MAT}</td>
      <td>{NO}</td>
      <td className="" style={{backgroundColor:"#efeff0"}}>{RUNS}</td>
      <td>{HS}</td>
      <td>{AVG}</td>
      <td>{BF}</td>
      <td>{SR}</td>
      <td>{hundred}</td>
      <td>{fifty}</td>
      <td>{fours}</td>
      <td>{sixes}</td>
      <td>{CT}</td>
      <td>{ST}</td>
      </tr>
  );
};
