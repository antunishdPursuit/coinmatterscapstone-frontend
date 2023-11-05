

export default function SearchResults({ resultsArray }) {
    return (
        <div>
            <h1>API Results Example</h1>
           
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