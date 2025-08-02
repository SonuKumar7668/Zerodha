import React,{useState} from "react";
import { watchlist } from "../data/data";

import {Tooltip, Grow} from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index)=>{
          return(
            <WatchListItem stock={stock} key={index}/>
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock})=>{
  let [showWatchListActions,setShowWatchListActions] = useState(false);

  const handleMouseEnter =()=>{
    setShowWatchListActions(true);
  }
  const handleMouseExit = () =>{
    setShowWatchListActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down"/>) : <KeyboardArrowUpIcon className="up"/>
          }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      { showWatchListActions && <WatchListActions uid={stock.name} /> }
    </li>
  )
}

const WatchListActions = ()=>{
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow slots={{Transition: Grow}}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow slots={{Transition: Grow}}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow slots={{Transition: Grow}}>
        <button className="action"><BarChartIcon className="icon"/></button>
        </Tooltip>
        <Tooltip title="More (M)" placement="top" arrow slots={{Transition: Grow}}>
          <button className="action"><MoreHorizIcon className="icon"/></button>
        </Tooltip>
      </span>
    </span>
  )
}