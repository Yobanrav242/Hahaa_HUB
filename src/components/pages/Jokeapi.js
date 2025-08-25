import React, { useContext, useEffect, useState } from 'react'
import "../../assets/css/Jokesapi.css"
import {myContext } from "../../App"

function Jokeapi() {
    const {contextState} = useContext(myContext); 
    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const url = `${process.env.REACT_APP_API_URL}/joke/Any?amount=4`;
    // fetching jokes
    const fetchjokes = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url, { method: "Get" });
            const data = await response.json();
            setJokes(data.jokes);
            
        }
        catch (e) {
            console.log("Error Fetching Jokes: ", e);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchjokes()
    }, [])

    return (
        <div className='containers '>
            <div className='details'>
                <h1>For You {contextState.name}</h1>
                <button
                    onClick={fetchjokes}
                >
                    Get New Jokes
                </button>
        
                        <div className='card  '>
                            {
                                isLoading ? (
                                    <p>Loading Jokes...</p>
                                ) : (
                                    <ul>
                                        {jokes.map((joke, index) => (
                                            <li key={index}>
                                                {joke.type === "single" ? (
                                                    <p className='single-joke'>{joke.joke}</p>
                                                    
                                                ) : (
                                                    <>
                                                        <p className='question'>{joke.setup}</p>
                                                        <p className='answer'>{joke.delivery}</p>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    
            </div>

        </div>
    )
}

export default Jokeapi