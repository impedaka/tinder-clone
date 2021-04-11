import React, {useState, useEffect} from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('https://tinder-backend2410.herokuapp.com/tinder/cards');
            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direaction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => { 
                    return(
                    <TinderCard
                    className="swipe"
                    key={CharacterData.name}
                    perventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    <div style={{backgroundImage: `url("${person.imgUrl}")`}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div> 
                    </TinderCard>
                )})}
            </div>
        </div>
    )
}

export default TinderCards;
