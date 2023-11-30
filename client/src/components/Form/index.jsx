import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postMovies } from "../../redux/features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();    
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
            high: ""
        },
        actors: []
    });    
    const [actors, setActors] = useState([]);
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);
    // const dataServer = useSelector(message);
    useEffect(() => {
        validateActors(input.actors);        
    }, [input, validateActors]);
    function validateInput (name, value) {
        const expDate = /\d{2,4}\/\d{1,2}\/\d{1,2}/
        switch (name) {
            case "name": return (!value || value.length > 20) ? setError({ ...error, name: `Name field cannot be null or length greater than 20` }) : setError({ ...error, name: "" })
            case "duration": return (!value) ? setError({ ...error, duration: `Cannot be null` }) : setError({ ...error, duration: "" })
            case "rating": return (!value || value < 1 || value > 5) ? setError({ ...error, rating: `The field must contain a value greater than 0 and less than or equal to 5` }) : setError({ ...error, rating: "" })
            case "budgetUSD": return (!value) ? setError({ ...error, budgetUSD: `Cannot be null` }) : setError({ ...error, budgetUSD: "" })
            case "producerName": return (!value) ? setError({ ...error, producerName: `The field cannot be null` }) : setError({ ...error, producerName: "" })
            case "fundationDate": return (!value || !expDate.test(value)) ? setError({ ...error, fundationDate: `The field cannot be null or date is incorrect` }) : setError({ ...error, fundationDate: "" })
            case "genreName": return (!value) ? setError({ ...error, genreName: `The field cannot be null` }) : setError({ ...error, genreName: "" })
            case "picturePath": return (!value) ? setError({ ...error, picturePath: `The field cannot be null` }) : setError({ ...error, picturePath: "" })
            case "pictureWeight": return (!value) ? setError({ ...error, pictureWeight: `The field cannot be null` }) : setError({ ...error, pictureWeight: "" })
            case "pictureWide": return (!value) ? setError({ ...error, pictureWide: `The field cannot be null` }) : setError({ ...error, pictureWide: "" })
            case "pictureHigh": return (!value) ? setError({ ...error, pictureHigh: `The field cannot be null` }) : setError({ ...error, pictureHigh: "" })
            case "nameActor": return (!value || value.length > 20) ? setError({ ...error, nameActor: `Name field cannot be null or length greater than 20` }) : setError({ ...error, nameActor: "" })
            case "lastNameActor": return (!value || value.length > 20) ? setError({ ...error, lastNameActor: `Name field cannot be null or length greater than 20` }) : setError({ ...error, lastNameActor: "" })
            case "birthday": return (!value || !expDate.test(value)) ? setError({ ...error, birthday: `The field cannot be null or date is incorrect` }) : setError({ ...error, birthday: "" })
            default: break;
        }
    }
    function validateActors (array) {
        if (array.length === 0) {
            return setError({ ...error, actors: `You must create an actor` });
        }
        else {
            return setError({ ...error, actors: "" });
        }
    }
    function handleChange (event) {
        if (event.target.name === "producerName") {
            setInput({ ...input, producer: { ...input.producer, name: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else if (event.target.name === "fundationDate") {
            setInput({ ...input, producer: { ...input.producer, fundationDate: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else if (event.target.name === "genreName") {
            setInput({ ...input, genre: { ...input.genre, name: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else if (event.target.name === "picturePath") {
            setInput({ ...input, picture: { ...input.picture, path: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else if (event.target.name === "pictureWeight") {
            setInput({ ...input, picture: { ...input.picture, weight: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else if (event.target.name === "pictureWide") {
            setInput({ ...input, picture: { ...input.picture, wide: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else if (event.target.name === "pictureHigh") {
            setInput({ ...input, picture: { ...input.picture, high: event.target.value } })
            validateInput(event.target.name, event.target.value);
        }
        else {
            setInput({ ...input, [event.target.name]: event.target.value });
            validateInput(event.target.name, event.target.value);            
        }
    }
    function handleChangeActors (event, index) {
        if (event.target.name === "nameActor") {
            actors[index].name = event.target.value;
            setActors([...actors]);
            validateInput(event.target.name, event.target.value);
            setInput({...input, actors: [...actors]});
        }
        if (event.target.name === "lastNameActor") {
            actors[index].lastName = event.target.value;
            validateInput(event.target.name, event.target.value);
            setActors([...actors]);
        }
        if (event.target.name === "birthday") {
            actors[index].birthday = event.target.value;
            validateInput(event.target.name, event.target.value);
            setActors([...actors]);
        }        
    }
    function onClickPlusButton (event) {
        event.preventDefault();        
        setActors([...actors, {
            name: "",
            lastName: "",
            birthday: ""
        }]);        
    }
    function onClickMinusButton (position) {        
        setActors([...actors.filter((_, i) => i !== position)]);
    }
    function handleSubmit (event) {
        event.preventDefault();
        setSubmit(true);
        console.log("Input: ", input);
        dispatch(postMovies(input));        
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
                high: ""
            },
            actors: []
        });
        setTimeout(() => navigate("/"), 5000);
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
                    <input name = "producerName" value = {input.producer.name} onChange = { handleChange } />
                    {error.producerName ? <p>{error.producerName}</p> : null}
                    <label>Fundation Date: </label>
                    <input name = "fundationDate" value = {input.producer.fundationDate} onChange = { handleChange } placeholder = "year/month/day"/>
                    {error.fundationDate ? <p>{error.fundationDate}</p> : null}
                    {/* Genre */}
                    <label>Genre: </label>
                    <input name = "genreName" value = {input.genre.name} onChange = { handleChange } />
                    {error.genreName ? <p>{error.genreName}</p> : null}
                    {/* Picture */}
                    <label>Picture path: </label>
                    <input name = "picturePath" value = {input.picture.path} type = "text" onChange = { handleChange } />
                    {error.picturePath ? <p>{error.picturePath}</p> : null}
                    <label>Picture weight: </label>
                    <input name = "pictureWeight" value = {input.picture.weight} type = "text" onChange = { handleChange } />
                    {error.pictureWeight ? <p>{error.pictureWeight}</p> : null}
                    <label>Picture wide: </label>
                    <input name = "pictureWide" value = {input.picture.wide} type = "text" onChange = { handleChange } />
                    {error.pictureWide ? <p>{error.pictureWide}</p> : null}
                    <label>Picture high: </label>
                    <input name = "pictureHigh" value = {input.picture.high} type = "text" onChange = { handleChange } />
                    {error.pictureHigh ? <p>{error.pictureHigh}</p> : null}
                    {/* Actors */}                    
                    <h4>Actors: <button onClick = {(e, i) => onClickPlusButton(e, i)}>+</button></h4>
                </div>
                <div>
                    {
                        actors.map((actor, index) => (
                            <div key = {index}>
                                <label htmlFor = {`nameActor-${index + 1}`}>Name actor: </label>
                                <input type = "text" name = "nameActor" id = {`nameActor-${index + 1}`} value = {actor.name} onChange = {(e) => handleChangeActors(e, index)}/>
                                <label htmlFor = {`lastNameActor-${index + 1}`}>Lastname actor: </label>
                                <input type = "text" name = "lastNameActor" id = {`lastNameActor-${index + 1}`} value = {actor.lastName} onChange = {(e) => handleChangeActors(e, index)}/>
                                <label htmlFor = {`birthday-${index + 1}`}>Birthday: </label>
                                <input type = "text" name = "birthday" id = {`birthday-${index + 1}`} placeholder = "year/month/day" value = {actor.birthday} onChange = {(e) => handleChangeActors(e, index)}/>
                                {error.birthday ? <p>{error.birthday}</p> : null}
                                <button onClick = {() => onClickMinusButton(index)}>X</button>
                                {error.actors ? <p>{error.actors}</p> : null}
                            </div>                            
                        ))
                    }
                </div>
                <div>
                    <button type = "submit" value = {"create"} disabled = { error.name || !input.name || error.duration || !input.duration || error.rating || !input.rating || error.budgetUSD || !input.budgetUSD || error.producerName || !input.producer.name || error.fundationDate || !input.producer.fundationDate || error.genreName || !input.genre.name || error.picturePath || !input.picture.path || error.pictureWeight || !input.picture.weight || error.pictureWide || !input.picture.wide || error.pictureHigh || !input.picture.high || error.actors || error.nameActor || error.lastNameActor || error.birthday } onClick={handleSubmit}>Create Game</button>
                </div>                
            </form>
            {submit ? <p>The movie was successfully created!</p> : null }
        </div>
    )    
};

export default Form;