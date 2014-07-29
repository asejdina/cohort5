'use strict';

var people = global.nss.db.collection('people');


exports.bios = (req, res)=>{
  console.log('You Made it this far');
  people.find().toArray((err, people)=>{
    res.render('people/bios', {people:people, title:'people'});
  });
};
