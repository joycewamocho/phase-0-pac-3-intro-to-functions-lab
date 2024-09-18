function shout(hello){
    return `${"HELLO"}`;
}
console.log(shout());

function whisper(HELLO){
    return `${"hello"}`;
}
console.log(whisper());

function logShout(hello){
    console.log(hello.toUpperCase());
}

function logWhisper(HELLO){
    console.log(HELLO.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string.includes("Let's have dinner together!")) {  
      return "I would love to!";
    } else {
      return "I'm not sure what you said.";  
    }
  }
console.log(sayHiToHeadphonedRoommate('hello')); 
console.log(sayHiToHeadphonedRoommate('HELLO')); 
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));






    