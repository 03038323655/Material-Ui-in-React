import React, {useEffect, useState} from 'react';
import './App.css';
import {Box} from '@material-ui/core/';
import {Typography,Paper,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import BackupIcon from '@material-ui/icons/Backup';
import SearchIcon from '@material-ui/icons/Search';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme)=>({

  root:{
    maxwidth:"100vw",
    maxheight:"100vh",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"space-evenly",
    paddingTop:300,
      
  },
  borRoot:{
    width:300,
    backgroundColor: theme.palette.error.dark,
    boxShadow: theme.shadows[24],

    //Usee Own Material ui Color Using Defult Theming in Material UI
    //backgroundColor: theme.palette.error.dark,

    color:"white",
    padding:50,
    borderRadius:4,
  },
  rootPaper:{
    width:200,
    padding:50,
    backgroundColor: theme.palette.warning.light,
    boxShadow: theme.shadows[20],
  },
  skeletonRoot:{
    
    
    backgroundColor:"red",
    paddingTop:400,
  }
}));
function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      //API
      setLoading(false);
    }, 3000);
  }, []);
  return (
    
    
    <div>

        
      {loading ? <Skeleton width={300} height={200} className={classes.root} /> :
        <Box xs={12} className={classes.root}>
          {/* box 1st */}
          <Box className={classes.borRoot} borderLeft={5} borderColor="yellow">
            <Paper className={classes.rootPaper}>
              <Typography variant={"h2"}>
                My App
        </Typography>
              <Typography variant={"body1"}>
                lorem azam this my app in function use
        </Typography>
              <Button color={"warning"} mt={10} startIcon={<CameraAltIcon />}>Submit</Button>
            </Paper>
          </Box>

           {/* box 2nd */}
          
          <Box className={classes.borRoot} borderLeft={5} borderColor="yellow">
            <Paper className={classes.rootPaper}>
              <Typography variant={"h2"}>
                My App
        </Typography>
              <Typography variant={"body1"}>
                lorem azam this my app in function use
        </Typography>
              <Button color={"warning"} mt={10} startIcon={<BackupIcon />}>Submit</Button>
            </Paper>
          </Box>

          {/* box 3rd */}
          <Box className={classes.borRoot} borderLeft={5} borderColor="yellow">
            <Paper className={classes.rootPaper}>
              <Typography variant={"h2"}>
                My App
          </Typography>
              <Typography variant={"body1"}>
                lorem azam this my app in function use
          </Typography>
              <Button color={"warning"} mt={10} startIcon={<SearchIcon />}>Submit</Button>
            </Paper>
      
          </Box>
      
        </Box>
      }
      </div>
  );
}

export default App;
