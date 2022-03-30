var calories = 0, fat = 0, carbohydrates = 0, protein = 0;

var caloriesValue = document.getElementById('calories_details').value;
calories = parseFloat(caloriesValue);

var fatValue = document.getElementById('fat_details').value;
fat = parseFloat(fatValue);

var carbohydratesValue = document.getElementById('carbohydrates_details').value;
carbohydrates = parseFloat(carbohydratesValue);

var proteinValue = document.getElementById('protein_details').value;
protein = parseFloat(proteinValue);


// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
Chart.defaults.global.defaultFontColor = '#858796';
  
// Horizontal Bar Chart - Macronutrients breakdown
var ctx = document.getElementById('myBarChart');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Fat', 'Carbs', 'Protein'],
        datasets:
        [
            {
                data: [fat, carbohydrates, protein],
                backgroundColor: ['#e5a641', '#e94b43', '#419ad6'],
                barPercentage: 1,
            }
        ],
    },
    options: {
        responsive: true,
        legend: {
            display: false,
            position: 'bottom',
            fullWidth: true,
            labels: {
                boxWidth: 10,
                padding: 50
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    drawTicks: true,
                    drawOnChartArea: false
                },
                ticks: {
                    fontColor: '#555759',
                    fontSize: 11,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    drawTicks: false,
                    tickMarkLength: 5,
                    drawBorder: false
                },
                ticks: {
                    padding: 5,
                    beginAtZero: true,
                    fontColor: '#555759',
                    fontSize: 11,
                    min: 0,
                    max: 100,
                    maxTicksLimit: 10,
                    padding: 10,
                    // Include a 'g' in the ticks
                    callback: function(value, index, values) {
                        return value + 'g';
                    }
                },
                scaleLabel: {
                    display: true,
                    padding: 10,
                    fontColor: '#555759',
                    fontSize: 16,
                    fontStyle: 700,
                    labelString: 'Macronutrients (g) per 100 grams'
                },
            }],
        },
        tooltips: {
            enabled: false,
        },
    }
});