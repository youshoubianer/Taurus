'use strict';
/*
* 拉丁猪文字游戏
* 
* 这是一个英语语言游戏。基本规则是将一个英语单词的第一个辅音音素的字母移动到词尾并且加上后缀-ay
* （譬如“banana”会变成“anana-bay”）。可以在维基百科上了解更多内容
*/

module.exports = function(){
  console.time('pig-ay>>>');
  
  if(!process.argv[2]){
    console.log('input the word to reverse>>> \n');
    return false;
  }

  let word = process.argv[2];
  let len = word.length;
  let vowel = 'aeiou';
  let res;
  
  for(let i = 0;i < len; i++){
    let idx = vowel.indexOf(word[i]);
    if(idx !== -1){
      res = word.slice(i) + word.slice(0,i) + 'ay';
      break;
    }
  }
  
  // 方案二
  // let tail = '';
  // let end = 0;
  // for(let i = 0;i < len; i++){
  //   let idx = vowel.indexOf(word[i]);
  //   if(idx === -1){
  //     tail = tail + word[i];
  //   }
  //   else{
  //     res = word.slice(i) + tail + 'ay';
  //     break;
  //   }
  // }
  
  console.log('res>>>',res);
  
  console.timeEnd('pig-ay>>>');
};



