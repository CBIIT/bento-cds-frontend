// UnderMaintenance.js

import React from 'react';
import './UnderMaintenance.css'; // Import the CSS file
import Typography from '@material-ui/core/Typography';
import PanToolIcon from '@material-ui/icons/PanTool';

const UnderMaintenance = (component, isEnabled = true) =>
  isEnabled ? () => (
    <div className="maintenance-container">
      <PanToolIcon className="maintenance-icon" />
      <Typography variant="h4" className="maintenance-title">
        Under Maintenance
      </Typography>
      <Typography variant="subtitle1" className="maintenance-subtitle">
        <span role="img" aria-label="Wrench and Gear" className="emoji">
          🛠️
        </span>{' '}
        Maintenance is currently underway in this area. Please check back later. 🕒
      </Typography>
    </div>
  ) : (
    component
  );

export default UnderMaintenance;
