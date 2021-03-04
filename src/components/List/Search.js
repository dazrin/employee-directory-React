import "./Search.css";

// Search Component; Passing in and defining props; Returns Search-Bar Div
const Search = (props) => {
  return (
    <div className="search-bar">
      <strong className="search-text">Search Employee: </strong> 
      <input 
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        id="search"
        placeholder="Search Employee Name"
      />
    </div>
  )
}

export default Search;