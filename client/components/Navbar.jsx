import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import BreakFASTicLogoNav from '../assets/BreakFASTicLogoNav.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }
  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    return (
      <Box
        sx={{ flexGrow: 1, justifyContent: 'space-between', display: 'flex' }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={this.handleClose}>Home</MenuItem>
              </Link>

              <Link to="/pantry" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={this.handleClose}>Pantry</MenuItem>
              </Link>

              <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={this.handleClose}>Search Recipes</MenuItem>
              </Link>
            
            </Menu>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={BreakFASTicLogoNav}></img>
              </Link>
            </Typography>
            <a href="/auth/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </a>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
