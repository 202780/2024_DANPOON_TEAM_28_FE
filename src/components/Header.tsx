import React from 'react';
import Box from '@mui/material/Box';
import Logo from './Logo';
import NotificationIcon from './Icons/NotificationIcon';
import * as style from './Header.style';

const Header: React.FC = () => {
  return (
    <Box sx={style.container}>
      <Logo size="small" showName={true}/>
      <NotificationIcon onNotificationClick={() => alert('알림창으로 연결됩니다')} />
    </Box>
  );
};

export default Header;
