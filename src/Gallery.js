import Picture from "./Picture";

//if you wish to use info from the props object, don't forget to pass it into your func component! 
const Gallery = (props) => {
    console.log("gallery has rendered", props)
    return (
        <section className="gallery">
            <h2>A gallery of pictures</h2>  

            <ul>
                {/* we are going to map through the array of art within the props object */}
                {/* for each object within the array, we'll return a Picture component */}
                {/* and pass down the image and title for that specific object which the Picture component will then render to the page */}

                {/* arrayOfArt lives in the props object */}
                {props.arrayOfArt.map((artObject) => {
                    return (
                        <Picture artInfo={artObject} key={artObject.id} />
                    )
                })}
            </ul>


        </section>
    )
}

export default Gallery;