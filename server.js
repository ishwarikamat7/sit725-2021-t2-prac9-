var express = require("express")
var app = express()
var cors = require("cors")
const MongoClient = require("mongodb").MongoClient;
let projectCollection;

// Database Connection

const uri = "mongodb+srv://ikamat7:shubhesh7@sit725.iw2ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const insertProject = (project, callback) => {
    projectCollection.insert(project, callback);
};

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
};

app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

app.post('/api/projects', (req,res) => {
    let project = req.body;
    insertProject(project, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, message: "Successfully added new project", data: result });
        }
    });
});

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port)
  createColllection("pets");
})