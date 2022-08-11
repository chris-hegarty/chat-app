import React, {useState} from "react"
import { useNavigate } from "react-router-dom" 

    // need state for roomID
    // state for username
    // input for each tied to piece of state
    //button when clicked: if roomID and username have values, naviagte them to '/chat/roomID'..so would need to be roomID number

function HomePage({setCurrentUser, setCurrentColor}) {

    const [roomID, setRoomID] = useState("")
    const [userName, setUserName] = useState("");
    const [color, setColor] = useState("#000000");
    const navigate = useNavigate();

  return (
    <div>
        <label htmlFor="roomID">Enter Room ID</label>
        <input 
        value={roomID}
        onChange={(e)=>setRoomID(e.target.value)}
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
          <div>
              <label htmlFor="color">Chat Color</label>
              <input
                  id="color"
                  value={color}
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
              />
          </div>
        <button 
        type="submit"
        onClick={(e) => {
            if(roomID && userName){
                setCurrentUser(userName)
                setCurrentColor(color);
                navigate(`/chat/${roomID}`);
            }}
        }
        >
        Join Room
        </button>
    </div>
  )
}

export default HomePage