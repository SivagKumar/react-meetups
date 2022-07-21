import Stack from '@mui/material/Stack';
import MeetupItem from './MeetupItem';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {useRouter} from "next/router";


function MeetupList(props) {
    const router = useRouter();

    function showDetailsHandler(meetupId) {
        router.push('/' + meetupId.toString())
    }

    return (
        <Box sx={{ width: '100%', height: '100%', marginTop: 2, marginBottom:2}}>
            <Toolbar/>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {props.meetups.map((meetup) => (
                    <MeetupItem minWidth='40%' imgHeight='250' key={meetup.id} meetup={meetup} onShowDetails={showDetailsHandler} />
                ))}
            </Stack>
        </Box>

    )
}

export default MeetupList;