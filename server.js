const express = require("express");
const Connection = require("./database");
const path = require('path')
const axios = require("axios")
const PORT = process.env.PORT || 8000;
const app = express();
const cors = require("cors");


// middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.get('/', (request, response) => {
	response.render('index', { title: "Homepage" });
});

app.get('/comment', (request, response) => {
	response.render('comment', { title: "Comment" });
});
app.get('/about', (request, response) => {
	const db = Connection.getConnection("restaurant");
	db.collection("comments").find({}).toArray((err, comments) => {
			if (err) throw err;
			if (comments) {
				response.render('about', { title: "About",comments });
				// res.send(result)
			console.log(comments)
			}
		
		});
		
});

app.post('/about', (request, response) => {
	response.render('about', { title: "About" });
});


app.get('/page', (request, response) => {
	response.render('page', { title: "page" });
});

app.get('/contact_us', (request, response) => {
	response.render('contact_us', { title: "contact_us" });
});




app.post('/comment', async (req, res) => {
    var username =req.body.username;
    var email_address =req.body.email_address;
    var comment_section =req.body.comment_section;


    
	var data = {
		"username": username,
		"email_address": email_address,
		"comment_section": comment_section
		
	};



	const db = await Connection.getConnection("restaurant");

	db.collection("comments").insertOne(data, (err, result) => {
		if (err) throw err;
		if (result) 
		res.redirect('/page')
		
	});
});





app.get('/getcomment', async (req, res) => {
	const db = await Connection.getConnection("restaurant");
	db.collection("comments").find({}).toArray((err, result) => {
			if (err) throw err;
			if (result) {
				res.send(result)
			
			}
		});
});


app.post('/about', async (req,res)=>{
	let search = req.body.search
	const db = await Connection.getConnection("restaurant");
	db.collection("comments").find({username : {$eq: search}}, (err, data) => {
		if (err) {
			throw err
		} else {
			res.status(200).send(data)
		}
	} )
})




Connection.dbConnection().then(() => {
	app.listen(PORT, () => {
		console.log(`Server listening on port :${PORT}`);
	});
});
