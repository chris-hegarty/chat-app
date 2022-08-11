import React, {useState} from "react"
import {useParams} from "react-router-dom"
import useSocket from "./useSocket.js";

function ChatPage({currentUser, currentColor }) {
    const[message,setMessage] = useState("")
    const { roomID } = useParams()
    const{messages, sendMessage} = useSocket(roomID, currentUser, currentColor)

  return (
    <div>
        <h2>Chat Page</h2>
          <div className="messages">
        <label htmlFor="message">Message</label>
        <input 
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text" 
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
                    <p style={{ color: val.color }}>{val.username}:</p>
                    {val.body}
                </div>
            ))}
          </div>
    
    </div>
  )
}

export default ChatPage