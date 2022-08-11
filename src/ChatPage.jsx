import React, {useState} from "react"
import {useParams} from "react-router-dom"
import useSocket from "./useSocket.js";

function ChatPage({currentUser, }) {
    const[message,setMessage] = useState("")
    const { roomID } = useParams()
    const{messages, sendMessage} = useSocket(roomID, currentUser)

  return (
    <div>
        <h2>Chat Page</h2>
          <div className="messages">
        <label htmlFor="message">Message</label>
        <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text-area" 
        id="message"
        />
        </div>
        <button
        onClick={()=>{
            if(message) {
                sendMessage(message)
                setMessage("")
            }
        }}
        >
        SEND
        </button>
            <div className="messages-container">
            {messages.map((val,idx)=>(
                <div key={idx}>
                    <p>{val.username}:</p>
                </div>
            ))}
          </div>
    
    </div>
  )
}

export default ChatPage