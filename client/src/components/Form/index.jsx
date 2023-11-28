import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
    const [input, setInput] = useState({
        name: "", 
        duration: "", 
        rating: 0, 
        budgetUSD: "",
        producer: {
            name: "",
            fundationDate: ""
        },
        genre: {
            name: ""
        },
        picture: {
            path: "",
            weight: "",
            wide: "",
            height: ""
        },
        actors: []
    });    
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);
    useEffect(() => {

    });
    function validateInput (name, value) {        
        switch (name) {
            case "name": return (!value || value.length > 20) ? setError({ ...error, name: `Name field cannot be null or length greater than 20` }) : setError({ ...error, name: "" })
            case "duration": return (!value) ? setError({ ...error, duration: `Cannot be null` }) : setError({ ...error, duration: "" })
            case "rating": return (!value || value < 1 || value > 5) ? setError({ ...error, rating: `The field must contain a value greater than 0 and less than or equal to 5` }) : setError({ ...error, rating: "" })
            case "budgetUSD": return (!value) ? setError({ ...error, budgetUSD: `Cannot be null` }) : setError({ ...error, budgetUSD: "" })
            // case "producer": return (!value.name || !value.fundationDate) ? setError({ ...error, producer: `The field cannot be null` }) : setError({ ...error, producer: "" })
            default: break;
        }
    }
    function handleChange (event) {        
        setInput({ ...input, [event.target.name]: event.target.value });
        validateInput(event.target.name, event.target.value);
        console.log(input);
    }
    function handleSubmit (event) {
        event.preventDefault();
        setSubmit(true);
        setInput({
            name: "", 
            duration: "", 
            rating: 0, 
            budgetUSD: "",
            producer: {
                name: "",
                fundationDate: ""
            },
            genre: {
                name: ""
            },
            picture: {
                path: "",
                weight: "",
                wide: "",
                height: ""
            },
            actors: []
        });
    }
    return(
        <div>
            <form>
                <h3>Create movie</h3>
                <div>
                    {/* Name */}
                    <label htmlFor = "name">Name: </label>
                    <input id = "name" type = "text" name = "name" value = {input.name} onChange = {handleChange}></input>
                    {error.name ? <p>{error.name}</p> : null}
                    {/* Duration */}
                    <label htmlFor = "duration">Duration: </label>
                    <input id = "duration" type = "text" name = "duration" value = {input.duration} onChange = {handleChange}></input>
                    {error.duration ? <p>{error.duration}</p> : null}
                    {/* Rating */}
                    <label htmlFor = "rating">Rating: </label>
                    <input id = "rating" type = "number" name = "rating" value = {input.rating} onChange = {handleChange}></input>
                    {error.rating ? <p>{error.rating}</p> : null}
                    {/* BudgetUSD */}
                    <label htmlFor = "budgetUSD">Budget USD: </label>
                    <input id = "budgetUSD" type = "text" name = "budgetUSD" value = {input.budgetUSD} onChange = {handleChange}></input>
                    {error.budgetUSD ? <p>{error.budgetUSD}</p> : null}
                    {/* Producer */}
                    <label>Producer Name: </label>
                    <input value = {input.producer.name} onChange = { e => setInput({ ...input, producer: { ...input.producer, name: e.target.value } }) } />
                    {/* Se pierde el valor onChange */}
                    <label>Fundation Date: </label>
                    <input value = {input.producer.fundationDate} onChange = { e => setInput({ ...input, producer: { ...input.producer, fundationDate: e.target.value } }) } />
                </div>
                <div>
                    <button type = "submit" value = {"create"} disabled = { error.name || !input.name || error.duration || !input.duration || error.rating || !input.rating || error.budgetUSD || !input.budgetUSD || error.producer || !input.producer } onClick={handleSubmit}>Create Game</button>
                </div>
            </form>
            {submit ? <h3>Movie successfully created!</h3> : null}
        </div>
    )
};

export default Form;