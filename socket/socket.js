const net = require('net');
const socket = new net.Socket();
let host = "10.88.1.2";
let port = 8089;

let http_request;
http_request = "GET " + "/rest.station.getOPSValues.php" + " HTTP/1.0\r\n";
http_request += "Host: " + host + "\r\n";
http_request += "Content-Type: application/json; charset=utf-8";
http_request += "\r\n";

socket.connect(port, host, function(wds) {
    console.log("Hello there!");
    console.log("Connected: " + new Date());
    console.log("Some response? ", wds);
        socket.write("ALL\r\n", "utf8", function (response) {
            console.log("Socket response: ", response)
        });
        // console.log("Write status: ", write);
        socket.end(http_request);
});

socket.on('data', function(chunk) {
    console.log(`Data recieved from server: ${chunk.toString()}.`);
    socket.end();
})





// const io = require('socket.io-client');
// const OPS = io("http://10.88.1.2:8089");
// // const OPS = socket("http://10.88.1.2:8089");
//
// OPS.on('connect', function(res) {
//     console.log("\r\nConnected! Time is "+new Date());
//     console.log("any response? ", res);
//     OPS.emit('load', function(data){
//         console.log("Emitting load!");
//         console.log(data);
//     });
//     OPS.emit('ALL:', function(allData){
//         console.log("Emitting ALL");
//         console.log(allData);
//     })
// })
//
// OPS.on('load', function(res) {
//     // console.log("\r\n Load event!");
//     console.log("any response? ", res);
//     OPS.emit('load', function(loadData){
//         console.log("inside")
//     });
//     OPS.emit('ALL:');
// });