import React from "react";
import Tile from "./Tile";
import emojipedia from "../emojipedia";


function CreateTiles(Content) {
  return <Tile 
    key={Content.id}
    icon = {Content.emoji} 
    title = {Content.name} 
    desc = {Content.meaning}
  />

}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(CreateTiles)}
        {/* <Tile icon = {emojipedia[0].emoji} title = {emojipedia[0].name} desc = {emojipedia[0].meaning}/>
        <Tile icon = {emojipedia[1].emoji} title = {emojipedia[1].name} desc = {emojipedia[1].meaning}/>
        <Tile icon = {emojipedia[2].emoji} title = {emojipedia[2].name} desc = {emojipedia[2].meaning}/> */}

        
      </dl>
    </div>
  );
}

export default App;
