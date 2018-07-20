const express = require('express');
const morgan = require('morgan');
const bodyParser = ('body-parser');
const app = express();
const customerRoutes = require('./api/routes/customer');

app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

//Routes which should handle requests
app.use('/customer', customerRoutes);


//custom 404 handler

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
})

app.use((error, req, res, next)=>{
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});


module.exports = app;
