// WorldMap.tsx
import React from "react";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import worldMap from "../public/assets/world-map.json";


import {useState} from "react";


const geoUrl = "/assets/world-map.json";

const mapData = [
    {country: "France", color: "#2563EB"},
    {country: "Germany", color: "#16A34A"},
    {country: "Brazil", color: "#F59E0B"},
    {country: "Japan", color: "#DC2626"},
];

interface WorldMapProps {
    selectedCountry?: string
}

export default function WorldMap({selectedCountry}: WorldMapProps) {
    const [tooltip, setTooltip] = useState("");

    // @ts-ignore
    return (
        <div className="w-full max-w-3xl mx-auto">
            <ComposableMap projectionConfig={{ scale: 150 }}>
                <Geographies geography={worldMap}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isSelected = geo.properties.name === selectedCountry;

                            return (
                                <Geography
                                    onMouseEnter={() => setTooltip(geo.properties.name)}
                                    onMouseLeave={() => setTooltip("")}

                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isSelected ? "#2563EB" : "#ffb700"}
                                    stroke="#FFF"
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#3B82F6", outline: "none" },
                                        pressed: { fill: "#1E3A8A", outline: "none" },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>

            <div className="absolute top-2 right-2 bg-white p-2 rounded shadow">
                {tooltip}
            </div>
        </div>
    );
}
