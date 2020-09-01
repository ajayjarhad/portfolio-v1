import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './timeline.css';

export default function BasicTimeline() {
  return (
    <Timeline className="timeline">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="text">
          <span className="institute">High School(SSC)</span> <br /> SNBP
          International School,Ajmera <br /> 2013 | 78.55%
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="text">
          <span className="institute">Diploma(MSBTE)</span> <br /> Y.B Patil
          Polytechnic,Akurdi <br /> 2017 | 74.13%
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent className="text">
          <span className="institute">BE (SPPU)</span> <br /> Alard College of
          Engineering,Hinjewadi <br /> 2021(expected)
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
