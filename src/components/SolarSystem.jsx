import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((p, i) => {
            const planet = p.name;
            const { image } = p;
            return <PlanetCard planetName={ planet } planetImage={ image } key={ i } />;
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
