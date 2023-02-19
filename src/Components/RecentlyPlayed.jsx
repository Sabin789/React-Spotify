
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { addToFavouritesAction, removeFromFavouritesAction,setSong  } from "../redux/actions";
const RecentlyPlayed = () => {
    const dispatch=useDispatch()
    let songs =useSelector((state)=>state.home.results)
    const favourites = useSelector((state)=>state.favourites.list)
    let recent=songs.slice(0,5)
        return (
          <>
          {recent.map((m)=>{
       
             return(
           
             <Col sm={12} md={3} className="col mb-5" key={m.id}>
             <div className="card h-100" style={{position:"relative"}}>

                <img src={m.album.cover_medium} className="card-img-top mt-2 mb-2 px-2" alt="..."/>
               
                <div className="play-btn" onClick={()=>{dispatch(setSong(m))}}>
                   <div className="triangle"></div>
               </div>
               <div className="card-body d-flex flex-column justify-content-center">
           <h5 className="card-title text-white">{m.title}</h5>
         

   
           <span className="card-text text-white" >{m.artist.name}</span>
           {favourites.filter(s=>s.id===m.id).length>0  ? (
       <HeartFill
         color="green"
         size={16}
       
         
         onClick={() =>
           dispatch(removeFromFavouritesAction(m))

         }
       />
     ) : (
       <Heart
         color="green"
         size={16}
  
         onClick={() =>
           dispatch(addToFavouritesAction(m))
         }
       />
     )}
       
         </div>
               </div>
        
        
               </Col>
             )
          })}
        </>
        )
        
}
 
export default RecentlyPlayed;