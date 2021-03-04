import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MovieIcon from '@material-ui/icons/Movie';
import TheatersIcon from '@material-ui/icons/Theaters';
import HomeIcon from '@material-ui/icons/Home';
import StarsIcon from '@material-ui/icons/Stars';
import LiveTvIcon from '@material-ui/icons/LiveTv';

const useStyles = makeStyles((theme) => ({

  textDecoration: {
    textDecoration: "none",
    color: "#333"
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

function Appbar() {
  const classes = useStyles()

  const [drawerState, setDrawerState] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movies Site
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer open={drawerState} onClose={() => setDrawerState(!drawerState)}>
        <List>

          <NavLink to="/"
            className={classes.textDecoration}
            onClick={() => setDrawerState(false)}
          >
            <ListItem button >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>

          <NavLink to="/popular"
            className={classes.textDecoration}
            onClick={() => setDrawerState(false)}
          >
            <ListItem button >
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <ListItemText primary="Popular" />
            </ListItem>
          </NavLink>

          <NavLink to="/movies"
            className={classes.textDecoration}
            onClick={() => setDrawerState(false)}
          >
            <ListItem button >
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </ListItem>
          </NavLink>

          <NavLink to="/series"
            className={classes.textDecoration}
            onClick={() => setDrawerState(false)}
          >
            <ListItem button >
              <ListItemIcon>
                <TheatersIcon />
              </ListItemIcon>
              <ListItemText primary="Series" />
            </ListItem>
          </NavLink>

          <NavLink to="/tvShows"
            className={classes.textDecoration}
            onClick={() => setDrawerState(false)}
          >
            <ListItem button >
              <ListItemIcon>
                <LiveTvIcon />
              </ListItemIcon>
              <ListItemText primary="TV Shows" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </div>
  )
}

export default Appbar