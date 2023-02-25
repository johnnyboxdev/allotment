import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { db } from './Backend/Firebase';
import { doc, deleteDoc } from "firebase/firestore";

function TableOfGastos(props) {
  const mgaGastos = props.data;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mgaGastos && mgaGastos.map((item, index) => <BlockItem data={item} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function BlockItem(props) {
  const { id, name } = props.data;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    deleteDoc(doc(db,'gastusin',id));
    handleClose();
  }  

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };  

  return (
            <TableRow
              key={id} className={name}
            >
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell><input type="text" value={inputValue} onChange={handleInputChange} /></TableCell>
              <TableCell >
                <IconButton
                    size="small"
                    aria-label="display more actions"
                    onClick={handleClick}
                >
                  <MoreIcon />
                </IconButton>
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
                <MenuItem onClick={() => handleDelete(id)} >Delete</MenuItem>
              </Menu>          
              </TableCell>
            </TableRow>
  );
}

export default TableOfGastos;