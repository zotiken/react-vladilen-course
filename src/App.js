import React,{useState} from "react";
import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";
import MenuToggle from "./components/MenuToggle";
import MenuList from "./components/MenuList";
import classes from "./App.module.scss"
function App() {
let[state,setState] = useState(false)
  const toggleНandler =()=>{
    setState(state = !state);
    console.log('!!!');
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <MenuList state={state} />
      <Layout>
        <MenuToggle toggleНandler={toggleНandler}/>
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
