// import the Hooks we need to accomplish our logic! 
import axios from "axios";
import { useState, useEffect } from "react";
//import Gallery component
import Gallery from "./Gallery";

const ArtWall = () => {
    console.log("artwall has been rendered")

    //initialize state to keep track of whether the Gallery is visible or not

    const [isGalleryVisible, setIsGalleryVIsible] = useState(false);
    //Aside: lots of variables start with 'is' in react apparently

    //initialize a state for the API data from Rijksmuseum (AKA our beautiful art to be displayed)
    const [art, setArt] = useState([]);

    // Call the Rijksmuseum API once the component has been mounted to the DOM 
        // AKA run a side effect
    useEffect(() => {
        //This is where you define what the side effect is and how it will run
        console.log("side effect is running")
        const apiKey = "qvpKwWJh";

        // using axios let's make a request to our API
        axios({
            // method: "GET";
            // ^this is already the default value so we don't NEED it
            url: 'https://www.rijksmuseum.nl/api/en/collection',
            // add our URL parameters through this object
            params: {
                key: apiKey,
                imgonly: true,
                toppieces: true
            },
            }).then((art) => {

                // once the data is returned from the API, let's save it wihin state! (we're going to call the state updater function which we already set)
                    //use dot notation to ONLY save the array of art objects within state
                setArt(art.data.artObjects)
            })
        //if you only wish to run a side effect ONCE upon the component's initial mount to the DOM, use an EMPTY dependency array
        }, []);

    //define an event handler which updates the isGalleryVIsible state to the opposite boolean value
    const handleClick = () => {
        setIsGalleryVIsible(!isGalleryVisible);
    }
    return (
        <section>
            <h2>
                {
                    isGalleryVisible
                        ? 'Wow this is a beauteous gallery wall!'
                        : 'Ok but would you like to actually see some art??'
                }
            </h2>
            <button onClick={(handleClick)}>
             {
                    isGalleryVisible
                        ? "i've seen enough! pls hide"
                        : "click for more ART!"
                }
            </button>
            {/* only show the Gallery Component if the isGalleryVisible state is true */}
            {
                isGalleryVisible
                    // pass the array of art that lives within the art state variable from this component down to the Gallery component
                    ? <Gallery arrayOfArt={art} />
                    : null
            }
        </section>
    )
}

export default ArtWall;