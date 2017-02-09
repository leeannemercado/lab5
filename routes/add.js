var data = require("../data.json");

exports.addFriend = function(req, res) {    


	var name= req.query.name
	var description= req.query.description
	
//adding new friend 
	var newFriend= 
		{
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people"			
		}
			

    data.friends.push(newFriend)

 console.log("the name is: " + name + " the description is " + description);

 res.render('index', data);



 };


