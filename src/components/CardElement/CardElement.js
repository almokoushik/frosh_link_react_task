import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;



const CardElement = (props) => {
    const {albumId,id,title,url,thumbnailUrl}=props.data;
    const  handleClick  = props.handleClick;
    return (
        <div className="col-xs-12 col-sm-12  col-md-6 col-lg-4  ">
            <Card
                hoverable
                onClick={()=>handleClick(props.data)}
                style={{ width: 400 }}
            >
                <p>"albumId": {albumId}, <br></br>
                "id": {id}, <br></br>
                "title": {title}, <br></br>
                "url": {url}, <br></br>
                "thumbnailUrl": {thumbnailUrl} 
                </p>
            </Card>,
        </div>
    );
};

export default CardElement;