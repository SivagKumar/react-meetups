import {useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);

    }

    return (
        <Box
            component="form"
            sx={{
                width: 600,
                maxWidth: '100%',
            }}>
            <Paper sx={{p: 2}} elevation={6}>
                <TextField fullWidth label="Meetup Title" id="meetup-title" sx={{mb: 1}} inputRef={titleInputRef}/>
                <TextField fullWidth label="Meetup Image" id="meetup-image" sx={{mb: 1}} inputRef={imageInputRef}/>
                <TextField fullWidth label="Address" id="address" sx={{mb: 1}} inputRef={addressInputRef}/>
                <TextField fullWidth multiline label="Description" id="description" rows={10} sx={{mb: 1}}
                           inputRef={descriptionInputRef}/>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button variant="contained" onClick={handleSubmit}>Add Meetup</Button>
                </Box>
            </Paper>

        </Box>
    )
}