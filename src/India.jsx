import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';
import Confirm from "./img/Warning.png"
import Active from "./img/Report.png"
import Recover from "./img/Stay at Home.png"
import Death from "./img/Death.png"



const India = () => {

  
  const [TotalConfirmed, setTotalConfirmed] = useState();
  const [TotalDeaths, setTotalDeaths] = useState();
  const [TotalRecovered, setTotalRecovered] = useState();
  const [NewConfirmed, setNewConfirmed] = useState();
  const [NewDeaths, setNewDeaths] = useState();
  const [NewRecovered, setNewRecovered] = useState();
  
  

  useEffect(() => {
      async function getData() {
          const res = await axios.get(
              `https://api.covid19api.com/summary`
          );
          console.log(res);
          setTotalConfirmed(res.data.Countries[76].TotalConfirmed);
          setTotalDeaths(res.data.Countries[76].TotalDeaths);
          setTotalRecovered(res.data.Countries[76].TotalRecovered);
          setNewConfirmed(res.data.Countries[76].NewConfirmed);
          setNewDeaths(res.data.Countries[76].NewDeaths);
          setNewRecovered(res.data.Countries[76].NewRecovered);
      }
      getData();
  });

  return (
    <>
        <h1 className="heading">India Cases</h1>
        
        <div className="container">
        <div className="card card-confirmed">
          <h3>Total Confirmed</h3>
          <h1>
          <NumberFormat value={TotalConfirmed} displayType={'text'} thousandSeparator={true} /></h1>
          <img src={Confirm} alt="image" />
        </div>
        <div className="card card-active">
          <h3>Total Active</h3>
          <h1>
          <NumberFormat value={TotalConfirmed-TotalRecovered-TotalDeaths} displayType={'text'} thousandSeparator={true} /></h1>
          <img src={Active} alt="image" />
        </div>
        <div className="card card-deaths">
          <h3>Total Deaths</h3>
          
          <h1><NumberFormat value={TotalDeaths} displayType={'text'} thousandSeparator={true} /></h1>
          <img src={Death} alt="image" />
        </div>
        <div className="card card-recovered">
          <h3>Total Recovered</h3>
          <h1><NumberFormat value={TotalRecovered} displayType={'text'} thousandSeparator={true} /></h1>
          <img src={Recover} alt="image" />
        </div>
        <div className="card card-confirmed">
          <h3>New Confirmed</h3>

          <h1>          <NumberFormat value={NewConfirmed} displayType={'text'} thousandSeparator={true} /></h1>
          <img src={Confirm} alt="image" />
        </div>
        <div className="card card-deaths">
          <h3>New Deaths</h3>
          <h1>
            <NumberFormat value={NewDeaths} displayType={'text'} thousandSeparator={true} />
          </h1>
          <img src={Death} alt="image" />
        </div>
        <div className="card card-recovered">
          <h3>New Recovered</h3>
          <h1>
            <NumberFormat value={NewRecovered} displayType={'text'} thousandSeparator={true} />
          </h1>
          <img src={Recover} alt="image" />
        </div>
        </div>
        
    </>
  );
}

export default India;
