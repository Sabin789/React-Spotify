import { Button, Container} from "react-bootstrap";
import logo from "./assets/logo-spotify.png"
import { useSelector,useDispatch } from "react-redux";
import { setSong } from "../redux/actions";
import a from "./assets/search.svg"
import b from "./assets/library.png" 
import c from "./assets/plus-square.svg"
import { ActionCreators } from "redux-undo";
import store from "../redux/store";
const SideBar = () => {

    const favourites = useSelector((state)=>state.favourites.list)
    const dispatch = useDispatch()

    return ( 
        <Container fluid className="side">
    <aside className="side-wrapper">
       <img src={logo} className="spotify-image"></img>
       {/* onClick={toggleSearch()} */}
       <p className="top-of-sidebar" ><img src={a} className="left-icons"/>Search</p> 
       <p className="top-of-sidebar"><img src={b} className="left-icons"/>Your Library</p>
       
       <br />
       <p><img src={c} className="left-icons"/>Create Playlist</p>
    {/* <p><img src={d} className="left-icons"/>Liked Songs</p> */}
    <hr className="aside-hr"/>
<Button variant="danger" style={{width:"100%"}} onClick={()=>{
    store.dispatch(ActionCreators.undo())
}}>Undo</Button>
    {favourites &&favourites.map((m)=>{
        return(
        <p key={m.id} onClick={()=>{dispatch(setSong(m))}} >{m.title}</p>
        )
    })}

    </aside> 
    </Container>);
}
 
export default SideBar;