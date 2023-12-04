
import { useEffect } from "react";
import "../../CSS/SearchResults.css"

export default function SearchResults({ cheapestOptions, areaMessage }) {
  useEffect(() => {
    console.log('Cheapest options updated:', cheapestOptions);
  }, [cheapestOptions]);

    return (
        <div className="result-page">
            <div className="results-container">
            {Object.keys(cheapestOptions).length > 0 ? (
        Object.keys(cheapestOptions).map((store, index) => (
          <div key={index} className="store-container">
            <div className="store-logo">{store}</div>
            <div className="store-options">
              {cheapestOptions[store].map((option, optionIndex) => (
                <div key={optionIndex} className="item-container">
                  <div className="item">
                    <ul>
                      <li>
                        <img src={option.image} alt="Product Thumbnail" />
                      </li>
                      <li>{option.item}</li>
                    </ul>
                  </div>
                  <div className="item-price">{option.price}</div>
                  <button>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>{areaMessage}</div>
      )}
            </div>
        </div>
  );          
}

