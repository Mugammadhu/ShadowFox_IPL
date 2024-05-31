/* eslint-disable react/prop-types */
import "./tablecard.css";

export const BowlTable = ({ bowl: { year, data } }) => {
  const [MAT,BALLS,RUNS,WKTS,BBM,AVE,ECON,SR,FOURW,FIVEW]=data;
  
  return (
    <tr className="border-bottom">
      <td className="year">{year}</td>
      <td >{MAT}</td>
      <td>{BALLS}</td>
      <td className="" style={{backgroundColor:"#efeff0"}}>{RUNS}</td>
      <td>{WKTS}</td>
      <td>{BBM}</td>
      <td>{AVE}</td>
      <td>{ECON}</td>
      <td>{SR}</td>
      <td>{FOURW}</td>
      <td>{FIVEW}</td>
      
      </tr>
  )
}
