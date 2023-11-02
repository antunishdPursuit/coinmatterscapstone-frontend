export default function SearchResults({ resultsArray }) {
    return (
        <div>
            {resultsArray.map((result, index) => (
                <div key={index}>{result.title}</div>
            ))}
        </div>
    )
}