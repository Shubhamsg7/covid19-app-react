import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div className="container">
        <h2>Total Confirmed : {TotalConfirmed}</h2>
        <h2>Total Deaths : {TotalDeaths}</h2>
        <h2>Total Recovered : {TotalRecovered}</h2>
        <h2>New Confirmed : {NewConfirmed}</h2>
        <h2>New Deaths : {NewDeaths}</h2>
        <h2>New Recovered : {NewRecovered}</h2>
        </div>
    </>
  );
}

export default Details;
