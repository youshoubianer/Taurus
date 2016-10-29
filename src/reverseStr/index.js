'use strict';

/*
* 逆转字符串
* 输入一个字符串，将其逆转并输出。
*/

module.exports = function(){
  
  if(!process.argv[2]){
    console.log('input the word to reverse>>> \n');
    return false;
  }

  let word = process.argv.slice(2).join(' ');
  let res;

  //reverse()
  res = word.split('').reverse().join('');
  console.log('using reverse()>>>',res);

};



