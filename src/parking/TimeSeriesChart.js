import React, { useState, useRef, useEffect } from "react";
import React from "react";

import { Chart } from "react-google-charts";

const TimeSeriesChart = props => {

  // const { lastHour } = props;

  // var data = new google.visualization.DataTable();
  // data.addColumn('timeofday', 'Time of Day');
  // data.addColumn('number', 'Emails Received');

  // console.log(lastHour);

  // let start = new Date(lastHour.Start);
  // let end = new Date(lastHour.End);

  // let [startHour, startMinutes, startSeconds] = [start.getHours(), start.getMinutes(), start.getSeconds()]
  // let [endHour, endMinutes, endSeconds] = [end.getHours(), end.getMinutes(), end.getSeconds()]

  const data = [
    ["Time", "Usage", { role: "tooltip" }],
    [[10, 0, 0, 0], 1000, "[SESSION-1]"],
    [[10, 1, 0, 0], 1, "[SESSION-2]"],
    [[10, 2, 0, 0], 15, "tooltip data"],
    [[10, 3, 45, 0], 20, "tooltip data"],
    [[10, 4, 1, 0], 2, "tooltip data"],
    [[10, 5, 0, 0], 200, "tooltip data"],
    [[10, 6, 0, 0], 30, "tooltip data"],
    [[10, 7, 0, 0], 3, "tooltip data"],
    [[10, 8, 0, 0], 4, "tooltip data"],
    [[10, 8, 0, 0], 3, "tooltip data"],
    [[10, 9, 0, 0], 3, "tooltip data"],
    [[10, 10, 0, 0], 3, "tooltip data"],
    [[10, 11, 0, 0], 3, "tooltip data"],
    [[10, 12, 0, 0], 3, "tooltip data"],
    [[10, 13, 0, 0], 3, "tooltip data"],
    [[10, 14, 0, 0], 3, "tooltip data"],
    [[10, 15, 0, 0], 34, "tooltip data"],
    [[10, 16, 0, 0], 35, "tooltip data"],
    [[10, 17, 0, 0], 1, "tooltip data"],
    [[10, 18, 0, 0], 55, "tooltip data"],
    [[10, 19, 0, 0], 200, "tooltip data"],
    [[10, 20, 0, 0], 100, "tooltip data"],
    [[10, 21, 0, 0], 457, "tooltip data"],
    [[10, 22, 0, 0], 2983, "tooltip data"],
    [[10, 23, 0, 0], 34, "tooltip data"],
    [[10, 24, 0, 0], 44, "tooltip data"],
    [[10, 25, 0, 0], 56, "tooltip data"],
    [[10, 26, 0, 0], 12, "tooltip data"],
    [[10, 27, 0, 0], 55, "tooltip data"],
    [[10, 28, 0, 0], 589, "tooltip data"],
    [[10, 29, 0, 0], 347, "tooltip data"],
    [[10, 30, 0, 0], 43, "tooltip data"],
    [[10, 31, 0, 0], 137, "tooltip data"],
    [[10, 32, 0, 0], 500, "tooltip data"],
    [[10, 33, 0, 0], 48, "tooltip data"],
    [[10, 34, 0, 0], 22, "tooltip data"],
    [[10, 35, 0, 0], 5867, "tooltip data"],
    [[10, 36, 0, 0], 683, "tooltip data"],
    [[10, 37, 0, 0], 3782, "tooltip data"],
    [[10, 38, 0, 0], 445, "tooltip data"],
    [[10, 39, 0, 0], 238, "tooltip data"],
    [[10, 40, 0, 0], 348, "tooltip data"],
    [[10, 41, 0, 0], 38, "tooltip data"],
    [[10, 42, 0, 0], 48, "tooltip data"],
    [[10, 43, 0, 0], 3483, "tooltip data"],
    [[10, 44, 0, 0], 345, "tooltip data"],
    [[10, 45, 0, 0], 322, "tooltip data"],
    [[10, 46, 0, 0], 338, "tooltip data"],
    [[10, 47, 0, 0], 448, "tooltip data"],
    [[10, 48, 0, 0], 358, "tooltip data"],
    [[10, 49, 0, 0], 38, "tooltip data"],
    [[10, 50, 0, 0], 228, "tooltip data"],
    [[10, 51, 0, 0], 3338, "tooltip data"],
    [[10, 52, 0, 0], 38, "tooltip data"],
    [[10, 53, 0, 0], 346, "tooltip data"],
    [[10, 54, 0, 0], 88, "tooltip data"],
    [[10, 55, 0, 0], 48, "tooltip data"],
    [[10, 56, 0, 0], 118, "tooltip data"],
    [[10, 57, 0, 0], 3428, "tooltip data"],
    [[10, 58, 0, 0], 348, "tooltip data"],
    [[10, 59, 0, 0], 3438, "tooltip data"]
  ];


  return (
    <div className="container-fluid text-white">
      <div className="row">
        <div className="sm-12">
          <Chart
            style={{ marginTop: "50px" }}
            chartType="Bar"
            width="100%"
            height="450px"
            data={data}
            options={{
              chart: {
                title: "Data usage",
                legend: "none",
                style: {
                  background: {
                    fillColor: "#2c2f33"
                  }
                }
              },
            }}
          />
        </div>

        <div className="col-6 col-lg-3">
          <table>
            <tr>
              <td>MB Downloaded</td>
              <td>123</td>
            </tr>

            <tr>
              <td>Today</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This week</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This month</td>
              <td>155</td>
            </tr>


          </table>
        </div>

        <div className="col-6 col-lg-3">
          <table>
            <tr>
              <td>MB Uploaded</td>
              <td>123</td>
            </tr>

            <tr>
              <td>Today</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This week</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This month</td>
              <td>155</td>
            </tr>
          </table>
        </div>

        <div className="col-6 col-lg-3">
          <table>
            <tr>
              <td>Total packets</td>
              <td>123</td>
            </tr>

            <tr>
              <td>Today</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This week</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This month</td>
              <td>155</td>
            </tr>
          </table>
        </div>

        <div className="col-6 col-lg-3">
          <table>
            <tr>
              <td>Total errors</td>
              <td>123</td>
            </tr>

            <tr>
              <td>Today</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This week</td>
              <td>155</td>
            </tr>

            <tr>
              <td>This month</td>
              <td>155</td>
            </tr>
          </table>
        </div>
      </div>


    </div>
  )
}

export default TimeSeriesChart;