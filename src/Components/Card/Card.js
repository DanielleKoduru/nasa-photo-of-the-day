import React from "react";
import CardTitle from "../CardTitle/CardTitle"
import CardExplanation from "../CardExplanation/CardExplanation"
import CardDate from "../CardDate/CardDate"
import CardCopyright from "../CardCopyright/CardCopyright"


const Card = (props) => {
    const { photo, explanation, title, date, copyright } = props.apodData
    return (
        <div>
            <img src={photo} />
            <CardTitle title={title} />
            <CardExplanation explanation={explanation} />
            <CardDate date={date} />
            <CardCopyright copyright={copyright} />
        </div>
    );
};


export default Card;

