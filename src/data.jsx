export const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        tension: 0.2,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Dataset-2",
        fill: true,
        tension: 0.2,
        borderColor: "#8b5cf6",
        backgroundColor: "#ede9fe",
        data: [10, 59, 40, 15, 20, 30, 17],
      },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Example",
      },
    },
  };
  