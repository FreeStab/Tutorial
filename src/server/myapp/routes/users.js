var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var TutorialDataSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
});

var TutorialData = mongoose.model('TutorialData', TutorialDataSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
    TutorialData.find()
        .exec(function (err, tutorials) {
            if (err)
                res.send({status: false, message: "An error has occured"});
            else {
                res.json({cards: tutorials});
            }
        });
    /*res.send({cards:[
            {
                title: "Google"
            },
            {
                title: "Exel"
            },
            {
                title: "Word"
            },
            {
                title: "Wi-Fi"
            },
            {
                title: "Imprimante"
            },
            {
                title: "Connexion à distance"
            },
            {
                title: "Skype"
            },
            {
                title: "Site d'achat"
            }
        ]
    });*/
});

router.get('/allfiles', function (req, res, next) {

});

router.post('/insert', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var item = {
        title: req.body.title,
    };
    console.log(item.title);

    var data = new TutorialData(item);

    data.save(function (err) {
        if (err)
            res.json({status:false, message: "An error has occured"});
        else
            res.json({status: true, message: "OK", data: data});
    })

});

module.exports = router;
