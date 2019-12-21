import React from "react";
import {connect} from "react-redux";

const SongDetails =(props)=>{
    if (!props.details){return null}
    return(
        <div className="container" style={{marginTop:"50px"}}>
            <div className="row">
                <div className="col-md-12">
                <div className="card text-white bg-info mb-3" style={{maxwidth: "18rem"}}>
                <div className="card-header"><h4>Song Details:</h4></div>
                <div className="card-body">

                    <p className="card-title">{props.details.name}</p>
                    <p>{props.details.artist}</p>
                    <p>{props.details.duration}</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

        


const mapStateToptops=state=>{
    return{details:state.details};
}

export default connect(mapStateToptops)(SongDetails);