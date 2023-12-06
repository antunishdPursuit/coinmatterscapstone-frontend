import { useEffect } from "react";
import searchResults from "../../CSS/SearchResults.module.css";

export default function SearchResults({ cheapestOptions, areaMessage }) {
  useEffect(() => {
    console.log('Cheapest options updated:', cheapestOptions);
  }, [cheapestOptions]);

    return (
        <div className={searchResults["result-page"]}>
            <div className={searchResults["results-container"]}>
            {Object.keys(cheapestOptions).length > 0 ? (
        Object.keys(cheapestOptions).map((store, index) => (
          <div key={index} className={searchResults["store-container"]}>
            <div className={searchResults["store-logo"]}>{store}</div>
            <div className={searchResults["store-results"]}>
              {cheapestOptions[store].map((option, optionIndex) => (
                <div key={optionIndex} className={searchResults["item-container"]}>
                  <div className={searchResults["item"]}>
                    <ul>
                      <li className={option.className}>
                        <img
                          style={option.className === 'unavailable-item' ? { width: '80px'} : {}}
                          src={option.image} 
                          alt="Product Thumbnail"
                        />
                      </li>
                      <li><p>{option.item}</p></li>
                    </ul>
                  </div>
                  <div className={searchResults["item-price"]}>{option.price}</div>
                </div>
              ))}
            </div>
            <div className={searchResults["total"]}>

            </div>
          </div>
        ))
      ) : (
        <div className={searchResults["empty-results"]}>
          <img 
            src="http://localhost:3000/static/media/navLogo.34faa592b401eec94f17.png" 
            alt="logo" />
          <p>{areaMessage}</p>
        </div>
      )}
            </div>
        </div>
  );          
}

