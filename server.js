const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

//htmlファイルを送信
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//socket.ioでコネクション
io.on("connection", (socket) => {
    console.log("ユーザが接続しました。");

    // クライアントからのメッセージを受信
    socket.on("chat message", (msg) => {
        console.log("メッセージ: " + msg);
        
        // 全クライアントにメッセージを送信
        io.emit('chat message', msg);
    });
});


//サーバを待ち受け状態にする
server.listen(PORT, () => {
    console.log("ggg 3000");
});









