import React from "react"
import { useState, useEffect } from "react";

const URL =
    `https://api.openweathermap.org/data/2.5/weather?lat=37.825280&lon=-121.241210&units=imperial&appid=dd39ad3836cd95e0847faf228f7f4b17`;

export default function DataServices() {

    const [temp, setTemp] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                console.log(json);
            })

        }
        fetchData();
    }, []);

    return (

        <div className="App">
            Lathrop Temp Now: {temp}F
        </div>
    );
}







    

    
    