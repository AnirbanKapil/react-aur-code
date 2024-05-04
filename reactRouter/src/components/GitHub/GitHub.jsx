// import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom";

function GitHub() {
  
  // const [data,setData] = useState([]);  
   
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/hiteshchoudhary").
  //   then((res)=> {return res.json()}).
  //   then((data)=>{
  //        console.log(data);
  //        setData(data)
  //   })
  // },[]);

const data = useLoaderData();


  return (
    <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Followers : {data.followers}
        <img src= {data.avatar_url} alt="profile-pic" width={200}/>      
    </div>
        
  )
}

export default GitHub;


export const gitHubInfoLoader = async () => {
     const response = await fetch("https://api.github.com/users/hiteshchoudhary");
     
     return response.json();     
}