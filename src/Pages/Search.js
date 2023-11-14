import SearchBar from "../Components/Searches/SearchBar";
import logo from "../Images/pig-background.png"
import "../CSS/Search.css";


export default function Search() {
    return (
        <div className="search-page-container">
            <div>
                <SearchBar />
            </div>
            <div className="background-img-container">
                <img src={logo} alt="pig logo" />
            </div>
        </div>
    );
};