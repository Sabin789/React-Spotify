
import { ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,START} from "../actions"
import undoable from 'redux-undo'

const initialState = {
  
    list: [],
    isLoading:false

}

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
 
        
          list: [...state.list, action.payload],
     
      }
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
      
          list: state.list.filter((fav) => fav.id !== action.payload.id),
    
      }
  
    default:
      return state
  }
}
const undoableFave = undoable(FavouriteReducer)
export default FavouriteReducer
// export default undoableFave