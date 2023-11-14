import { useLocation } from "react-router-dom";
import "../../CSS/SearchResults.css"
// import { useParams } from "react-router-dom";

export default function SearchResults() {
    const location = useLocation();
    const { filteredResults } = location.state || {};
    console.log(filteredResults);
    

    return (
        <div className="result-page">
            <div className="results-container">
            {filteredResults ? (
                 filteredResults.map((result, index) => (
                    <div key={index} className="store-container ">
                        <div key={index} className="store-logo">{result.source}</div>
                        <div className="store-options">
                            <div key={index} className="item-container">
                                <div key={index} className="item">
                                    <ul>
                                        <li><img src={result.thumbnail} alt="Product Thumbnail" /></li>
                                        <li>{result.title}</li>
                                    </ul>
                                </div>
                                <div className="item-price">{result.price}</div>
                                <button>cart</button>
                            </div>
                        </div>
                    </div>
                ))
            ):(
                <div>No results found</div>
            )}
            </div>
        </div>

    )
}