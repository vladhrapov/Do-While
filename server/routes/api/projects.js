var express = require('express'),
    router = express.Router(),
    Project = require('../../models/project.model');

// This route for getting project data to the client
router.get('/', function(req, res) {

    Project.find({}, function(err, result) {
        if(err){
            res.send(err);
            return;
        }
        res.json({items: result});
    });

});

// This route for getting project data from client and saving them to DB
router.post('/', function(req, res){

    var validationError = {
        type: 'Validation Error',
        message: ''
    };

    if(!req.body.name){
        validationError.message = 'Username is required'
    }
    if(!req.body.color){
        validationError.message = 'Color is required'
    }
    if(validationError.message){
        res.json(validationError);
        return;
    }

    var newProject = Project({
        name: req.body.name,
        color: req.body.color,
        taskCount: Math.floor((Math.random() * 10) + 1)    // This is for demo (random task count)
    });

    newProject.save(function(err){
        if(err){
            res.send(err);
            return;
        }
    });
});

module.exports = router;