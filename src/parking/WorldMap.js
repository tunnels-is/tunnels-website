import React from "react";

import { Chart } from "react-google-charts";
import STORE from "../store";


const data2 = [
    ['City', 'Population', 'Area'],
    ['Rome', 2761477, 1285.31],
    ['Milan', 1324110, 181.76],
    ['Naples', 959574, 117.27],
    ['Turin', 907563, 130.17],
    ['Palermo', 655875, 158.9],
    ['Genoa', 607906, 243.60],
    ['Bologna', 380181, 140.7],
    ['Florence', 371282, 102.41],
    ['Fiumicino', 67370, 213.44],
    ['Anzio', 52192, 43.43],
    ['Ciampino', 38262, 11]
]

const data = [
    ["Country"],
    ["Germany"],
    ["United States"],
    ["Brazil"],
    ["Canada"],
    ["France"],
    ["Russia"]
]

const chartEvents = [
    {
        eventName: "select",
        callback({ chartWrapper }) {
            console.log("Selected1 ", chartWrapper.getChart().getSelection());
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data2[selection[0].row + 1];
            // const region = data[selection[0].row + 1];
            console.log("Selected2 : " + region);

            STORE.Cache.Set("Country", region)

        }
    },
    {
        eventName: "regionClick",
        callback({ chartWrapper }) {
            console.log(chartWrapper.getChart().getSelection())
            console.log("region ");
        }
    }
];

const WorldMap = props => {
    return (
        <Chart
            style={{ marginTop: "50px" }}
            width={"100%"}
            height={"80vh"}
            chartType={"GeoChart"}
            data={data2}
            options={{
                tooptip: {
                    trigger: "select"
                    // trigger: "focus"
                },
                colorAxis: { colors: ['green', 'blue'] },
                displayMode: "markers",
                // displayMode: "auto",
                // displayMode: "regions",
                // displayMode: "text",
                enableRegionInteractivity: true,
                geochartVersion: 11,
                legend: "none",
                region: 'world',
                resolution: 'countries',
                regioncoderVersion: 1,
                magnifyingGlass: {
                    zoomFactor: 10,
                    enable: true
                },
                backgroundColor: "#2c2f33"
            }}
            mapsApiKey="AIzaSyDg3yX_XI7CXCNNTM2Q9gatQYPGA9HrBvE"
            rootProps={{ "data-testid": "1" }}
            chartEvents={chartEvents}
        />
    )
}

export default WorldMap;