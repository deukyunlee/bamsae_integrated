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
    name: '2020년 1분기',
    순수익: 1450000,
    매출: 1950000,
    지출: 550000,
  },
  {
    name: '2020년 2분기',
    순수익: 2350000,
    매출: 3250000,
    지출: 950000,
  },
  {
    name: '2020년 3분기',
    순수익: 750000,
    매출: 1950000,
    지출: 1250000,
  },
  {
    name: '2020년 4분기',
    순수익: 1750000,
    매출: 2150000,
    지출: 450000,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

  render() {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '25%' }}>
                <select>
                    <option value="a">2020년</option>
                    <option value="b">2019년</option>
                    <option value="c">2018년</option>
                    <option>2017년</option>
                    <option>2016년</option>
                    <option>2015년</option>
                    <option>2014년</option>
                </select>
            </div>
        <br />

            <h4>  순수익</h4><br></br>
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
            <Line type="monotone" dataKey="순수익" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        
            <br></br><br></br>   <h4>  총 매출</h4><br></br>
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
            <Line type="monotone" dataKey="매출" stroke="#82ca9d" fill="#82ca9d" />
            
          </LineChart>
        </ResponsiveContainer>

            <br></br><br></br>   <h4>  총 지출</h4><br></br>
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
            <Area type="monotone" dataKey="지출" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
