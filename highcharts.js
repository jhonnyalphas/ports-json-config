var wind_speed_range = [
  [1483232400000, 20, 30],
  [1483318800000, 30, 40],
  [1483405200000, 30, 38],
  [1483491600000, 27, 33],
  [1483578000000, 25, 30],
  [1483664400000, 26, 31],
  [1483750800000, 30, 38],
  [1483837200000, 30, 40],
];

var wind_speed = [
  [1483232400000, 20],
  [1483318800000, 30],
  [1483405200000, 30],
  [1483491600000, 27],
  [1483578000000, 25],
  [1483664400000, 26],
  [1483750800000, 30],
  [1483837200000, 30],
];

var wind_direction = [
  [1483232400000, 10.1, 177.2],
  [1483318800000, 11.3, 179.7],
  [1483405200000, 8.2, 175.5],
  [1483491600000, 9.3, 159.9],
  [1483578000000, 8.8, 159.6],
  [1483664400000, 7.8, 162.6],
  [1483750800000, 5.6, 186.2],
  [1483837200000, 6.8, 146.0],
];

var wind_observation = [
  [1483405200000, 30],
  [1483491600000, 27],
];

var wind_prediction = [
  [1483491600000, 27],
  [1483578000000, 25],
];

Highcharts.chart("container", {
  chart: {
    zoomType: "x",
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },

  title: {
    text: "Estación de viento",
    style: {
      color: "black",
      fontWeight: "bold",
    },
  },

  xAxis: {
    offset: 40,
    type: "dateTime",
    plotLines: [
      {
        color: "#FCD401",
        zIndex: 9999,
        dashStyle: "dash",
        value: 1483491600000,
        width: 2,
        label: {
          text: "NOW",
          rotation: 90,
        },
      },
    ],
  },

  yAxis: {
    title: {
      text: null,
    },
  },

  tooltip: {
    crosshairs: true,
    shared: true,
    valueSuffix: " km/h",
    xDateFormat: "%A, %b %e",
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    },
    arearange: {
      fillOpacity: 0.5,
      showInLegend: false
    },
    windbarb: {
      showInLegend: false
    }
  },
  legend: {
    enabled: true,
  },

  series: [
    {
      type: "windbarb",
      data: wind_direction,
      name: "Wind",
      zIndex: 9999,
      color: "#ABB0BF",
      showInLegend: false,
      tooltip: {
        valueSuffix: " m/s",
      },
    },
    {
      name: 'Velocidad Actual',
      type: "line",
      data: wind_speed,
      zIndex: 1,
      marker: {
        lineWidth: 0,
        lineColor: "#009BBB",
        fillColor: "#009BBB"
      }
    },
    {
      type: "arearange",
      name: "Velocidad Máxima",
      pointWidth: 5,
      lineWidth: 0,
      fillColor: "#009BBB",
      opacity: 0.5,
      marker: {
        enabled: false,
        lineColor: "#009BBB",
        fillColor: "#009BBB"
      },
      data: wind_speed_range
    },
    {
      name: "Observación",
      type: "areaspline",
      color: "#E0BD07",
      data: wind_observation,
    },
    {
      name: "Predicción",
      type: "areaspline",
      color: "#CA2C36",
      data: wind_prediction,
    },
  ],
});
