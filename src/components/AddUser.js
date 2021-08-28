import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div>
       
            <Container component="main" maxWidth="xs">
            <Alert severity="info">
        <AlertTitle>Thêm thành viên</AlertTitle>
       
      </Alert>
        <div className={classes.paper}>
      <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
     
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
   
          />
           <Tooltip title="Add" aria-label="add">
        <Fab color="secondary">
          <AddIcon />
        </Fab>
      </Tooltip>
    
    </form>
    </div>
    </Container>
     
    </div>
  );
}