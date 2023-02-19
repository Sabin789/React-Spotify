import { Col } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { addToFavouritesAction, removeFromFavouritesAction,setSong  } from "../redux/actions";
const GoodMorning = () => {
  
    const dispatch=useDispatch()
    let songs =useSelector((state)=>state.home.results)
    const favourites = useSelector((state)=>state.favourites.list)
    let morning=songs.slice(5,11)
    // const isFav=true
    

    return (
       <>
       
         {morning.map((m,i)=>{

                        //  console.log(favourites.includes(m))
                        //  console.log(favourites)
                     
                         
            return (
                
     
          
            <Col sm={12} md={4}  className="media mb-4" key={m.id} style={{position:"relative"}}  >
        <img src={m.album.cover_small} style={{height:"80px"}} alt="..."/>
       
        <div className="play-btn"onClick={()=>{dispatch(setSong(m))}}>     
           <div className="triangle"></div>
           
    </div>

        <div className="media-body">
    <h5 className="mt-3 mb-3 ml-1">{m.title}</h5>
    { favourites.filter(s=>s.id===m.id).length>0 ? 
              <HeartFill
                color="green"
                size={16}
                className="mr-2 my-auto"
                
                onClick={() =>
                  dispatch(removeFromFavouritesAction(m))
       
                }
              />
            : 
              <Heart
                color="green"
                size={16}
                className="mr-2 my-auto"
                onClick={() =>
                  dispatch(addToFavouritesAction(m))
                }
              />
            }
            </div>
            
       
            </Col>
           
  
            )
           
         })}
         
       </>
       
     );
}
 
export default GoodMorning;