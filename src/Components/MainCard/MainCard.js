import { findByLabelText } from "@testing-library/dom";
import React from "react";
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardImg } from 'reactstrap';




const MainCard = (props) => {
    const { photo, explanation, header, date, copyright } = props.apodData

    const imgStyle = {
        maxHeight: 728,
        maxWidth: 628,
    }

    return (
        <div>
            <div>
                <Card body inverse color="secondary">
                    <CardBody>
                        <h1>NASA's Astronomy Picture of the Day</h1>
                        <CardTitle>{header}</CardTitle>
                        <CardSubtitle>{copyright}</CardSubtitle>
                        <CardSubtitle>{date}</CardSubtitle>
                    </CardBody>
                    <CardImg className="rounded mx-auto d-block" style={imgStyle} src={photo} alt="NASA Photo of the Day" />
                    <CardBody>
                        <CardText className="m-auto">{explanation}</CardText>
                        <CardLink href="https://github.com/DanielleKoduru">Find me on Github</CardLink>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default MainCard;

