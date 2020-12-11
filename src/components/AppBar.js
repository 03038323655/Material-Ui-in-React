import React, { Component } from 'react';
import {Typography,Paper,Box,Container,Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import ArchiveSharpIcon from '@material-ui/icons/ArchiveSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';

const useStyles = makeStyles((theme)=>({
    root:{
        color:theme.palette.primary.light,
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"space-around",
        
    },
}));

function AppBar () {
    const classes = useStyles();
        return ( 
            <Container maxWidth="xl">
            <Paper component={Box} p={2}>
                <div className={classes.root}>
                <Link href="#">
                <MailIcon  style={{fontSize:30}} />
                </Link>
                <Link href="#">
                <CallIcon style={{fontSize:30}} />
                </Link>
                <Link href="#">
                <ArchiveSharpIcon style={{fontSize:30}} />
                </Link>
                <Link href="#">
                <SendSharpIcon style={{fontSize:30}} />
                </Link>
                </div>
            </Paper>
            </Container>
         );
}
 
export default AppBar;