import React from "react";

const PersonCard = (props) => {
    const {firstname} = props;
    const {lastname} = props;
    const {age} = props;
    const {haircolor} = props;

    return (
        <>
            <div>
            <p>  {lastname}, {firstname}</p>
            <p>Age :{age} </p>
            <p>Hair Color: {haircolor}</p>
            </div>
        </>
    );
}
export default PersonCard;