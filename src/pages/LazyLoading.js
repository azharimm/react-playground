import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import { API_KEY } from '../env'

const Lazyloading = (props) => {
    const url =
        `https://api.unsplash.com/photos?client_id=${API_KEY}`;
    const [images, setImages] = useState([]);
    const getImages = async () => {
        const response = await axios.get(url);
        setImages(response.data);
    };
    useEffect(() => {
        getImages();
    }, []);

    if (!images) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="App">
            {images.map((image, index) => {
                return (
                    <LazyLoadImage
						effect="blur"
                        src={image.urls.regular}
                        alt={image.alt_description}
						key={index}
                    />
                );
            })}
        </div>
    )
}

export default Lazyloading
