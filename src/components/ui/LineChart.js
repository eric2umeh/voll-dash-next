import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const LineChart = ({ title, labels, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              borderColor: 'rgba(127,86,217)',
              backgroundColor: 'rgba(0, 0, 255, 0.1)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
            },
          },
        },
      });
    }
  }, [labels, data, title]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
