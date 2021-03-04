import React from "react";
import Header from "./components/Header";
import List from "./components/List";

// App Component; Returns a div with the Header and Main component inside
const App = () => {
  return (
    <div>
      <Header />
      <List />
    </div>
  )
}

export default App;
