import { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import { choices } from "./components/data";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const menu = choices;
  const [newMenu, setNewMenu] = useState(menu);

  useEffect(() => {
   setTimeout(() => {
    setIsLoading(false)
   }, 4000) 
  })
  return (
    <div className="App">
      {
        isLoading ? 
        <Loading />
        : (
          <div className="App">
        <Navbar menu={menu} newMenu={newMenu} setNewMenu={setNewMenu} />
        <Menu newMenu={newMenu} setNewMenu={setNewMenu} />
    </div>
        )
      }
    </div>
  );
}

export default App;
