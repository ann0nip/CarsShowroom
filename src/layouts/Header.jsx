import React from 'react'
import { AppBar,Typography,Toolbar,makeStyles } from '@material-ui/core'
import CameraIcon from '@material-ui/icons/PhotoCamera';
// import {Homek} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
  }));

const Header=()=> {

    const classes = useStyles()

    return (
        <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Cars Showroom
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header;