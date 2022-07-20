import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => {
          const { name, year, country, destination } = mission;
          const n = name;
          const y = year;
          const c = country;
          const d = destination;
          return (
            <MissionCard n={ n } y={ y } c={ c } d={ d } key={ n } />
          );
        })}
      </div>
    );
  }
}

export default Missions;
