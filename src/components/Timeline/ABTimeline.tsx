import * as React from 'react';
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'
import {obvData, dateString} from "./rickResults";

const ABTimeline = () => {
    return (
        <>
            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>Date</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                           <ul>
                               {obvData.map((item: any, i: any) => (
                                    <li key={i}>{item}</li>
                               ))}
                           </ul>
                            </AccordionDetails>
                        </Accordion>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>Date</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    {obvData.map((item: any, i: any) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography>
                            Check
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Check two
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default ABTimeline;
