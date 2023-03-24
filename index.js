let express = require("express")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
dotenv.config()
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send(`Hello World! ${process.env.TEST_VARIABLE}`));

app.listen(3000, () => console.log("Example app listening on port 3000!"));