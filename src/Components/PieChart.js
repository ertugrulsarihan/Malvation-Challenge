import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export default function PieChart({ cost, listNames, listPrices }) {
  const [chartdata, setChartData] = useState([]);

  const chart = () => {
    setChartData({
      labels: listNames,
      datasets: [
        {
          label: "Expenses",
          data: listPrices,
          backgroundColor: [
            "rgba(75,192,192,1)",
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          borderWidth: 4,
          hoverOffset: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, [cost, listNames, listPrices]);

  return (
    <div className="container">
      <div>
        <Doughnut
          data={chartdata}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            maintainAspectRatio: true,
          }}
        />
      </div>
    </div>
  );
}
