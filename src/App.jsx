import React, {Component} from "react";
import Welcome from "./components/Welcome";
import Support from "./components/Support";



function App() {
  const name = 'Star Gazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="stargazes group" />
          <Welcome name="Star Gazers"/>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <Support/>
        </hgroup>
      </article>
    </div>

  )
}
export default App
