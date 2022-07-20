import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission, i) => {
          const { name, year, country, destination } = mission;
          return (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ i }
            />
          );
        })}
      </div>
    );
  }
}

export default Missions;
