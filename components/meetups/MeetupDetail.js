import MeetupItem from "./MeetupItem";
import Box from '@mui/material/Box';


function MeetupDetail(props) {
    return (
        <Box
            component="form"
            sx={{
                maxWidth: '100%',
                padding: 2
            }}>
            <MeetupItem minWidth='100%' imgHeight='500' isShowDetails={true} key={props.meetupData.id} meetup={props.meetupData}/>
        </Box>
    );


}

export default MeetupDetail;