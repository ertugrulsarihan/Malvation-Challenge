import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function BarChart({ cost }) {
  const [chartdata, setChartData] = useState([]);

  useEffect(() => {
    const chart = () => {
      setChartData({
        labels: ["March", "April", "May", "July", "June(This Month)"],
        datasets: [
          {
            label: "Expenses",
            data: [950, 800, 950, 1200, cost],
            backgroundColor: ["rgba(75,192,192,1)"],
            borderWidth: 4,
          },
        ],
      });
    };
    chart();
  }, [cost]);
  return (
    <div>
      <Line
        data={chartdata}
        options={{
          responsive: true,
          title: { text: "THICCNESS SCALE", display: true },
        }}
      />
    </div>
  );
}
