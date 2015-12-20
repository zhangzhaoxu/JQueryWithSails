/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req,res){
        res.view('test');
    },
    upload : function (req, res) {
        console.log(req.params.all());
        res.send("success");
    }
};

