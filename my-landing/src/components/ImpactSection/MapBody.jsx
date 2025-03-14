
import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const INITIAL_TOOLTIP_STATE = { content: "", x: 0, y: 0, visible: false };

// Country coordinates mapping
const countryCoordinates = {
  "South Africa": [28.187, -25.746],
  Nigeria: [8.6753, 9.082],
  Kenya: [36.817, -1.286],
  Egypt: [31.2357, 30.0444],
  Algeria: [1.6596, 28.0339],
  Ethiopia: [40.4897, 9.145],
  Ghana: [-1.0232, 7.9465],
  Tanzania: [34.8888, -6.369],
  Uganda: [32.2903, 1.3733],
  Zimbabwe: [29.1549, -19.0154],
  Sudan: [30.2176, 12.8628],
  Cameroon: [11.5021, 3.848],
  Tunisia: [9.5375, 33.8869],
  Morocco: [-7.0926, 31.7917],
  Rwanda: [29.8739, -1.9403],
  Malawi: [34.3015, -13.2543],
  Senegal: [-17.4677, 14.7169],
  Zambia: [27.8493, -13.1339],
  Botswana: [24.6849, -22.3285],
  Mozambique: [32.5732, -25.9692],
  Mali: [-3.9962, 17.5707],
  "Burkina Faso": [-1.5616, 12.2383],
  Madagascar: [46.8691, -18.7669],
  Niger: [8.0817, 17.6078],
  Somalia: [46.1996, 5.1521],
};

const MapBody = () => {
  const [tooltip, setTooltip] = useState(INITIAL_TOOLTIP_STATE);
  const [geoData, setGeoData] = useState(null);
  const [journalData, setJournalData] = useState([]);
  const [mapSize, setMapSize] = useState(500);
  const [maxJournals, setMaxJournals] = useState(1);

  useEffect(() => {
    fetch("/africa.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading GeoJSON:", err));

    fetch("https://backend.afrikajournals.org/journal_api/api/journals/country-count/")
      .then((res) => res.json())
      .then((data) => {
        setJournalData(data);
        setMaxJournals(
          Math.max(...data.map((entry) => entry.journal_count), 1)
        );
      })
      .catch((err) => console.error("Error loading journal data:", err));
  }, []);

  useEffect(() => {
    const updateMapSize = () => {
      setMapSize(window.innerWidth < 768 ? 350 : 500);
    };
    window.addEventListener("resize", updateMapSize);
    updateMapSize();
    return () => window.removeEventListener("resize", updateMapSize);
  }, []);

  if (!geoData) return <p className="text-center text-muted">Loading map...</p>;

  const getDotSize = (count) => {
    const minSize = 5;
    const maxSize = 25;
    return minSize + (count / maxJournals) * (maxSize - minSize);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100 position-relative"
      style={{ overflow: "visible", height: "auto" }}
    >
      <div
        className="position-relative w-100"
        style={{ maxWidth: "800px", overflow: "visible" }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: mapSize, center: [20, 5] }}
          className="w-100"
          style={{ overflow: "visible" }}
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const journalEntry = journalData.find(
                  (entry) =>
                    entry?.country?.trim().toLowerCase() ===
                    countryName.trim().toLowerCase()
                );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: journalEntry ? "#113541" : "#CCCCCC", // Journals → Dark, No journals → Gray
                        stroke: journalEntry ? "#fff" : "#808080", // Journals → White, No journals → Dark gray
                        strokeWidth: 1.5,
                      },
                      hover: {
                        fill: journalEntry ? "#255E66" : "#B3B3B3", // Slightly darker on hover
                        stroke: "#fff",
                        strokeWidth: 1.7,
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "rgb(114, 191, 68)",
                        stroke: "black",
                        strokeWidth: 1.5,
                      },
                    }}
                    onMouseEnter={(e) =>
                      setTooltip({
                        content: journalEntry
                          ? `${countryName}: ${journalEntry.journal_count} journals`
                          : countryName,
                        x: e.clientX,
                        y: e.clientY,
                        visible: true,
                      })
                    }
                    onMouseMove={(e) =>
                      setTooltip((prev) => ({
                        ...prev,
                        x: e.clientX,
                        y: e.clientY,
                      }))
                    }
                    onMouseLeave={() =>
                      setTooltip((prev) => ({ ...prev, visible: false }))
                    }
                    onClick={() =>
                      (window.location.href = `https://afrijour.web.app/?query=${countryName
                        .replace(/\s+/g, "")
                        .toLowerCase()}`)
                    }
                  />
                );
              })
            }
          </Geographies>

          {journalData
            .filter(({ country }) => countryCoordinates[country?.trim()])
            .map(({ country, journal_count }) => {
              const coordinates = countryCoordinates[country.trim()];
              return (
                <Marker key={country} coordinates={coordinates}>
                  <circle
                    r={getDotSize(journal_count)}
                    fill="rgb(114, 191, 68)"
                    stroke="white"
                    strokeWidth={1.2}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) =>
                      setTooltip({
                        content: `${country}: ${journal_count} journals`,
                        x: e.clientX,
                        y: e.clientY,
                        visible: true,
                      })
                    }
                    onMouseMove={(e) =>
                      setTooltip((prev) => ({
                        ...prev,
                        x: e.clientX,
                        y: e.clientY,
                      }))
                    }
                    onMouseLeave={() =>
                      setTooltip((prev) => ({ ...prev, visible: false }))
                    }
                  />
                </Marker>
              );
            })}
        </ComposableMap>
      </div>

      {tooltip.visible && (
        <div
          className="position-fixed text-warning px-3 py-2 rounded shadow border border-warning"
          style={{
            backgroundColor: "#113541",
            left: tooltip.x + 10,
            top: tooltip.y - 40,
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 50,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default MapBody;
