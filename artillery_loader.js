//This function generates random integers from an isoelastic distribution
//This is a downward sloping concave function

var tenM = 10000000;


var getRandomBusinessIdArtillery = (userContext, events, done) => {
  var x = Math.random() * tenM + 1;
  if (x === 0 || x > tenM) {
    return null;
  }
  var y = tenM / x ** 0.5 - 3161;
  userContext.vars.business_id =  Math.floor(y);
  done();
};

var getRandomBusinessId = (x) => {
  if (x === undefined) {
    x = Math.random() * tenM + 1;
  }
  if (x === 0 || x > tenM) {
    return null;
  }
  var y = tenM / x ** 0.5 - 3161;
  return Math.floor(y);
};

//counts how many ids are generated from the integers 1 to 10M
//result is 84,559 ids.
var testDistribution = () => {
  var storage = {};
  for (var i = 0; i <= tenM; i++) {
    storage[getRandomBusinessId(i)] = true;
  }
  return Object.keys(storage).length;
};

module.exports.getRandomBusinessIdArtillery = getRandomBusinessIdArtillery;
