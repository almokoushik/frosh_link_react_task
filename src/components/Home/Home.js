import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardElement from '../CardElement/CardElement';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const spinner = () => {
    return <CircularProgress disableShrink size="300px" />;
}

const Home = () => {
    const classes = useStyles();
    const [userData,setUserData]=useState([])
    const history=useHistory();
    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.log(err))
    },[])

    const handleClick=(element)=>{
        const data=element
        history.push(`home/elementDetail/${element.id}`)
    }
    

    return (     
            <div className="row m-4 d-flex justify-content-center">
                        {
                            !userData.length ? spinner() : userData.map(singleData => <CardElement handleClick={handleClick} data={singleData} key={singleData.id}></CardElement>)
                        }
                    </div>                 
    );
};

export default Home;