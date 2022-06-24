import  React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../assets/styles/nav.css'




const Nav = ()=> {  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
        <div className='nav font'>
          <div className='logo'>
                <a href='#hero'><img src='/images/logo.png'/></a>
            </div>
          <div className='main-nav'>
       <ul className='nav-list'>
        <li className='nav-item'><a className='nav-link'  href='#hero'>HOME</a></li>
        <li className='nav-item'><a className='nav-link'  href='#about'>ABOUT</a></li>
        <li className='nav-item'><a  className='nav-link' href='#services'>PRODUCTS</a></li>
        <li className='nav-item'><a className='nav-link'  href='#contact'>CONTACT</a></li>
       </ul>
        
        </div>
        <div className='mobile-nav'>
          {/* <img src='images/menu.png'  onClick={handleOpen} /> */}
          <div className='hamburger' onClick={handleClick}>
          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
          </div>
       
 <Menu
       
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       PaperProps={{
         elevation: 0,
         sx: {
           overflow: 'visible',
           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
           mt: 1.5,
           '& .MuiAvatar-root': {
             width: 32,
             height: 32,
             ml: -0.5,
             mr: 1,
           },
           '&:before': {
             content: '""',
             display: 'block',
             position: 'absolute',
             top: 0,
             right: 14,
             width: 10,
             height: 10,
             bgcolor: '',
             transform: 'translateY(-50%) rotate(45deg)',
             zIndex: 0,
           },
         },
       }}
       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        > 
        <div className='mobile-nav-modal'>
        
        <a href='#hero'><MenuItem className='nav-item' onClick={handleClose}>HOME</MenuItem></a>
        <a href='#about'><MenuItem className='nav-item' onClick={handleClose}>ABOUT</MenuItem></a>
        <a href='#services'><MenuItem className='nav-item' onClick={handleClose}>PRODUCTS</MenuItem></a>
        <a href='#contact'><MenuItem className='nav-item' onClick={handleClose}>CONTACT</MenuItem></a>
      
        </div>
        </Menu>
        
</div>
</div>
    
    
  );
}

export default Nav