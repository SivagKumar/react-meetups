import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MeetupItem(props) {

    function handleSubmit(event) {
        event.preventDefault();

        props.onShowDetails(props.meetup.id);

    }

    return (
        <Card sx={{minWidth: props.minWidth}}>
            <CardMedia
                component="img"
                alt={props.meetup.title}
                height={props.imgHeight}
                image={props.meetup.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.meetup.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.meetup.address}
                </Typography>
            </CardContent>

            {props.isShowDetails &&
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {props.meetup.description}
                    </Typography>
                </CardContent>}
            {!props.isShowDetails && <CardActions>
                <Button size="large" onClick={handleSubmit}>Show Details</Button>
            </CardActions>}
        </Card>
    );
}
