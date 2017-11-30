var Main = require('../models/main')

exports.post = function(req, res, next){

var main = new Main(req.body);
main.save(function(err, main){
	if(err)throw err
		res.json(main)
})

}

exports.get = function(req, res, next){

	Main.find({})
	.exec(function(err, main){
		if(err) throw err;
		res.json(main)
	})
}