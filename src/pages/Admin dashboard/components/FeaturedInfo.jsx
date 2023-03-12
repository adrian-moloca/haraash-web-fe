import React from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import RouteIcon from '@mui/icons-material/Route';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { grey } from '@mui/material/colors';
import { Paper } from '@mui/material';

const Featured = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedMoneySub = styled.span`
  font-size: 15px;
  color: gray;
`;

const Square = styled.div`
  background: ${({ color }) => color};
  height: 3rem;
  width: 3rem;
  border-radius: 0.75rem;
  position: absolute;
  top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeaturedInfo = () => (
  <Featured>
    <Paper
      sx={{
        flex: '1',
        margin: '30px 20px 0px',
        padding: '30px',
        borderRadius: '10px',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      <Square color="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))">
        <StarIcon sx={{ color: grey[50] }} fontSize="medium" />
      </Square>
      <FeaturedTitle>Users</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>1,500</FeaturedMoney>
        <FeaturedMoneyRate>
          -11.4 <ArrowDownward />
        </FeaturedMoneyRate>
      </FeaturedMoneyContainer>
      <FeaturedMoneySub>Compared to last month</FeaturedMoneySub>
    </Paper>
    <Paper
      sx={{
        flex: '1',
        margin: '30px 20px 0px',
        padding: '30px',
        borderRadius: '10px',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      <Square color="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));">
        <RouteIcon sx={{ color: grey[50] }} fontSize="medium" />
      </Square>
      <FeaturedTitle>Traffic</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>5,900</FeaturedMoney>
        <FeaturedMoneyRate>
          -1.4 <ArrowDownward />
        </FeaturedMoneyRate>
      </FeaturedMoneyContainer>
      <FeaturedMoneySub>Compared to last month</FeaturedMoneySub>
    </Paper>
    <Paper
      sx={{
        flex: '1',
        margin: '30px 20px 0px',
        padding: '30px',
        borderRadius: '10px',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      <Square color="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))">
        <ProductionQuantityLimitsIcon
          sx={{ color: grey[50] }}
          fontSize="medium"
        />
      </Square>
      <FeaturedTitle>Products</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>3,973</FeaturedMoney>
        <FeaturedMoneyRate>
          +2.4 <ArrowUpward />
        </FeaturedMoneyRate>
      </FeaturedMoneyContainer>
      <FeaturedMoneySub>Compared to last month</FeaturedMoneySub>
    </Paper>
  </Featured>
);

export default FeaturedInfo;
