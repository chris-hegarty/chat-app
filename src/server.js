const express = require("express")
const app = require("express");
const PORT = process.env.PORT ?? 8080;

app.use(express.static(__dirname + "/build"));
app.get("*", (req, res) => {
    return res.sendFile("/build/index.html", { root: __dirname + "/" });
});
//This next line is how you expose your server to sockets.
const server = require("http").createServer(app)
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    //create the connection
    const { username, roomID } = socket.handshake.query
    //socket join the room id
    socket.join(roomID)
    //now we can build events
    //does it need to go everyone in the room or socket?
    //if it ito a specific person it's socket.emit
    //if its to everyone (all sockets that are connected) its io.emit
    //whats a good anme for when someone connects? It's the first arg
    // then the 2nd arg, username, is the data being sent.
    io.to(roomID).emit("connect", username)

    socket.on("message", (msg) => {
        io.to(roomID).emit("message", msg)
    })

    socket.on("disconnect", () => {
        io.to(roomID).emit("disconnect", username)
    })
});
server.listen(PORT, () => console.log("listening"));