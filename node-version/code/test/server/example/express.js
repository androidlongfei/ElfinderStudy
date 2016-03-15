var express      = require("express"          );
var path         = require("path"             );
var bodyParser   = require("body-parser"      );
var cookieParser = require("cookie-parser"    );

var app = express();
app.set('json spaces', 4);
app.set('elfinder', {
    //client: path.join(__dirname, "..", "client"),
    roots : {
        files: {
            driver: "LocalFileSystem",
            //path  : path.join(__dirname, "..", "files")
            path  : "/Users/longfei/"
        }
    }
});

//app.use(express.client(app.get('elfinder').client)                          );
app.use(bodyParser.urlencoded({extended: true})                             );
app.use(bodyParser.json()                                                   );

require("..").Connector(app);

//192.168.5.121
app.listen(8000);
