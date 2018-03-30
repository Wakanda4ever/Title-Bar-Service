//This function generates random integers from an isoelastic distribution
//This is a downward sloping concave function
var fs = require('fs');

var tenM = 10000000;

var getRandomBusinessIdArtillery = (userContext, events, done) => {
  userContext.vars.business_id = getRandomBusinessId();
  done();
};

var getRandomBusinessId = (x) => {
  if (x === undefined) {
    x = Math.random() * tenM + 1;
  }
  if (x === 0 || x > tenM) {
    return null;
  }
  //var y = tenM / x ** 0.5 - 3161;
  //var y = tenM / x ** 0.3 - 79431;
  var y = tenM / x ** 0.1 - 1995259;
  return Math.floor(y);
};

//counts how many ids are generated from the integers 1 to 10M
//result is 84,559 ids.
var testCount = () => {
  var storage = {};
  for (var i = 1; i <= tenM; i++) {
    storage[getRandomBusinessId(i)] = true;
  }
  console.log('Test count result:')
  return Object.keys(storage).length;
};

var testFirst = (max, increment) => {
  var storage = {};
  for (var i = 0; i * increment <= max; i++) {
    console.log(getRandomBusinessId(tenM - i * increment));
  }
  return 'List complete.';
};

var testLimits = () => {
  console.log('Limit Tests:');
  console.log(getRandomBusinessId(1) <= tenM);
  console.log(getRandomBusinessId(tenM) >= 1);
}

var generateFile = () => {
  var obj = { keys: ['id'], values: []};
  for (var i = 0; i < 350000; i++) {
    var arr = [getRandomBusinessId()];
    obj.values.push(arr);
    if (i % 10000 === 0) {
      console.log('pushed', i);
    }
  }
  fs.writeFileSync('./ids.json', JSON.stringify(obj));
}

// // Invoke Tests
// console.log(testFirst(10000, 100));
// console.log(testLimits());
// console.log(testCount());

//generate files
generateFile();


module.exports.getRandomBusinessIdArtillery = getRandomBusinessIdArtillery;
