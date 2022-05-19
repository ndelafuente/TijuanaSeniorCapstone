import React, { Component } from 'react';
import { render } from "react-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

class NavBar extends Component {
  render(props) {
    return (
      <div>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <Box sx={{ padding: 2 }}>
                <img
                  src="static/logo.png"
                  alt="logo"
                  width="50px"
                  loading="lazy"
                />
              </Box>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/map">Map</Button>
                <Button color="inherit" href="/contribute">Contribute</Button>
                <Button color="inherit" href="/about">About</Button>
              </Typography>
              <Button color="inherit" href="/admin">Admin</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        {/* <Container>
          // should something go here?
        </Container> */}
      </div>
    );
  }
}

export default NavBar;

const container = document.getElementById("navbar");

// Only render if the container is in the DOM
if (container != null) {
  render(<NavBar />, container);
}