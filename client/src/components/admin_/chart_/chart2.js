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
    name: '2021년 1분기',
    순수익: 4000,
    매출: 6400,
    지출: 2400,
  },
  {
    name: '2021년 2분기',
    순수익: 3000,
    매출: 5398,
    지출: 2398,
  },
  {
    name: '2021년 3분기',
    순수익: 2000,
    매출: 9800,
    지출: 7800,
  },
  {
    name: '2021년 4분기',
    순수익: 2780,
    매출: 3908,
    지출: 1128,
  }
];

export default class Chart2 extends PureComponent {
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
                <select>
                    <option value="a">서울</option>
                    <option value="b">경기</option>
                    <option value="c">인천</option>
                    <option>강원</option>
                    <option>대전/충청</option>
                    <option>대구</option>
                    <option>부산/울산</option>
                    <option>경상</option>
                    <option>광주/전라/제주</option>
                </select>
                <select>
                    <option value="a">강남</option>
                    <option value="b">신촌</option>
                    <option value="c">마포</option>
                    <option>강변</option>
                    <option>건대입구</option>
                    <option>구로</option>
                    <option>대학로</option>
                    <option>동대문</option>
                    <option>명동</option>
                    <option>목동</option>
                    <option>미아</option>
                    <option>상봉</option>
                    <option>수유</option>
                    <option>송파</option>
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
        
        <br></br><br></br><h4>  총 매출</h4><br></br>
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

        <br></br><br></br><h4>  총 지출</h4><br></br>
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
