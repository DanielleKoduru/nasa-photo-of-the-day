import React from "react";
import CardTitle from "../CardTitle/CardTitle"
import CardExplanation from "../CardExplanation/CardExplanation"
import CardDate from "../CardDate/CardDate"


const Card = (props) => {
    const { photo, explanation, title, date } = props.apod
    return (
        <div>
            <img src={photo} />
            <CardTitle title={title} />
            <CardExplanation explanation={explanation} />
            <CardDate date={date} />
        </div>
    );
};


export default Card;

