import React from "react";
import UserList from "./components/userlist";


const App = () => {
  return (
    <div
      className="App"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <UserList />
    </div>
  );
};

export default App;
