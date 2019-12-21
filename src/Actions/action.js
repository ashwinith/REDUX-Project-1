export const SelectedSongs = (song) =>{
    return{
        type:"Selected_Song", //Here type is nothing but action that we need to perform
        payload:song          // Here payload is nothing but on which we need to perform action
    }
        
    
};