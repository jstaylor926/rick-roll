import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

interface Props {
    leftText?: string;
    rightText?: string;
}

const ABItem = ({leftText, rightText}: Props) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography>
                    {leftText}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
    )
}

export default ABItem;
<Accordion>
    <AccordionSummary>
        <Typography>Date</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
    </AccordionDetails>
</Accordion>
