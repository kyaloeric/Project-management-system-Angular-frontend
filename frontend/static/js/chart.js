var ctx = document.getElementById('myChart').getContext('2d');

// Static data for the donut chart
var donutData = {
  labels: ['Confirmed Cases', 'Recovered Cases', 'Deaths'],
  datasets: [{
    data: [5000, 3000, 1000], // Replace these values with your static data
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6'
    ],
    hoverOffset: 4
  }]
};

new Chart(ctx, {
  type: 'doughnut',
  data: donutData,
  options: {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: 'white'
        }
      }
    }
  }
});
