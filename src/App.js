import './App.css';
import profilePic from './img/profile-pic.jpg';
import Bttns from './components/Bttns.js';
import Like from './components/like-bttn.js';
import Twitter from './components/twitter-bttn.js';
import { useState } from 'react';

function App() {

  const [skills, setSkills] = useState("Hi!")

  const myName = () =>{
    setSkills("my name is ilyanna")
  }

  const mySkill = () =>{
    setSkills("front end development")
  }

return (
  <div className="App">
    <div className="box-1">
      <div className="profile-pic">
          <img src={profilePic} alt="my profile pic"/>
      </div>
      <Bttns tech ={skills}/>
        <div className="buttons">
          <button onClick={myName}>Name</button>
          <button onClick={mySkill}>Skills</button>
        </div>
      <Like/>
      <Twitter/>
    </div>

  </div>
);
}
  
export default App;
