import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ color: '#fff', backgroundColor: '#f57c00' }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WantToBuyList
          </Typography>
          <Fab
            size="small"
            aria-label="add"
            style={{ color: '#f57c00', backgroundColor: '#fff' }}
          >
            <AddIcon />
          </Fab>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
