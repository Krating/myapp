const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://ph:aa112233@103.47.254.22:2077/ph_db').then(
	() => {
		console.log('DB is connected.')
	}
	).catch(
		(err) => {
			console.error(err);
		}
	);

const indexRoute = require('./route/index')();
const usersRoute = require('./route/api')();

const app = express();

const users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/api', usersRoute);

// app.get('/', (req, res) => {
// 	res.send('Hi');
// });

// app.get('/users', async (req, res) => {
// 	const users = await userData.find({});
// 	res.json(users);
// });

// app.post('/register', (req, res) => {
// 	const data = {
// 		"username": req.body.username,
// 		"password": req.body.password
// 	}
// 	const user = new userData(data);
// 	user.save();
// 	res.status(200).send("Created");
// });

app.listen(3000);