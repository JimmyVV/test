var util = require('util');
function a () {
     this.name='byvoid';
     this.toString = function(){
          return this.name;
     };
}
var obj = new a();
console.log(util.inspect(obj,true));
console.log(123);