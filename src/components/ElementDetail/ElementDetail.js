import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
});

const ElementDetail = () => {
    const {id}=useParams()
    const [elementData,setElementData]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res=>res.json())
        .then(data => setElementData(data))
        .catch(err=>console.log(err))

    })
    const classes = useStyles();
    return (
            <div className="d-flex justify-content-center m-5">
           <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="250"
                            image={elementData.url}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className="text-center">
                                {elementData.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    };
export default ElementDetail;