import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../CSS/SearchResults.css"
// import { useParams } from "react-router-dom";

export default function SearchResults() {
    const [currentPage, setCurrentPage] = useState(0);

    const location = useLocation();
    const { filteredResults } = location.state || {};
    console.log(filteredResults);

    const maxStoresPerPage = 4; 

    //group products by seller:
    const groupBySeller = (products) => {
        const groupedProducts = {};
        products.forEach((product) => {
            const seller = product.source;
            if(!groupedProducts[seller]) {
                groupedProducts[seller] = [];
            }
            groupedProducts[seller].push(product);
        });
        return groupedProducts;
    };

    const groupedProducts = groupBySeller(filteredResults);

    const sellers = Object.keys(groupedProducts);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(sellers.length / maxStoresPerPage));
      };
    
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(sellers.length / maxStoresPerPage)) % Math.ceil(sellers.length / maxStoresPerPage));
    };

    //show "previous" & "next" button when stores are more than 4 
    const showControls = () => sellers.length > maxStoresPerPage;
    

    return (
        <div className="result-page">
            <div className="results-container">
                {sellers.length > 0 ? (
                    <>
                        {showControls() && (
                        <div className="carousel-control prev-button">
                            <button className="prev-button" onClick={handlePrevPage}>Previous</button>
                        </div>    
                    )}
                    <div className="store-carousel">
                        {sellers.slice(currentPage * maxStoresPerPage, (currentPage + 1) * maxStoresPerPage).map((seller, index) => (
                        <div key={index} className="store-container">
                            <div className="store-logo">{seller}</div>
                            <div className="store-options">
                                {groupedProducts[seller].map((product, productIndex) => (
                                    <div key={productIndex} className="item-container">
                                        <div className="item">
                                            <ul>
                                                <li><img src={product.thumbnail} alt="Product Thumbnail" /></li>
                                                <li>{product.title}</li>
                                             </ul>
                                        </div>
                                    <div className="item-price">{product.price}</div>
                                    <button>cart</button>
                                    </div>
                        ))}
                        </div>
                    </div>
                    ))}
                    {sellers.length > maxStoresPerPage && (
                        <div className="carousel-controls">
                        <button onClick={handlePrevPage}>Previous</button>
                        <button onClick={handleNextPage}>Next</button>
                    </div>
                    )}
                </div>
                </>
                ) : (
                <div>No results found</div>
                )}
            </div>
        </div>
  );
            
}


//     {filteredResults ? (
//         Object.keys(groupedProducts).map((seller, index) => (
//           <div key={index} className="store-container">
//             <div className="store-logo">{seller}</div>
//             <div className="store-options">
//               {groupedProducts[seller].map((product, productIndex) => (
//                 <div key={productIndex} className="item-container">
//                   <div className="item">
//                     <ul>
//                       <li><img src={product.thumbnail} alt="Product Thumbnail" /></li>
//                       <li>{product.title}</li>
//                     </ul>
//                   </div>
//                   <div className="item-price">{product.price}</div>
//                   <button>cart</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div>No results found</div>
//       )}
//     </div>
//   </div>
// );