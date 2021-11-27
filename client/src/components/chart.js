import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '1분기',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2분기',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3분기',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4분기',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5분기',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
 
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

  render() {
    return (
      <div style={{ width: '100%' }}>
        <br />

        <ResponsiveContainer width="200%" height={200}>
          <LineChart
            width={100}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        

        <ResponsiveContainer width="200%" height={200}>
          <LineChart
            width={100}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="200%" height={200}>
          <AreaChart
            width={100}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
