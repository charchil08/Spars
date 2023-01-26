import './index.css';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const userData = [
    {
        Name : "Chirag Chavda",
        EnrollmentNo : "190210116013",
        Branch : "IT",
        Semester : "6",
        EmailId : "chiragchavda0210@gmail.com",
        MobileNo : "7600000000",
        Password : "0210",
        ConfirmPassword : "0210"
    },
    {
        Name : "Charchil Kajaliya",
        EnrollmentNo : "170210116025",
        Branch : "IT",
        Semester : "6",
        EmailId : "er.charchil@gmail.com",
        MobileNo : "8200000000",
        Password : "er2000",
        ConfirmPassword : "er2000"
    },
    {
        Name : "Akhil Kukadiya",
        EnrollmentNo : "190210116033",
        Branch : "IT",
        Semester : "6",
        EmailId : "akhilgoogly@gmail.com",
        MobileNo : "8700000000",
        Password : "2135",
        ConfirmPassword : "2135"
    },
    {
        Name : "Sagar Sonagara",
        EnrollmentNo : "190210116075",
        Branch : "IT",
        Semester : "6",
        EmailId : "sagarsonagara@gmail.com",
        MobileNo : "9600000000",
        Password : "0789",
        ConfirmPassword : "0789"
    },
    {
        Name : "Kenneth Sebestian",
        EnrollmentNo : "190210116000",
        Branch : "IT",
        Semester : "6",
        EmailId : "kenneth@gmail.com",
        MobileNo : "8300000000",
        Password : "ken45",
        ConfirmPassword : "ken45"
    }   
]


const certData = [
    {
        SN : "1",
        Desc : "IIT Bombay's Techfest provided me amazing chance to gain knowledge in robotics.",
        Level : 5,
        Points : 15,
        Remarks : "",
        Date : 15
    },
    {
        SN : "2",
        Desc : "Google provided me with fruitful knowledge in data analysis.",
        Level : 5,
        Points : 5,
        Remarks : "",
        Date : 16
    },
    {
        SN : "3",
        Desc : "Gandhinagar GEC gave a chance to showcase skills in Python.",
        Level : 4,
        Points : 9,
        Remarks : "",
        Date : 18
    },
    {
        SN : "4",
        Desc : "SS GEC provided a chance to gain knowledge in startups.",
        Level : 3,
        Points : 5,
        Remarks : "",
        Date : 25
    },
    {
        SN : "5",
        Desc : "GEC Ignite provided an opportunity to play games.",
        Level : 2,
        Points : 3,
        Remarks : "",
        Date : 12
    }
]



function Progress() {
  return (
    <div>
        <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={certData} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Points" interval={'preserveStartEnd'}/>
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="Level" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Points" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* <h1 className="chart-heading">Area Chart</h1> */}
      {/* <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={certData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Points" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Date" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}

      {/* <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={certData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer> */}
    </div>
  )
}

export default Progress