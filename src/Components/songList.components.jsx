import React, { Component } from "react";

// Note : We cannot directly fetch data that reducers/store return. For getting reducers data we need to connect our class to 
//redux. There is no way to directly interact with the store.
import {connect} from "react-redux"; // This is a high level method that helps us to connect React component to redux store.

import {SelectedSongs} from "../Actions/action";

class SongList extends Component{

    render(){

        return(
            <div className="container">
                <div className="row">
                    
                        <h1> Song List:</h1>
                        {
                            this.props.list.map(data=>(
                                
                                <div className="col-md-12" key={data.id}>
                                    <div className="card" style={{width:"18rem"}}>
                                    <div className="card-body">
                                    <h3 className="card-title">{data.name}</h3>
                                    <p className="card-text">{data.duration}</p>
                                    <p>{data.artist}</p>
                                    
                                    <button type="button" className="btn btn-block btn-danger" onClick={() => this.props.SelectedSongs(data)}>View Details</button>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                
            </div>
        )
    }
}

const mapStateToprops = state =>{ // It acts like a dispatcher. Here we are mapping state value through props. 
                                  //  Reducer is givin us value in the form of state but when we will 
                                  // bind data it will be in the form of props. Here we are returning state from reducer to mapStateToprops
                                 // In state we are getting two thing inside state i.e. SongList and ListDetails
        return {list:state.songlist}; // This list is nothing but a property we are getting through state. 
                                      // And here in component we will be using it as props.
    //console.log(state);
    //return state;
}

export default connect(mapStateToprops,{SelectedSongs})(SongList); // here mapStateToprops automatically goes to the reducer and 
                                                  //  giving us the data from reducer
//The connect() function connects a React component to a Redux store. SongList is a react component and in mapStateToprops
// we are accessing data in the store
//It provides its connected component with the pieces of the data it needs from the store,
//and the functions it can use to dispatch actions to the store.

// SelectedSongs is an action. If there are more than one action methods then we need to call them in the form of object
