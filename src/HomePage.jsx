import React, {useState} from "react"
import { useNavigate } from "react-router-dom" 

    // need state for roomID
    // state for username
    // input for each tied to piece of state
    //button when clicked: if roomID and username have values, naviagte them to '/chat/roomID'..so would need to be roomID number

function HomePage({setCurrentUser}) {

    const [roomID, setRoomID] = useState("")
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

  return (
    <div>
        <label htmlFor="roomID">Enter Room ID</label>
        <input 
        value={roomID}
        onChange={(e)=>setRoomID (e.target.value)}
        type="text" 
        id="roomID"
        />

        <label htmlFor="username">Enter Username</label>
        <input 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        id="username" 
        />

        <button 
        type="submit"
        onClick={(e) => {
            if(roomID && userName){
                setCurrentUser(userName)
                navigate(`/chat/${roomID}`);
            }}
        }
        >
        SUBMIT
        </button>
    </div>
  )
}

export default HomePage