import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import API from "../../utils/API";

// Employee List Class Component
class List extends Component {

  // Constructor for class component, passing in props
  constructor(props) {

    // Passing props to parent constructor
    super(props);

    // Declare state object, passing in props
    this.state = {
      search: "",
      results: [],
      all: [],
      toggle: {
        'name' : false,
        'phone' : false,
        'email' : false,
        'dob' : false
      } 
    }

    // State methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // When component renders, run generateEmployee function to call API to receive data
  componentDidMount() {
    this.generateEmployees();
  }

  // Fetch data from API
  // Creating new object for simplification; Define id as index 
  generateEmployees() {

    // Call API; Fetch Request using axios
    API.generate()

    // Return data as object
      .then(res => {

        // Declaring new object using received data;
        // Using .map() method to return each employee's data and set id as the index
        let obj = res.data.results.map((employee, index) => {
          return {
            'name' : employee.name.first + ' ' + employee.name.last,
            'phone' : employee.phone,
            'email' : employee.email,
            'dob' : employee.dob.date.substring(0,10),
            'picture': employee.picture.thumbnail,
            'id' : index
          }

        })
        this.setState({ results: obj, all: obj })
      })
      .catch(err => console.log(err));
  };


  // Event listener to handle and update state on input change; filters out list of employees when searching
  handleInputChange(e){

    // Define event target name & search input
    const name = e.target.name;
    const input = e.target.value;
    
    // Call setState method of state object to update results property in state object
    // Using .filter() method to update state object to only display employees whose name matches input characters
    this.setState({ 
      results: this.state.all.filter(employee => 
        employee.name.toLowerCase().includes(input.toLowerCase()
        )),
      [name]: input
    });
  };

  // Sorting results in ascending or descending order on click of table header
  // If sorted in a certain order, sort in the opposite order
  handleClick(id) {

    // Define employees as all employees being displayed in current state
    const employees = [...this.state.results];

    // Define toggle as current value of toggle in state
    const toggle = {...this.state.toggle}

    // Pass in id of clicked element and set it to the opposite value
    toggle[id] = !toggle[id]

    // Using .sort() method to return results in either ascending or descending order based on id
    employees.sort(( a, b ) =>{

      if(toggle[id]) return (a[id] > b[id]) ? 1 : -1;
      else return (a[id] < b[id]) ? 1 : -1;
    })

    // Filter search results
    const results = employees.filter(employee =>
      employee.name.toLowerCase().includes(this.state.search.toLowerCase()));
    
    // Update state
    this.setState({ 
      employees,
      toggle,
      results
    });
  };

  // Render component;
      // Returns Div with search & table components
      // Search state passed in as a prop using state value
      // Input handler event listener passed in as prop into search component
      // Pass in results & toggle as props using state value
      // Click handler event listener passed in as prop into table component
  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table 
        results={this.state.results} 
        handleClick={this.handleClick}
        toggle={this.state.toggle}
        />
      </div>
    );
  }
}

// Export List Component
export default List;
