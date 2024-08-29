import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
const [history,setHistory]=useState([])

useEffect(()=>{
  getHistory()
},[])

const getHistory = async()=>{
 const result = await getVideoHistoryAPI()
  if(result.status==200){
    setHistory(result.data)
  }else{
    console.log("Api Failed");
    console.log(result.message);
 
  }
}

const removeVideoHistory= async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}


// console.log(history);

  return (
    <>
   <div className="container mt-5 mb-3 d-flex justify-content-between">

    <h2>Watch-history</h2>
    <Link style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}} to={"/home"}>Back To Home <i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i></Link>
   </div>
  <table className='table mb-5 container shadow w-100'>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Url</th>
      <th>Timestamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
{    

history?.length>0?history?.map((video,index)=>(
<tr>
      <td>{index+1}</td>
      <td>{video?.name}</td>
      <td><a href="">{video?.link}</a></td>
      <td>{video?.timeStamp}</td>
      <td> <button onClick={()=>removeVideoHistory(video?.id)}  className='btn'><i className="fa-solid fa-trash text-danger "></i></button></td>
    </tr>


)):<p className='text-danger fw-bolder'>Nothing To Display</p>

}
  </tbody>



  </table>




    </>
  )
}

export default WatchHistory
