import React, { useState } from "react";
import "./Home.css";
import Popup from './Popup';


function Home() {
  const [projectName, setProjectName] = useState("");
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");

  const flutterArr = ["Nodejs", "Laravel", "Django"];
  const reactArr = ["Nodejs", "Django", "Firebase"];

  function changeProject(event) {
    setProjectName(event.target.value);
  }

  function changeFrontend(event) {
    setFrontend(event.target.value);
  }

  function changeBackend(event) {
    setBackend(event.target.value);
  }
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
    console.log("Modal reached")
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = `https://github.com/createadi/${frontend}-with-${backend}/archive/refs/heads/main.zip`;

    console.log(url);
   
    window.location.replace(url);
    togglePopup()
  }

 
 


  return (
    <div className="home">
      <div className="brand_container">
        <div className="brand_name">Flexy</div>
        <div className="brand_description">Lets get STARTED...</div>
      </div>

      <div className="form_container">
        <div className="form_des">Setup your preferred stack</div>
        <form className="formFields" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="projectName"
            id=""
            value={projectName}
            placeholder="Project Name"
            onChange={changeProject}
          />
          <select name="frontend" id="" onChange={changeFrontend}>
            <option value="" disabled selected>
              Select your Frontend 
            </option>
            <option value="flutter">Flutter</option>
            <option value="react">React</option>
          </select>

          <select name="backend" id="" onChange={changeBackend}>
            <option value="" disabled selected>
              Select your Backend
            </option>
            {frontend === "flutter"
              ? flutterArr.map((item) => <option value={item}>{item}</option>)
              : reactArr.map((item) => <option value={item}>{item}</option>)}
          </select>

          {/* <button className="createButton" type="submit" onClick={togglePopup}>
            Create Project
          </button> */}
          <div>
            <input
              type="button"
              value="Create Project 🎁"
              onClick={togglePopup}
            />
            {/* <p>Thank You!</p> */}
            {isOpen && <Popup
              content={<>
                <h2>Thank You!</h2>
                <br></br>
                <p><h3>Please follow the steps given in Readme file.</h3>
                
                  <p>
                  <img src="https://img.icons8.com/office/48/000000/react.png" alt='react'/> 
                  <img src="https://img.icons8.com/color/48/000000/flutter.png" alt='flutter'/> 
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='nodeJs'/> 
                  <img src="https://img.icons8.com/color/48/000000/django.png" alt='django'/>
                  <img src="https://img.icons8.com/color/48/000000/google-firebase-console.png" alt="firebase"/>
                  <img src="https://img.icons8.com/fluency/48/000000/laravel.png" alt='laravel'/> 
                  </p>
                </p>
                <input
              type="button"
              value="Download Project 🎁"
              onClick={handleSubmit}
              
            />
              </>}
              handleClose={togglePopup}
            />}
          </div>
          

        </form>
        <div>
        <p>
          <h2>Supported frameworks:</h2>           
              <img style={{padding: '12px 12px'}} src="https://img.icons8.com/officel/80/000000/react.png" alt='react'/> 
              <img style={{padding: '12px 12px'}}  src="https://img.icons8.com/color/80/000000/flutter.png" alt='flutter'/> 
              <img style={{padding: '12px 12px'}}  src="https://img.icons8.com/color/80/000000/nodejs.png" alt='nodeJs'/> 
              <img style={{padding: '12px 12px'}}  src="https://img.icons8.com/color/80/000000/django.png" alt='django'/>
              <img style={{padding: '12px 12px'}}  src="https://img.icons8.com/color/80/000000/google-firebase-console.png" alt="firebase"/>
              <img style={{padding: '12px 12px'}}  src="https://img.icons8.com/fluency/80/000000/laravel.png" alt='laravel'/> 
            </p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
