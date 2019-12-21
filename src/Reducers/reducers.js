import {combineReducers} from "redux";

const SongList = () =>{

    return[
        {
            id:"1",
            name:"Back to School",
            artist:"Wailer, Bunny",
            duration:"3:30"
        },
        {
            id:"2",
            name:"Don't Let Go",
            artist:"Orlando, Tony",
            duration:"4:30"
        },
        {
            id:"3",
            name:"Before My Time",
            artist:"Cash, Johnny",
            duration:"3:30"
        },
        {
            id:"4",
            name:"Freedom",
            artist:"Havens, Richie",
            duration:"4:30"
        },
    ];
}

const ListDetails = (song=null,action) =>{  // Here song=null is the initial state 

    switch(action.type){
        case "Selected_Song":
            return action.payload;

            default : 
                return song; // We are returning song as null when first time program loads.

   }

}


// Here we are using combineReducers to combine more than one reducers:
// This is a Reducer
const reducers = combineReducers({songlist:SongList,details:ListDetails}); // Here reducer is providing both the data i.e.
                                                                           // SongList and ListDetails. At the initial stage,
                                                                           // when page loads we get data as entire SongList and Details as null.

export default reducers;
