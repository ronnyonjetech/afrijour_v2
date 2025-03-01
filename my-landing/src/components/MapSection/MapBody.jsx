import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const INITIAL_TOOLTIP_STATE = { content: '', x: 0, y: 0, visible: false };

const MapBody = () => {
  const [tooltip, setTooltip] = useState(INITIAL_TOOLTIP_STATE);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/africa.geojson') // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, []);

  if (!geoData) return <p>Loading map...</p>;

  return (
    <div className="position-relative min-vh-80 d-flex flex-column align-items-center overflow-hidden">
      {/* Background Effects with Improved Gradient Blending */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {/* White fade gradient at the top */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0) 20%)',
          zIndex: 2
        }} />

        {/* Radial glow effects */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,128,0,0.1), transparent 70%)',
          animation: 'pulse 2s infinite',
          zIndex: 1
        }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(34,139,34,0.15), transparent 50%)',
          zIndex: 1
        }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(0,100,0,0.1), transparent 50%)',
          zIndex: 1
        }} />
      </div>

      {/* Map Container */}
      <div className="position-relative w-75" style={{ height: '600px', marginBottom: '20px', zIndex: 10 }}>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{ scale: 450, center: [17, 3] }}
          className="w-100 h-100"
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: 'rgb(114, 191, 68)', stroke: '#333', strokeWidth: 1.5 },
                    hover: { fill: 'rgb(7, 116, 63)', stroke: '#111', strokeWidth: 1.5, cursor: 'pointer' },
                    pressed: { fill: 'rgb(114, 191, 68)', stroke: 'black', strokeWidth: 1.5 },
                  }}
                  onMouseEnter={(e) => setTooltip({ content: geo.properties.name, x: e.clientX, y: e.clientY, visible: true })}
                  onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false }))}
                  onClick={() => window.location.href = `https://afrijour.web.app/?query=${geo.properties.name.replace(/\s+/g, '').toLowerCase()}`}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="position-fixed  text-warning px-3 py-2 rounded shadow border border-warning"
          style={{ backgroundColor: 'rgb(2, 61, 2)', left: tooltip.x + 10, top: tooltip.y - 40, transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 50 }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default MapBody;
