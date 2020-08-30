import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ fontSize: '2rem', color: 'white' }}
          >
            2013
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              backgroundColor: 'white',
              border: '0',
            }}
          >
            <MenuBookIcon style={{ color: '#BD7F37FF', fontSize: '2.5rem' }} />
          </TimelineDot>
          <TimelineConnector
            style={{
              height: '6em',
              backgroundColor: '#FEE715FF',
              width: '3px',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{ backgroundColor: '#101820FF' }}
          >
            <Typography variant="h6" component="h1">
              High School
            </Typography>
            <Typography style={{ color: '#FFFFFF' }}>
              Board - SSC | Scored - 78.55%
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ fontSize: '2rem', color: 'white' }}
          >
            2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="primary"
            style={{
              backgroundColor: 'white',
              border: '0',
            }}
          >
            <LaptopMacIcon style={{ color: '#BD7F37FF', fontSize: '2.5rem' }} />
          </TimelineDot>
          <TimelineConnector
            style={{
              height: '6em',
              backgroundColor: '#FEE715FF',
              width: '3px',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{ backgroundColor: '#101820FF' }}
          >
            <Typography
              variant="h6"
              component="h1"
              style={{ textAlign: 'center' }}
            >
              Diploma
            </Typography>
            <Typography style={{ color: '#FFFFFF', textAlign: 'center' }}>
              Board - MSBTE | Scored - 74.13 Aggregate
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ fontSize: '2rem', color: 'white' }}
          >
            2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="primary"
            variant="outlined"
            style={{
              backgroundColor: 'white',
              border: '0',
              fontSize: '2.5rem',
            }}
          >
            <SchoolIcon style={{ color: '#BD7F37FF', fontSize: '2.5rem' }} />
          </TimelineDot>
          {/* <TimelineConnector className={classes.secondaryTail} /> */}
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{ backgroundColor: '#101820FF' }}
          >
            <Typography variant="h6" component="h1">
              BE in Computer Engineering
            </Typography>
            <Typography style={{ color: '#FFFFFF' }}>
              University - SPPU | TE's SGPA - 8.48
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
