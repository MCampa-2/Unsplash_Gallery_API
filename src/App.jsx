import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";


const App = () => {

  

  return(
    <>
        <ThemeToggle />
        <h3 style={{textAlign: "center"}}>Search Any Photo</h3>
        <SearchForm />
        <Gallery />
    </>
  )
};
export default App;

