import React, { Component } from 'react';
import SongList from "../src/Components/songList.components";
import SongDetails from "../src/Components/songDetails";


class App extends Component{
  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <SongList/>
          </div>
          <div className="col-md-6">
          <SongDetails/>
          </div>
        
        </div>
        
      </div>
    );


  }
  
}

export default App;
