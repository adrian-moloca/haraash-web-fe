import { Paper, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 40px;
`;

const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;

const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const WidgetLgName = styled.span``;
const WidgetLgDateAmount = styled.td`
  font-weight: 300;
`;

const WidgetLgStatus = styled.td`
  font-weight: 300;
`;

const WidgetLgComp = () => (
  <Paper
    sx={{
      flex: '2',
      marginRight: '20px',
      padding: '30px',
      borderRadius: '10px',
      cursor: 'pointer',
      position: 'relative'
    }}
  >
    <WidgetLgTitle>Latest Products</WidgetLgTitle>
    <WidgetLgTable>
      <thead>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Category</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
      </thead>
      <tbody>
        <WidgetLgTr>
          <WidgetLgUser>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDateAmount>2 Jun 2021</WidgetLgDateAmount>
          <WidgetLgDateAmount>$122.00</WidgetLgDateAmount>
          <WidgetLgDateAmount>Cars</WidgetLgDateAmount>
          <WidgetLgStatus>
            <Button
              sx={{ backgroundColor: 'success.light' }}
              variant="contained"
            >
              Online
            </Button>
          </WidgetLgStatus>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgUser>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDateAmount>2 Jun 2021</WidgetLgDateAmount>
          <WidgetLgDateAmount>$122.00</WidgetLgDateAmount>
          <WidgetLgDateAmount>Car parts</WidgetLgDateAmount>
          <WidgetLgStatus>
            <Button variant="contained">Pending</Button>
          </WidgetLgStatus>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgUser>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDateAmount>2 Jun 2021</WidgetLgDateAmount>
          <WidgetLgDateAmount>$122.00</WidgetLgDateAmount>
          <WidgetLgDateAmount>House</WidgetLgDateAmount>
          <WidgetLgStatus>
            <Button variant="contained">Online</Button>
          </WidgetLgStatus>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgUser>
            <Image
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <WidgetLgName>Susan Carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDateAmount>2 Jun 2021</WidgetLgDateAmount>
          <WidgetLgDateAmount>$122.00</WidgetLgDateAmount>
          <WidgetLgDateAmount>Land</WidgetLgDateAmount>
          <WidgetLgStatus>
            <Button variant="contained">Pending</Button>
          </WidgetLgStatus>
        </WidgetLgTr>
      </tbody>
    </WidgetLgTable>
  </Paper>
);

export default WidgetLgComp;
