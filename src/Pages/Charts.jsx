import React from 'react';
import { Bar, BarChart, Label, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: '1 star', count: 45 },
  { name: '2 star', count: 60 },
  { name: '3 star', count: 110 },
  { name: '4 star', count: 240 },
  { name: '5 star', count: 185 },
];      
      
            
const Charts = () => {

    return (
        
        <ResponsiveContainer width="100%" height={300}>
            <BarChart 
                layout='vertical'
                data={[...data].sort((a, b) => parseInt(b.name) - parseInt(a.name))}
                margin={{top:20, bottom:20}}
            >
                <XAxis type='number'/>
                <YAxis dataKey='name' type='category'/>
                <Tooltip/>
                <Bar dataKey='count' fill='#ff9900'>
                    <LabelList dataKey='count' position='right'/>
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Charts;