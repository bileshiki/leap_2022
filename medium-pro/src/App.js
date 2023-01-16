import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";

function App() {

  const headList = [
    {id: 1, title: "Our strory"},
    {id: 2, title: "Membership"},
    {id: 3, title: "Write"},
    {id: 4, title: "Sign in"},
  ];
  const main={
    img: require("./image/m.png")
  }

  

  return (
    <div className="App">
      <header className="container row col-md-12">
        <Header headList={headList}/>
      </header>

      <main>
        <div className="container">
          <Main data={main}/>
        </div>
      </main>

    </div>
  );
}

export default App;
