import { GET_HOMEPAGE,START } from "../actions";


const initialState={
    results:[]
}
 const HomeReducer = (state=initialState,action) => {
    switch(action.type){

        case GET_HOMEPAGE:
        return{
         ...state,
         results:action.payload
        }
        case START:
            return{
              ...state,
         results:action.payload
            }

        default: return state
    }
 }
  
 export default HomeReducer;