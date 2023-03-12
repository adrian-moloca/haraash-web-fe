import { Paper, Typography } from '@mui/material';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

import { userData } from './dummyData';

const ChartTitle = styled.div`
  margin-bottom: 20px;
`;

const ChartComp = ({ grid }) => {
  const title = 'New Users';
  const dataKey = 'Active User';

  return (
    <Paper sx={{ margin: '20px', padding: '20px' }}>
      <ChartTitle>
        <Typography variant="h5"> {title}</Typography>
      </ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userData}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis type="number" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default ChartComp;
