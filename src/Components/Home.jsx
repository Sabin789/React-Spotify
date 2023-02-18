import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepage, start } from "../redux/actions";
import { Container, Row, Col, Form} from 'react-bootstrap'
import GoodMorning from "./GoodMorning";
import RecentlyPlayed from "./RecentlyPlayed";
import SongsToTry from "./SongsToTry";
import SideBar from "./SideBar";
import Footer from "./Footer";
import QueOfSongs from "../redux/reducers/QueOfSongs";
import { useEffect } from "react";

const Home = () => {
    let dispatch=useDispatch()
let songs =useSelector((state)=>state.home.results)
   
    const [query, setQuery] = useState('')
    // const navigate=useNavigate()
    const [input,setInput]=useState("")

    const handleChange = (e) => {
        setQuery(e.target.value)
       
      }
      // let que=useSelector((state)=>state.Que.results)
      // const [current,setCurrent]=useState(que[0])
      const handleSubmit =  (e) => {
        e.preventDefault()
        dispatch(fetchHomepage(query,dispatch))
        // setCurrent(que[0])
        // dispatch(QueOfSongs(query,dispatch))
      
      
       
      }
      useEffect(()=>{
        dispatch(start())
       },[])
    return ( 
    <>
      <SideBar />
    <Container fluid className="px-5 body" >
    
      
        <div className="main-content">
     


        <Form
       
        >
          <Form.Group>
            {/* <Form.Control
              type="text"
              placeholder="Log in here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            /> */}
          </Form.Group>
        </Form>
     
        <Col  className="mx-auto my-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
        
              placeholder="type and press Enter"
            />
          </Form>
          {songs ?
          <>
          <h3 className="text-white mt-4 d-flex justify-content-between align-items-end"><span>Good Morning</span><span className="see-all">SEE ALL</span></h3>
          <Row  className="row row-cols-2 row-cols-md-3" id="goodmorning">
        
        <GoodMorning />
  
            </Row>
        
      
           
         
    
        
    
   <h3 className="text-white mt-4 d-flex justify-content-between align-items-end"><span>Recently played</span><span className="see-all">SEE ALL</span></h3>

     <Row className="row row-cols-2 row-cols-lg-5 mb-5" >

                            
             <RecentlyPlayed />

     </Row>
  
             <h3 className="text-white mt-4 d-flex justify-content-between align-items-end"><span>Songs to try</span><span className="see-all">SEE ALL</span></h3>
             <span className="text-white" >Songs we think you'll get hooked on</span>
            <Row className="row row-cols-2 row-cols-lg-5" id="showstotry">
      
            <SongsToTry />
          
             </Row>
         </>
         :(<h1 className="text-white">Search for music</h1>) }
        </Col>

   </div>
    </Container> 
    <Footer />
    </>);
}
 
export default Home;