import React from 'react';
import { Visibility } from '@mui/icons-material';
import styled from 'styled-components';
import { Divider, Paper } from '@mui/material';

const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const WidgetSmUsername = styled.span`
  font-weight: 600;
`;

const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const WidgetSmComp = () => (
  <Paper
    sx={{
      margin: '0px 20px',
      padding: '30px',
      borderRadius: '10px',
      cursor: 'pointer',
      position: 'relative',
      flex: '1'
    }}
  >
    <WidgetSmTitle>New Join Members</WidgetSmTitle>
    <WidgetSmList>
      <WidgetSmListItem>
        <Image
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <WidgetSmUser>
          <WidgetSmUsername>Anna Keller</WidgetSmUsername>
          <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
        </WidgetSmUser>
        <Button>
          <Visibility sx={{ marginRight: '5px' }} />
          Display
        </Button>
      </WidgetSmListItem>
      <Divider />
      <WidgetSmListItem>
        <Image
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <WidgetSmUser>
          <WidgetSmUsername>Anna Keller</WidgetSmUsername>
          <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
        </WidgetSmUser>
        <Button>
          <Visibility sx={{ marginRight: '5px' }} />
          Display
        </Button>
      </WidgetSmListItem>
      <Divider />
      <WidgetSmListItem>
        <Image
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <WidgetSmUser>
          <WidgetSmUsername>Anna Keller</WidgetSmUsername>
          <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
        </WidgetSmUser>
        <Button>
          <Visibility sx={{ marginRight: '5px' }} />
          Display
        </Button>
      </WidgetSmListItem>
      <Divider />
      <WidgetSmListItem>
        <Image
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="widgetSmImg"
        />
        <WidgetSmUser>
          <WidgetSmUsername>Anna Keller</WidgetSmUsername>
          <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
        </WidgetSmUser>
        <Button>
          <Visibility />
          Display
        </Button>
      </WidgetSmListItem>
      <Divider />
      <WidgetSmListItem>
        <Image
          src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <WidgetSmUser>
          <WidgetSmUsername>Anna Keller</WidgetSmUsername>
          <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
        </WidgetSmUser>
        <Button>
          <Visibility sx={{ marginRight: '5px' }} />
          Display
        </Button>
      </WidgetSmListItem>
    </WidgetSmList>
  </Paper>
);

export default WidgetSmComp;
