import React from "react";
import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Layout>
        <Quiz/>
      </Layout>
    </div>
  );
}

export default App;
