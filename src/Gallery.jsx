
import { useContext } from "react";
import { useQuery } from "react-query";
import { ContextApi } from "./Context";

function Gallery(){
    const {isSearchValue} = useContext(ContextApi);
    const API_KEY = import.meta.env.VITE_API_KEY;

    const {isLoading,error,data} = useQuery(isSearchValue, async () =>{
        const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${isSearchValue}`)
        const data = await res.json();
        return data;
    });

    if(isLoading){
        return(
            <section className="image-container">
                <h1>Loading...</h1>
            </section>
        )
    }

    if(error){
        return(
            <section className="image-container">
                <h1>Error has occurred: {error.message}</h1>
            </section>
        )
    }

    const response = data.results;
 
    return(
        <section className="image-container">
            {response.map((item) =>{
                const url = item.urls.regular;
                return <img src={url} alt={item.alt_description} key={item.id} className="img"/>
            })}
        </section>
    )
};

export default Gallery;