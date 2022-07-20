import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { n, y, c, d } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{n}</p>
        <p data-testid="mission-year">{y}</p>
        <p data-testid="mission-country">{c}</p>
        <p data-testid="mission-destination">{d}</p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  n: PropTypes.string.isRequired,
  y: PropTypes.number.isRequired,
  c: PropTypes.string.isRequired,
  d: PropTypes.string.isRequired,
};
export default MissionCard;
