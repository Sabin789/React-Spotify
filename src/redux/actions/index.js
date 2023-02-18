export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE="REMOVE_FROM_FAVOURITE"
export const GET_HOMEPAGE="GET_HOMEPAGE"
export const SET_CURRENT="SET_CURRENT"
export const START="START"


export const start=()=>({
  type:START,
  payload:""
})



export const addToFavouritesAction=(fav)=>({

    type:ADD_TO_FAVOURITE,
     payload:fav,
})
export const removeFromFavouritesAction=(fav)=>(
{
 type: REMOVE_FROM_FAVOURITE,
 payload: fav,
}
)

export const fetchHomepage= (query,dispatch)=>{
 return async()=>{
    try{
    const response = await fetch ('https://striveschool-api.herokuapp.com/api/deezer/search?q='+query)
      if(response.ok){
      let  res=await response.json()
       const {data}=res
       console.log(res)
       console.log(data)
       dispatch({
        type:GET_HOMEPAGE,
        payload:data
      })
      }else{
        console.log("error")
      }
    }catch(err){
        console.log(err)
    }
 }
}
export const setSong=(song)=>({
  type:SET_CURRENT,
  payload:song
})


