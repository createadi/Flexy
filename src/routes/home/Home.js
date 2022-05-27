import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Home.css";

function Home() {
  const [projectName, setProjectName] = useState("");
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");

  const flutterArr = ["nodejs", "laravel", "django"];
  const reactArr = ["nodejs", "django", "firebase"];

  function changeProject(event) {
    setProjectName(event.target.value);
  }

  function changeFrontend(event) {
    setFrontend(event.target.value);
  }

  function changeBackend(event) {
    setBackend(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = `https://github.com/createadi/${frontend}-with-${backend}/archive/refs/heads/main.zip`;

    console.log(url);
    window.location.replace(url);
  }

  return (
    <div className="home">
      <div className="brand_container">
        <div className="brand_name">Flexy</div>
        <div className="brand_description">Get started with choice.</div>
      </div>

      <div className="form_container">
        <div className="form_des">Setup your preferred stack.</div>
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

          <button className="createButton" type="submit" onClick={handleSubmit}>
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
