
import { ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,START} from "../actions"


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
      
          list: state.list.filter((fav) => fav !== action.payload),
    
      }
    //   case START:
    //     return{
    //       ...state,
    //  list:action.payload
    //     }
    default:
      return state
  }
}

export default FavouriteReducer