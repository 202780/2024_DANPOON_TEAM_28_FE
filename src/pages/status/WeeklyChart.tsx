import { Cell, BarChart, Bar, XAxis, YAxis, ReferenceLine } from 'recharts';
import { Box,} from '@mui/material';
import * as style from './WeeklyChart.style';

const data = [
    { day: '일', value: 40 },
    { day: '월', value: 60 },
    { day: '화', value: 20 },
    { day: '수', value: 100 },
    { day: '목', value: 50 },
    { day: '금', value: 30 },
    { day: '토', value: 70 },
];

const getColor = (value: number) => {
    if (value <= 30) return '#E9F4D2';
    if (value <= 70) return '#A4C67C';
    return '#7FA66A';
};

const averageValue =
    data.reduce((sum, item) => sum + item.value, 0) / data.length;

const coloredData = data.map((item) => ({
    ...item,
    color: getColor(item.value),
}));

const WeeklyChart = () => {

    return (
        <Box sx={style.boxStyle}>
            <BarChart width={500} height={300} data={coloredData}>
                <XAxis
                    dataKey='day'
                    stroke='#9e9e9e'
                    tick={{
                        fill: '#000000',
                        fontSize: 12,
                    }}
                    tickMargin={10}
                />
                <YAxis
                    ticks={[0, 50, 100]}
                    stroke='#CCC'
                    tick={{ fill: '#CCC', fontSize: 13 }}
                />
                <ReferenceLine
                    y={averageValue}
                    alwaysShow
                    style={{ zIndex: 10 }}
                    label={{
                        position: 'left',
                        value: '평균',
                        fill: '#D27B90',
                        fontSize: 15,
                        fontWeight: '700',
                    }}
                    stroke='#D27B90'
                    strokeWidth={2}
                />
                <Bar dataKey='value'>
                    {coloredData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </Box>
    );
};

export default WeeklyChart;
