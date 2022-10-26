import { useState } from "react";

const Counter = () => {
    console.log("counter has rendered")
    //initialize state to track the amount of likes
    const [likesCount, setLikesCount] = useState(0);

    //define an event handler which will update state (when called)
    const handleClick = () => {
        //when this func is called, we need to update state by +1
        setLikesCount(likesCount + 1);
    }
    // Alternatively, instead of defining event handler, could just use an anon function: onClick={() => setCounter(counter + 1)} on the button 

    return (
        <section>
            <p>This page has been liked {likesCount} times!</p>
            <button onClick={ handleClick }>Click for likes!</button>
        </section>
    )
}

export default Counter;