
var isNumber = function(e){
    if(typeof(e)==='number'){return true;}
    return false;
};

var allNumbers = function(arr){return arr.reduce(
    function(a,e){return a && isNumber(e);},true);
};

var allButFirst = function(arr){
    var ans = [];
    for(var i=1; i<arr.length; ++i){
        ans.push(arr[i]);
    }
    return ans;
};

var flatten = function(e){
  if(isNumber(e)){return [e];}
  if(allNumbers(e)){return e;}
  return flatten(e[0]).concat(flatten(allButFirst(e)));
};

var arr = [1,[2,3,4],[[],[]]];

var out = flatten(arr);

console.log(out);
