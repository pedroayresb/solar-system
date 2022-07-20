import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((p, i) => {
          const planet = p.name;
          const { image } = p;
          return <PlanetCard planetName={ planet } planetImage={ image } key={ i } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
