import SearchBar from "../Components/Searches/oldSearchBar";
import CompareCarts from "../Components/CompareCarts";
import "../CSS/Search.css"

export default function Cart() {
    return (
        <div className="page-container">
            <div className="cart-search-bar">
                <SearchBar />
            </div>
            <CompareCarts />
        </div>
    )
}
