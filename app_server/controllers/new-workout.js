const mongodb = require('../models/mongodb')
module.exports.newWorkout = function (req, res) {
    res.render('new-workout', {title: 'Create new workout'})
};

module.exports.create = function (req, res) {
    var workout = {
        exercise: req.body.exercise,
        description: req.body.description,
        set: req.body.set,
        reps: req.body.reps
    };

    console.log('Data: ' + workout.exercise + ' ' + workout.description + ' ' + workout.set + ' ' + workout.reps)
    mongodb.insert(workout);
    res.redirect('/');
};