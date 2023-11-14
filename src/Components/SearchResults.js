

export default function SearchResults({ resultsArray, oneUserData }) {
    return (
        <div>
            <h1>{oneUserData.username ? "Hi User, " + oneUserData.username : "API Results" }</h1>
           
            <div>
            {resultsArray ? (
                 resultsArray.map((result, index) => (
                    <div key={index}>{result.title}</div>
                ))
            ): (
                <div>No results found</div>
            )}
            </div>
        </div>

    )
}