import React from "react";
import "../../styles/card.css";

const Card = (props) => {    
    return (
        <div className = "card">
            <h4>Name: {props.props.name}</h4>
            <p>Rating: {props.props.rating}</p>
            <p>Budget: {props.props.budgetUSD}</p>
            <p>Producer: {props.props.producer.name}</p>
            <p>Genre: {props.props.genre.name}</p>
            <img src = { props.props.picture.path } alt = "movie"></img>
            {
                props.props.actors ? 
                <>
                    {
                        props.props.actors.map((actor, index) => (
                            <div key = {index}>
                                <p>Actor: {actor.name + " " + actor.lastName}</p>
                            </div>
                        ))
                    }
                </> : <p>No actors...</p>
            }            
        </div>
    )
};

export default Card;