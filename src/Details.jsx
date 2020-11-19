import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';



const Details = () => {

  
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
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setTotalRecovered(res.data.Global.TotalRecovered);
          setNewConfirmed(res.data.Global.NewConfirmed);
          setNewDeaths(res.data.Global.NewDeaths);
          setNewRecovered(res.data.Global.NewRecovered);
      }
      getData();
  });

  return (
    <>
        <h1 className="heading">Covid19</h1>
        
        <div className="container">
        <div className="card card-confirmed">
          <h3>Total Confirmed</h3>
          <h1>
          <NumberFormat value={TotalConfirmed} displayType={'text'} thousandSeparator={true} /></h1>
        </div>
        <div className="card card-deaths">
          <h3>Total Deaths</h3>
          
          <h1><NumberFormat value={TotalDeaths} displayType={'text'} thousandSeparator={true} /></h1>
        </div>
        <div className="card card-recovered">
          <h3>Total Recovered</h3>
          <h1><NumberFormat value={TotalRecovered} displayType={'text'} thousandSeparator={true} /></h1>
        </div>
        <div className="card card-confirmed">
          <h3>New Confirmed</h3>

          <h1>          <NumberFormat value={NewConfirmed} displayType={'text'} thousandSeparator={true} /></h1>
        </div>
        <div className="card card-deaths">
          <h3>New Deaths</h3>
          <h1>
            <NumberFormat value={NewDeaths} displayType={'text'} thousandSeparator={true} />
          </h1>
        </div>
        <div className="card card-recovered">
          <h3>New Recovered</h3>
          <h1>
            <NumberFormat value={NewRecovered} displayType={'text'} thousandSeparator={true} />
          </h1>
        </div>
        </div>
        
    </>
  );
}

export default Details;
