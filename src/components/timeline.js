import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

export default function OppositeContentTimeline() {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography style={{ color: '#FFFFFF', fontWeight: '900' }}>
              2013
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: '#FEE715FF' }} />
            <TimelineConnector style={{ backgroundColor: 'white' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              style={{ textAlign: 'left', fontWeight: '900', color: 'white' }}
            >
              High School (SSC) 78.55%
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography style={{ color: '#FFFFFF', fontWeight: '900' }}>
              2017
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: 'white' }} />
            <TimelineConnector style={{ backgroundColor: 'white' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography style={{ fontWeight: '900', color: 'white' }}>
              Diploma in Computer Engineering (MSBTE) - 74.13%
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography style={{ color: '#FFFFFF', fontWeight: '900' }}>
              2021 (expected)
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: '#FEE715FF' }} />
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              style={{ textAlign: 'left', fontWeight: '900', color: 'white' }}
            >
              BE in Computer Engineering (SPPU)
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </React.Fragment>
  );
}
