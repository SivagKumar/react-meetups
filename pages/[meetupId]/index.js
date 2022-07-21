import Grid from "@mui/material/Grid";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from 'mongodb';
import Head from 'next/head';


function MeetupDetailsPage(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description}/>
            </Head>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}>
                <Grid item zeroMinWidth>
                    <MeetupDetail meetupData={props.meetupData}/>
                </Grid>
            </Grid>
        </>
    )


}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://root:Tno301nQ3nWFIyqO@cluster0.b3pgo.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking', // false will not load page any new dynamic ids added and true will show the page blank till the components are loaded for the first time
        //blocking will keep you in the same page (no blank page) until the new page is fully loaded
        paths: meetups.map((meetup) => ({
            params: {meetupId: meetup._id.toString()},
        })),
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://root:Tno301nQ3nWFIyqO@cluster0.b3pgo.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}


export default MeetupDetailsPage;