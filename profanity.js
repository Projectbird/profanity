var request = require("request"); var chalk = require('chalk');
module.exports = function(word, callback) {
  request({
      uri: "http://www.wdyl.com/profanity?q=" + encodeURI(word),
      async: true,
  }, function(error, response, body) {
      if(error){
          console.log('erro');
          callback("hi",error);
          return;
      }
        if (typeof(callback) === 'function') {
console.log('sss');
return         callback(null,obj.response);
}
    console.log('emd');
    return "batman";

  });
}