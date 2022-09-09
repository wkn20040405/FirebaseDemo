import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "../styles/Timeline.css";
import { Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const CustomTimeline = ({title, icon, children}) => {
  return (
    <Timeline className="timeline">
      {/* Item header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{<PersonIcon/>}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {"Information"}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/* Remaining Items */}
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Phone Number : +1 xxx-xxx-xxxx</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Email : xxx@gmail.com</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Twitter : (Might be included)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Perfrred Product categories : (Might be included)</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
