const express = require('express');
const router = express.Router();





const CollectionModel = require('../models/collection');


router.get('/',(req,res) => {
    CollectionModel.find()
        .then(items => res.json(items));
});

router.post('/',(req,res) => {

   const newcollection = new CollectionModel({
       Username: req.body.Username,
       Title:req.body.Title,
       JournalEntry: req.body.JournalEntry,
       date: req.body.date

   });





newcollection.save()

.then(() => res.send("Post request is okay from in routes"));
});

module.exports = router;