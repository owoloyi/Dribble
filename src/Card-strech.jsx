import React from "react";
import Card from "./Card";
import profileData from "./profileData";

let Numbers = [1, 2, 3, 4]
const timesTwo = Numbers.map(num => {
    return num * 2
})
console.log(timesTwo)

let britishKnights = ["Benedict", "Colin", "Bassett", "Sir Wimbledon"]
const properKnights = britishKnights.map(name => {
    return "Sir "+ name;
})
console.log(properKnights)

export default function CardStrech(){
    return(
        <div className="Card-container">

            { //To write javascript in html
                profileData.map(data => (
                <Card
                    image = {data.image}
                    name = {data.name}
                    job = {data.job}
                    role = {data.role}
                />  
                ))
            }
        </div>
    )
}