/*
Instructions
You are working as a software engineer for a secret agency that needs a way to
encrypt and decrypt messages. The agency communicates using character
arrays instead of plain text to ensure the messages are secure.
Tasks
Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
gnidoC"
2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
gnitirw edoc tuB"
3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI
.lanoisseforp a ekil leef ot evah t'nod uoY"
4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.
*/

let message1 = "yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"

let reversed1 = message1.split('').reverse().join('');
console.log(reversed1);

let reversed2 = message2.split('').reverse().join('');
console.log(reversed2);

let reversed3 = message3.split('').reverse().join('');
console.log(reversed3);

let reversed4 = message4.split('').reverse().join('');
console.log(reversed4);

let myMessage = "I will finish class successfully!";
let myReverse = myMessage.split('').reverse().join('');
console.log(myMessage);
console.log(myReverse);