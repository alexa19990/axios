import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import { useState } from "react";
import axios from "axios";
import classes from './modules/App.module.scss'


const App = () => {
  const [value, setValue] = useState("");

  const clickHandler = () => {
    axios.get(`https://api.github.com/users/${value}`).then((res) => {
      setValue(res.data);
    });
  };


  return (
    <div className={classes['app-container']}>
      <Header />
      <SearchBar
        clickHandler={clickHandler}
        setValue={setValue}
        value={value}
      />
      <Profile value={value} />
    </div>
  );
};

export default App;
