const Data = ['1月', '2月', '3月', '4月', '5月','6月']
      const sjlData = [200, 250, 370, 150, 350,110]
      const bjlData = [150, 140, 300, 110, 260,100]
      const bjl1Data = [200, 200, 160, 250, 140,210]
      const balData = [80,70,80,70,80,70,80]
      const bjl2Data = [70,80,70,80,70,80,70]
option = {
   backgroundColor:"#000",
  tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(13,5,30,.6)',
          borderWidth: 1,
          borderColor: '#4ddd8f',
          padding: 5,
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          top: 60,
          icon: 'rect',
          position: 'top',
          textStyle: {
            color: '#c7d3e5'
          }
        },
        grid: {
          top: '25%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: Data,
            axisPointer: {
              type: 'shadow'
            },
            axisTick: {
              show: true,
              length: 4,
              lineStyle: {
                color: 'rgba(199,211,229,0.5)'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(199,211,229,0.5)'
              }
            },
            axisLabel: {
              color: '#c7d3e5'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            max:500,
            nameTextStyle: {
              color: '#c7d3e5'
            },
            axisLabel: {
              color: '#c7d3e5'
            },
            axisTick: {
              show: true,
              length: 4,
              lineStyle: {
                color: 'rgba(64,136,254,1)'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(199,211,229,0.3)',
                width: 1,
                type: 'dashed'
              }
            }
          },
          {
            type: 'value',
            scale: true,
            splitLine:{
                    show:true,
                    lineStyle:{
                        type:'dashed',
                        color: 'rgba(199,211,229,0.3)'
                    }
                },
                 max: 100,
                min: 0,
            axisLabel : {
                    formatter: '{value}%',  //右侧以百分比进行展示
                    show: true,
                    textStyle: {
                        color: '#c7d3e5',
                    }
                },
            nameTextStyle: {
              color: '#c7d3e5'
            },
            axisTick: {
              show: true,
              length: 4,
              lineStyle: {
                color: 'rgba(64,136,254,1)'
              }
            },
          }
        ],
        series: [
          {
            name: '累计收件量',
            type: 'bar',
            barWidth: 14,
            data: sjlData,
            itemStyle: {
              color: '#2187dc'
            }
          },
          {
            name: '累计办结量',
            type: 'bar',
            barWidth: 14,
            itemStyle: {
              color: '#20c285'
            },
            data: bjlData
          },
          {
            name: '按期办结量',
            type: 'bar',
            barWidth: 14,
            data: bjl1Data,
            itemStyle: {
              color: '#d8b83f'
            }
          },
          {
            name: '办结率',
            type: 'line',
            smooth:true,
            yAxisIndex: 1,
            symbol: 'none',
            data: balData,
            itemStyle: {
              color: '#f6953c'
            }
          },
          {
            name: '按期办结率',
            type: 'line',
            yAxisIndex: 1,
            smooth:true,
            symbol: 'none',
            data: bjl2Data,
            itemStyle: {
              color: '#785ff3'
            }
          }
        ]
};
