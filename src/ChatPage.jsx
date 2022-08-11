import React, {useState} from "react"



function ChatPage({currentUser, }) {
    const[message,setMessage] = useState("")
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
                setMessage("")
            }
        }}
        >

        </button>
    </div>
  )
}

export default ChatPage