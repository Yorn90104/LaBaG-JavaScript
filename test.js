const http = require("http");
const server = http.createServer(function(req, res)
{
    res.write("HELLO");
    res.end();
}
);
server.listen(8787);
