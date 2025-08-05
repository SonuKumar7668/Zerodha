import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import VerticalGraph from "./verticalGraph";
// import { holdings } from "../data/data";
const url = import.meta.env.VITE_BACKEND;

const Holdings = () => {
  const [allHolding,setAllHolding] = useState([]);

  useEffect(()=>{
    axios.get(`${url}/allholding`).then((res)=>{
      setAllHolding(res.data);
    })
  },[])

  const labels = allHolding.map((subArray)=> subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHolding.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };
  return (
    <>
      <h3 className="title">Holdings ({allHolding.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>

        {allHolding.map((stock,index)=>{
          let curValue = stock.price * stock.qty;
          let isProfit = curValue - stock.avg * stock.qty >=0.0;
          let profitClass = isProfit ? "profit" : "loss";
          // let dayClass = stock.isLoss ? "loss" : "profit";
          return(
            <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue.toFixed(2)}</td>
            <td className={profitClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
            <td>{stock.net}</td>
            <td>{stock.day}</td>
          </tr>
          )
        })}
        </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
        <VerticalGraph data={data}/>
      </div>
    </>
  );
};

export default Holdings;