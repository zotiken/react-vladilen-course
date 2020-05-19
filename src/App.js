import React from "react";
import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";
import MenuToggle from './components/MenuToggle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Layout>
        <MenuToggle/>
        <Quiz/>
      </Layout>
    </div>
  );
}

export default App;
