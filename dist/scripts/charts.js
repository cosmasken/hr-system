const pieOptions = {
  series: [72, 28],
  labels: ["Men", "Women"],
  chart: {
    type: "donut",
    offsetY: 0,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
    },
  },
  colors: ["#0561FC", "#50B5FF"],
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "bottom",
    horizontalAlign: "center",
    floating: false,
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 400,
    inverseOrder: true,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      width: 24,
      height: 16,
      strokeWidth: 0,
      strokeColor: "#fff",
      radius: 8,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 18,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "14px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#44444F"],
    },
    formatter: function (val, opts) {
      let seriesIndex = opts.seriesIndex;
      return val + "%" + " " + opts.w.globals.labels[seriesIndex];
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 15,
      borderRadius: 8,
      borderWidth: 0,
      opacity: 1,
    },
  },
};

var pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieOptions);

pieChart.render();

var barOptions = {
  series: [
    {
      name: "Project In",
      data: [44, 55, 41, 67, 22, 43, 24],
      color: "#0561FC",
    },
    {
      name: "Project Take",
      data: [13, 23, 20, 8, 13, 27, 50],
      color: "#50B5FF",
    },
    {
      name: "On Hold",
      data: [11, 17, 15, 15, 21, 14, 12],
      color: "#E3F6FF",
    },
  ],
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  chart: {
    type: "bar",
    height: 260,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 8,
      columnWidth: "13%",
    },
  },
  legend: {
    position: "bottom",
    itemMargin: {
      horizontal: 12,
      vertical: 10,
    },
  },

  dataLabels: {
    enabled: false,
  },
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);
barChart.render();
