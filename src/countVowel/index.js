'use strict';
/*
* 统计元音字母
* 输入一个字符串，统计处其中元音字母的数量。
* 统计出每个元音字母的数量
*/

module.exports = function(){
  console.time('countVowel>>>');
  
  if(!process.argv[2]){
    console.log('input the word to reverse>>> \n');
    return false;
  }

  let word = process.argv[2];
  let len = word.length;
  let vowel = 'aeiou';
  let res = {};
  
  for(let i = 0;i < len; i++){
    let idx = vowel.indexOf(word[i]);
    if(idx !== -1){
      let cnt = res[word[i]] ? res[word[i]]+1 : 1;
      res[word[i]] = cnt;
    }
  }
  
  console.log('res>>>',res);
  
  console.timeEnd('countVowel>>>');
};



