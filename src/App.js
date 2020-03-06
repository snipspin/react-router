import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Home from './Home';
import Blog from './Blog';
import Projects from './Projects';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={<Link to="/home">Home</Link>} />
          <Tab label={<Link to="/blog">Blog</Link>} />
          <Tab label={<Link to="/projects">Projects</Link>} />
          <Tab label={<Link to="/about">About</Link>} />
        </Tabs>
      </AppBar>
      <TabPanel>
      <Route path="/home" render={() => <Home message={"Home shows a message"} />} />
      <Route path="/blog" render={() => <Blog message={"Blog shows a message"} />} />
      <Route path="/projects" render={() => <Projects message={"Projects shows a message"} />} />
      <Route path="/about" render={() => <About message={"About shows a message"} />} />
      </TabPanel>
      </Router>
    </div>
  );
}
