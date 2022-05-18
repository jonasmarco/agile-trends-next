import * as S from './styles'

import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

import randomArrayOfNumbers from 'utils/arrays/randomArrayOfNumbers'

const Chart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
      background: '#a2a2a2',
      foreColor: '#fff',
      toolbar: {
        show: false
      }
    },
    colors: [
      '#D7263D',
      '#3F51B5',
      '#2E294E',
      '#546E7A',
      '#FF9800',
      '#775DD0',
      '#2B908F'
    ],
    title: {
      text: 'Gangues de Cyberpunk™ 2077',
      margin: 20,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: undefined
      }
    },
    xaxis: {
      categories: ['1990', '2000', '2010', '2020', '2022'],
      title: {
        text: 'DÉCADAS'
      }
    },
    yaxis: {
      title: {
        text: 'mil integrantes'
      }
    }
  }

  const series = [
    {
      name: '6th Street',
      data: randomArrayOfNumbers(5)
    },
    {
      name: 'Voodoo Boys',
      data: randomArrayOfNumbers(5)
    },
    {
      name: 'Tiger Claws',
      data: randomArrayOfNumbers(5)
    },
    {
      name: 'Totentanz Club',
      data: randomArrayOfNumbers(5)
    },
    {
      name: 'Valentinos',
      data: randomArrayOfNumbers(5)
    },
    {
      name: 'The Mox',
      data: randomArrayOfNumbers(5)
    },
    {
      name: 'The Animals',
      data: randomArrayOfNumbers(5)
    }
  ]

  return (
    <S.Wrapper>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="100%"
        width="100%"
      />
    </S.Wrapper>
  )
}

export default Chart
