import { useEffect } from 'react';
import './App.css';
import React from 'react';
import DataServices from './Data/DataServices';
import ApiComponent from './Components/ApiComponent';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';
import axios from 'axios';

const URL = `https://api.openweathermap.org/data/3.0/onecall`;
const API_KEY = `dd39ad3836cd95e0847faf228f7f4b17`;

export default function App() {
  useEffect(() => {
    axios.get()
  }, [])
  return (
    <div className='main' >
       <Header/>
      <WeatherCard />
      {/* <DataServices /> */}
      {/* <ApiComponent /> */}
      {/* <functionComponent/> */}
      {/* <weatherComponent /> */}
    </div>
  );
}


///