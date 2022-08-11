// create a hook
import socketIoClient from "socket.io-client"
import { useState, useCallback, useEffect, useRef } from "react"

//TODO .on for "message" "connect" "disconnect"
//TODO .emit for "message"
//TODO Set up socket connection
//TODO Create an array for messages.
//TODO Return from the hook an array of messages and a function to send a message.

const useSocket = (roomID, username) => {
    const [messages, setMessages] = useState([])
    // useRef = React pays attention to it, but doesnt re-render.
    //If this is useState, it will trigger oa connect/disconect each time.
    const socketRef = useRef();
    //useEffect will make connection to the socket and set up the ons..on connect, ondisconnect, onmessage. It will run once, then never again.
    useEffect(() => {
        //any sort of ref has a current key, which is the current value being put into the ref.
        socketRef.current = socketIoClient("http://localhost:8080", { query: { username, roomID } })
    }, [])

}

export default useSocket;