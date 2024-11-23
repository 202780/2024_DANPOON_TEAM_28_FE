import React from 'react';
import { BarChart, LineChart } from '@mui/x-charts';
import Box from '@mui/material/Box';

interface WeeklyChartProps {
  dataset: { day: string; value: number }[];
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({ dataset }) => {
  // 평균값 계산
  const averageValue = dataset.reduce((sum, item) => sum + item.value, 0) / dataset.length;

  // LineChart용 데이터: 모든 요일에 평균값을 동일하게 적용
  const lineData = dataset.map(() => averageValue); // [50, 50, 50, ...]

  return (
    <Box sx={{ mb: 4 }}>
      {/* BarChart: 막대 그래프 */}
      <BarChart
        width={350}
        height={250}
        xAxis={[
          {
            dataKey: 'day', // x축 레이블로 사용할 데이터 키
            label: '요일',
          },
        ]}
        series={[
          {
            dataKey: 'value', // y축 값으로 사용할 데이터 키
            label: '미션 완료 수',
            color: '#4caf50', // 막대그래프 색상
          },
        ]}
        dataset={dataset} // 전체 데이터셋 전달
      />
      
      {/* LineChart: 평균값을 선 그래프로 표시 */}
      <LineChart
        width={350}
        height={250}
        xAxis={[
          {
            dataKey: 'day', // x축 레이블로 사용할 데이터 키
            label: '요일',
          },
        ]}
        series={[
          {
            data: lineData, // 평균값 배열
            label: '평균',
            color: '#ff5252', // 선 그래프 색상
          },
        ]}
      />
    </Box>
  );
};

export default WeeklyChart;
