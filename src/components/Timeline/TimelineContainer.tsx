import * as React from 'react';
import Timeline from '@mui/lab/Timeline';


const TimelineContainer: React.FC = ({children}) => {
    return (
        <Timeline position="alternate">
            {children}
        </Timeline>
    )
}

export default TimelineContainer;
