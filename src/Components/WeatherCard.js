import React from "react";
import { Card, Feed } from "semantic-ui-react";

const WeatherCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>City</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
             <h5>Date</h5>
            <div className='weather-card'>
              <div className='weather-card-child'>Temperature</div>
              <div className='weather-card-child'>Humidity</div>
            </div>

            <div className='weather-card'>
              <div className='weather-card-child'>
               Sunrise
               </div>
              <div className='weather-card-child'>
               Sunset
               </div>
            </div>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default WeatherCard;
