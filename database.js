const mongoClient = require('mongodb').MongoClient

let client;

const dbConnection = async () => {
    client = await mongoClient.connect('mongodb://localhost:27017',{
        useNewUrlParser:true,
        useUnifiedTopology:true

    })
}
const getConnection =(name) =>{
    const database = client.db(name)
    return database;
}

module.exports ={
    dbConnection,
    getConnection
}
