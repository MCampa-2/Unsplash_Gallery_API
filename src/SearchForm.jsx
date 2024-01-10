import { useContext } from "react";
import { ContextApi } from "./Context";

function SearchForm(){
     const {setIsSearchValue} = useContext(ContextApi);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
       setIsSearchValue(searchValue);
    }


    return(
        <section>
        <form className="search-form" onSubmit={handleSubmit}>
            <input  type="text" name="search" className='form-input search-input' placeholder="clouds"></input>
            <button type="submit" className="btn">Search</button>
        </form>
        </section>
    )
};

export default SearchForm;