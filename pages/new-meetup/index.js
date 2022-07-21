import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Grid from "@mui/material/Grid";
import {useRouter} from "next/router";
import Head from 'next/head';


function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);
        router.push('/');
    }

    return (
        <>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name='description'
                    content='Add your own meetups and create amazing networking opportunities.'
                />
            </Head>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}>
                <Grid item zeroMinWidth>
                    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
                </Grid>
            </Grid>
        </>
    )
}

export default NewMeetupPage;