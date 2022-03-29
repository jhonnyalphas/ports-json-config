Highcharts.chart('container', {
    chart: {
        events: {
            load: function () {
                var chart = this,
                    yAxis = chart.yAxis[0],
                    xAxis = chart.xAxis[0];

                chart.renderer.path([
                    'M', xAxis.toPixels(0) - 100, yAxis.toPixels(30),
                    'L', xAxis.toPixels(0), yAxis.toPixels(30)
                ]).attr({
                    'stroke-width': 1,
                    stroke: 'red'
                }).add();

                chart.renderer.text(
                    '10°',
                    xAxis.toPixels(0) - 100,
                    yAxis.toPixels(30) - 10
                ).attr({
                    stroke: 'black'
                }).css({
                    fontSize: 20
                }).add();

                chart.renderer.text(
                    'Current',
                    xAxis.toPixels(0) - 100,
                    yAxis.toPixels(50) + 30
                ).attr({
                    stroke: 'black'
                }).css({
                    fontSize: 14
                }).add();
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },

    series: [{
        pointWidth: 40,
        type: 'column',
        borderWidth: 0,
        threshold: 10,
        data: [
            [
                -20,
                -10,
                0,
                10,
                20,
                30,
                40,
                50
            ]
        ],
        color: {
            linearGradient: {
                x1: 0, x2: 0, y1: 0, y2: 1
            },
            stops: [
                [0, "#CA2C36"],
                [0.2, "#EA6D13"],
                [0.4, "#2E9784"],
                [0.6, "#009BBB"],
                [1, "#5CA3E7"]
            ]
        }
    }]
});
