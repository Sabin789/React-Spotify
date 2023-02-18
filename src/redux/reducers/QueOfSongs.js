import { GET_HOMEPAGE, SET_CURRENT } from "../actions";


const initialState={
    results:[],
    current:null
}
 const QueOfSongs = (state=initialState,action) => {
    switch(action.type){

        case GET_HOMEPAGE:
        return{
         ...state,
         results:action.payload
        }

       case SET_CURRENT:
        return{
            ...state,
            current:action.payload
        }
        default: return state
    }
 }
  
 export default QueOfSongs;