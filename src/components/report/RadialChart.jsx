'use client';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
];

const style = {
    top: '50%',
    right: "50%",
    transform: 'translate(200%, -50%)',
    lineHeight: '24px',
};

const RadialChart = ({ radialChartData }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="30%" cy="50%" innerRadius="20%" outerRadius="100%" barSize={8} data={radialChartData}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: 'transparent' }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default RadialChart;