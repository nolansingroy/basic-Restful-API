const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const request = require('request');
//Default lat long settings
var latlang = {
    "latitude":17.4301946,
    "longitude":78.3977677
};
//
var options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        qs: {
            location: latlang.latitude + ',' + latlang.longitude,
            radius: '20000',
            types: 'stadium',
            sensor: 'true',
            key: 'AIzaSyAWwP5yH9Hke0FQkwEUujx-L8QelE27ZpY'
        }
};
//comment out this model should migrate to mongose database
//router functions below depended on this model
/**
const Model = {
  "nolan": { json : 'true', radius: 123, type: "bank", key: '', sensor: 'true' },

  "sam": { json : 'true', radius: 123, type: "bank", key: '', sensor: 'true' },

  "jack": { json : 'true', radius: 123, type: "bank", key: '', sensor: 'true' },

}
var name = request.params.name;
console.log(Object.keys(Model));
  let temp = Object.entries(Model[name]);
  console.log(Object.entries(temp));
  let output = Object.entries(Model[name]).map(([key, value]) => (key,value));
  console.log(output);
  console.log('---');
  console.log(output[2]);
  */

//Route for User 1
router.get('/customer1/:lat/:long', function(req, res, next) {request({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/xml',
      json : false,
      qs: {
        query :"Sunrise Bank",
        location: req.params.lat + ','+ req.params.long,
        types: 'atm',
        langage: 'English',
        sensor: 'true',
        radius: 20000,
        key: 'AIzaSyAWwP5yH9Hke0FQkwEUujx-L8QelE27ZpY'
      }
    }, function (error, res, body) {
          if (error) throw new Error(error);
          console.log(body);
    		  console.log(req.params.lat + "/ "+ req.params.long);
    });
});

//Route for User 2
router.get('/customer2/:lat/:long', function(req, res, next) {
  request({
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
        json : true,
        qs: {
          query :"Happy Credit Union",
          location: req.params.lat + ','+ req.params.long,
          types: 'bank',
          langage: 'Spanish',
          sensor: 'true',
          radius: 20000,
          key: 'AIzaSyAYaNzyQoSDKW0FIUxhEgUEsmPic9XqtPU'
        }
      }
    , function (error, res, body) {
          if (error) throw new Error(error);
          console.log(body);
    		  console.log(req.params.lat + "/ "+ req.params.long);
    });
});

//Route for User 2
router.get('/customer3/:lat/:long', function(req, res, next) {
  request({
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
        json : true,
        qs: {
          query :"Paris FCU",
          location: req.params.lat + ','+ req.params.long,
          types: 'all',
          langage: 'French',
          sensor: 'true',
          radius: 20000,
          key: 'AIzaSyAdAnwAfMAEDU3igUPKq_v8QrapgzyNHT4'
        }
      }
    , function (error, res, body) {
          if (error) throw new Error(error);
          console.log(body);
    		  console.log(req.params.lat + "/ "+ req.params.long);
    });
});

/*
router.get('/test/:lat/:long',function(req,res,next){
request(options, function (error, res, body) {
      if (error) throw new Error(error);
      res.status(200).json({
    	message: 'Handling Get request to /customers'
    	});
        console.log(body);
		 //   console.log(req.params.lat + "/ "+ req.params.long);
});
});
*/

router.get('/2',function(req,res,next){
request(options, function (error, response, body) {
        if (error) throw new Error(error);
				let json = JSON.parse(body);
		    console.log(json);
});
});


router.get('/1', function(req, res, next) {
  request({
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/xml?query=Sunrise+in+Sydney&key=AIzaSyAWwP5yH9Hke0FQkwEUujx-L8QelE27ZpY',
    json : false
}, (error, response, body) => {
      console.log(body);
    });
	});

router.get('/', (req, res, next) => {
	res.status(200).json({
	message: 'Handling Get request to /customers'
	});
});


router.post('/', (req, res, next) => {
        res.status(200).json({
        message: 'Handling Get request to /customers'
        });
});

router.get('/:productId', (req, res, next)=>{
	const id = req.params.customerId;
	if (id === 'special') {
		res.status(200).json({
			message: 'You discovered the special ID',
			id: id
		});
	} else {
		res.status(200).json({
			message: 'You Passed an ID'
		});
	}

});


router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated products!'
	});
});


router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
	message: 'delete Customer info!'
	});
});

module.exports = router;
