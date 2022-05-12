import React, { useRef, useEffect } from "react";
import { render } from "react-dom"
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Search from "@arcgis/core/widgets/Search";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

import "./map.css";

function AlvarosMap() {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "1195ccfc8c674620a0c2377f04a9c9d6"
        }
      });
      console.log(webmap);

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [-116.62, 32.56],
        zoom: 11
      });
      console.log(view);

      
      const search = new Search({
        view: view
      });

      // Add the widget to the top-right corner of the view
      view.ui.add(search, "top-right");

      const template = {
        /*
        * Used for pop-up-template displaying data on point
        */
        title: "ABC License",
        content: "Name : {Name}"
      };

      const geoJSONLayer = new GeoJSONLayer({
        // Sample data
        url: "https://gissd.sandag.org/rdw/rest/services/Miscellaneous/ABC_Licenses/MapServer/0/query?outFields=*&where=1%3D1&f=geojson",
        // url: "http://localhost:8000/api/contribute/project?format=json",
        copyright: "SANDAG/SanGIS",
        popupTemplate: template // displays pop-up table
      });

      webmap.add(geoJSONLayer);

      
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default AlvarosMap;

const container = document.getElementById("mapDiv");

// Only render if the container is in the DOM
if (container != null) {
  render(<AlvarosMap />, container);
  console.log("Map", container);
}