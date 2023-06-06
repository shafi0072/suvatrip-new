import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { baseUrl } from '@/src/config/serverConfig';

export default function BasicMenu({roomId, priceId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [delet, setDelete] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (e) => {
    fetch(`${baseUrl}/hotel/rooms/${roomId}/priceCategories/${priceId}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      setAnchorEl(null);
    })
    .catch(err => {})
    
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon /> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        
      </Menu>
    </div>
  );
}