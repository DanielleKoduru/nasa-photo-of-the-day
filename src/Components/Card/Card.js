import React from "react";
import CardTitle from "../CardTitle/CardTitle"
import CardExplanation from "../CardExplanation/CardExplanation"
import CardDate from "../CardDate/CardDate"
import CardCopyright from "../CardCopyright/CardCopyright"
// import {
//     Card, CardImg, CardText, CardBody, CardLink,
//     CardTitle, CardSubtitle
// } from 'reactstrap';


const Card = (props) => {
    const { photo, explanation, title, date, copyright } = props.apodData
    return (
        <div>
            <CardTitle title={title} />
            <img src={photo} />
            <CardCopyright copyright={copyright} />
            <CardDate date={date} />
            <CardExplanation explanation={explanation} />
        </div>
    );
};


export default Card;

