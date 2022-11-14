import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getGiftsPromes = async () =>{
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getGiftsPromes();
    }, []);

    return {
        images:images,
        isLoading
    }
}
