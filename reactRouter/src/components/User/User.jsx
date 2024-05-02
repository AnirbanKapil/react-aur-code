import { useParams } from "react-router-dom"

function User() {

  const {userid} = useParams();  
     
  return (
    <div className="bg-gray-400 shadow-lg text-center font-semibold py-6">User : {userid} </div>
  )
}

export default User