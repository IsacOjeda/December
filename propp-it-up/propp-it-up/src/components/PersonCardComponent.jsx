import React, { useState } from 'react';

const PersonCard = (props) => {

    const {firstname} = props;
    const {lastname} = props;
    const {haircolor} = props;
    const{fixage} = props;
    const[age, setAge] = useState(fixage)
    return (
        <>
            <div>
            <p>  {lastname}, {firstname}</p>
            <p>Age : {age} </p>
            <p>Hair Color: {haircolor}</p>
            <button onClick={()=> setAge(age + 1)}>  Birthday Button for {firstname}</button>
            </div>
        </>
    );
}
export default PersonCard;