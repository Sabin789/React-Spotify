import { useEffect } from "react";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import heart from"./assets/suit-heart.svg"
import a from "./assets/shuffle.svg"
import b from "./assets/skip-backward.svg"
import c from "./assets/play-circle-fill.svg"
import d from "./assets/skip-forward.svg"
import e from "./assets/arrow-counterclockwise.svg"
import f from "./assets/playlist.png"
import g from "./assets/pc-display.svg"
import h from "./assets/volume-up.svg"
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { addToFavouritesAction, removeFromFavouritesAction, setSong  } from "../redux/actions";

const Footer = () => {
  const dispatch=useDispatch()
  let que=useSelector((state)=>state.Que.results)
  // let current=useSelector((state)=>state.Que.current)
//   current=que[0]

// const [current,setCurrent]=useState(null)
const current =useSelector((state)=>state.Que.current)

  //  setCurrent(useSelector((state)=> state.Que.results[0]))
  const favourites = useSelector((state)=>state.favourites.list)


 return(
<>
{current ?
<Container fluid className="body playbar">
  <Row>
    <Col className="col-3 song-and-artist-play-bar">
    <img src={current.album.cover_small} id="current-album-cover" alt="alt"/>
    <div className="song-and-artist-play">
        <p className="text-white">{current.title}</p>
        <p className="current-artist-text play-list-text" >{current.artist.name}</p>
    </div>
    { favourites.filter(s=>s.id===current.id).length>0   ? 
        
        <HeartFill
          color="green"
          size={16}
          className="mr-2 my-auto"
          
          onClick={() =>
            dispatch(removeFromFavouritesAction(current))
 
          }
     
        />
      : 
        <Heart
          color="green"
          size={16}
          className="mr-2 my-auto"
          onClick={() =>
            dispatch(addToFavouritesAction(current))
          }
        />
      }</Col>
<div className="col-5 middle-of-play-bar">
    <div className="song-icons d-flex justify-content-center">
        <img src={a} className="play-bar-icons play-bar-icons-big" id="shuffle-icon" alt="alt" />
        <img src={b} className="play-bar-icons play-bar-icons-big play" alt="alt"/>
        <img src={c} className="play-bar-icons play-button" id="play"alt="alt" />
        <img src={d} className="play-bar-icons play-bar-icons-big"alt="alt" />
        <img src={e} className="play-bar-icons play-bar-icons-big"alt="alt"/>
    </div>
    <div className="play-line-div">
        <p>0:00</p>
        <input className="volume-line" type="range" min="0" max="30"  id="volume-line" />

        <p></p>
    </div>
</div>
<div className="col-2 volume align-items-center d-flex right">
    <div>
        <img src={f} className="play-bar-icons" alt="alt"/>
        <img src={g} className="play-bar-icons"alt="alt"/>
        <img src={h} className="play-bar-icons"alt="alt" />
    </div>
    <input className="volume-line" type="range" min="0" max="100"  id="slider" />
    
</div>
</Row>
</Container> 
:<div>Choose A song</div>}
</>

    );

 }
export default Footer;