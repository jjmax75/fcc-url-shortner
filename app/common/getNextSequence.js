'use strict';

function getNextSequence(name, db, callback) {
  // function to get next available id number
  var counters = db.collection('counters');

  counters.findAndModify(
      {"_id": name},
      [],
      {"$inc": {seq: 1}},
      {new: true},
    function (err, result) {
      if (err) console.error(err);
      callback(result.value.seq);
    }
  );
}

module.exports = getNextSequence;
