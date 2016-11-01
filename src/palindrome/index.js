'use strict';
/*
* 判断回文串
* 输入一个字符串，判断用户输入的字符串是否为回文。
* 回文是指正反拼写形式都是一样的词，譬如“racecar”。
*/

module.exports = function(){
  console.time('palindrom>>>');
  
  if(!process.argv[2]){
    console.log('input the word to reverse>>> \n');
    return false;
  }

  let str = process.argv[2],
      len = str.length,
      first = str.slice(0,len/2),
      second = len % 2 ? str.slice(len/2+1,len).split('').reverse().join('')
              : str.slice(len/2,len).split('').reverse().join('');
  // console.log('first>>>',first,'second>>>',second);
  console.log('res>>>',first === second);
  console.timeEnd('palindrom>>>');
  
  return first === second;

};



