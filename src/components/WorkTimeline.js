import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
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

export default function WorkTimeline() {
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
            August 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              backgroundColor: 'white',
              border: '0',
              fontSize: '2.5rem',
            }}
          >
            <WorkIcon style={{ color: '#BD7F37FF', fontSize: '2.5rem' }} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{ backgroundColor: '#101820FF' }}
          >
            <Typography variant="h6" component="h1">
              MoPharma Digital Solutions Pvt. Ltd
            </Typography>
            <Typography style={{ color: '#FFFFFF' }}>
              Full Stack Developer | Intern
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
