function show(tagName){
    document.getElementById(tagName).className = document.getElementById(tagName).className == "quiz-available-visible" ? "quiz-available-hidden" : "quiz-available-visible";
}

var content;

const loadSubjects = 
    fetch("content.json")
    .then(function(resp) {
        return resp.json();}).then(function(obj) {return obj.subjects;});

let score = 0;
let over = 0;
let curSubj;
let curAnswer;
let curPtr = 0;
let isAnswering = false;
var yey = ["👌 Noice!","👍 Wow!","👏 Lodi!","💪 lakas!","🔥 Damn!","🤘 Petmalu!","🙏 Teach Me Senpai!","😍 Sarap mo talaga!","😍 Crush na kita!","🎉 Shet ang galing!"];
var yayks = ["🤔 ha? ","🤨 eh?","🤦 *slap! ","👎 hays!, ","🙁....!!! ","🤾 Batuhin kita eh! ","🙅Gadon* \"Bobo!\" ","🤷 What the heck!"];
var alter = 0;

function reset(){
    score = 0;
    over = 0;
    curPtr = 0;
    curAnswer = null;
    curSubj = null;
    isAnswering = false;
    alter = 0;
}

function nextQ(){
    if(curPtr == curSubj.Quiz_Questions.length) {
        printScore();
        return;
    }
    document.getElementById("mainCont").innerHTML = '<div class="question-holder"><p id="indicator" class="centeredText">Question '+(curPtr +  1)+' of '+over+'</p><p id="question_holder" class="centeredText">'+curSubj.Quiz_Questions[curPtr].question+'</p></div><div class="textBox"><input id="txt-box" type="text" placeholder="answer"><p id="qstat" class="qstat"></p><button id="subm">Check</button>'

    document.getElementById("subm").innerHTML = "Check";
    document.getElementById("subm").removeEventListener("click",nextQ);
    document.getElementById("subm").addEventListener("click",checkAnswer);
    curAnswer = curSubj.Quiz_Questions[curPtr++].answer;
}

function printScore(){
    document.getElementById("mainCont").innerHTML = '<div id="finished" class ="defaultContent"><h1 style = "margin-left: 0; text-align: center" class="h1-custom">'+(over * 0.5 < score? yey[rand(yey.length)]: yayks[rand(yey.length)])+'<br>'+'You Got '+score+' / '+over+'</h1><button id="home-Btn" onclick="writeQDetails()">Home</button></div>';
    reset();
}

function rand(size){ return Math.floor(Math.random() * Math.floor(size)); }

function checkAnswer(){
    var usranswer = document.getElementById("txt-box").value;
    var coranswer ;
    for(var x = 0; x < curAnswer.length; x++){
        coranswer = curAnswer[x].toLowerCase().replace(/\s+/g,"");
        if(usranswer.toLowerCase().replace(/\s+/g,"") == coranswer){
            score++;
            wrightIndi(true);
            return;
        }
    }
    wrightIndi(false);
}

function wrightIndi(vr){
    document.getElementById("subm").innerHTML = "Next";

    document.getElementById("subm").removeEventListener("click",checkAnswer);
    document.getElementById("subm").addEventListener("click",nextQ);
    document.getElementById("qstat").innerHTML = vr? "Correct <span class=\"icon\">"+yey[rand(yey.length)]+"</span>":"Wrong <span class=\"icon\"> "+ yayks[rand(yayks.length)] +" </span> it's "+curAnswer[0];
    console.log(document.getElementById("qstat").textContent);
}

function writeFrm(){
    over = curSubj.Quiz_Questions.length;
    document.getElementById("mainCont").innerHTML = '<div class="question-holder"><p id="indicator" class="centeredText">Question '+(curPtr +  1)+' of '+over+'</p><p id="question_holder" class="centeredText">'+curSubj.Quiz_Questions[curPtr].question+'</p></div><div class="textBox"><input id="txt-box" type="text" placeholder="answer"><p id="qstat" class="qstat"></p><button id="subm" onclick="checkAnswer()">Check</button>'
    curAnswer = curSubj.Quiz_Questions[curPtr].answer;
    document.getElementById("subm").addEventListener("click",checkAnswer);
    nextQ();
}

function quizLoader(subjPtr){
    if(isAnswering){
        console.log("🤨 What? Finish the 👉 quiz first");
        alert("🤨 What? Finish the 👉 quiz first");
        return;
    }
    curSubj = content[parseInt(subjPtr)];
    fetch("https://jervx.github.io/Practice-Quiz-JS-Personal-Project/qz/"+subjPtr+".json")
    .then(function(resp) {
        return resp.json();
      })
      .then(function(obj) {
        curSubj = obj;
        if(!isAnswering){
            writeFrm();
            isAnswering = true;
        }
        });
    document.documentElement.scrollTop = document.documentElement.offsetHeight;
}

function writeQDetails(subj){
    document.getElementById("mainCont").innerHTML = '<div id="defaultContent" class="main-Content">'+
    '<h1 class="h1-custom">Practice Makes Perfect 👌</h1>'+
    '<div class = "content-details">'+
        '<p>Quizzes help students identify what they know and what they don\'t know. The students then have a better idea of how well they are grasping the material, hopefully motivating them to study more and helping them allocate their study time effectively by focusing on the information that still needs more practice</p>'+
        '<p>With this in mind, the students will expect to improve after a certain quiz. He/she might realize what he/she might know or not know. Therefore improving his knowledge in a certain topic</p>'+
        '<p>Choose A Subject 👉 Answer The question 👉 Take A Quiz Again until you master it.👌</p>'+
        '<p class="note"><span>NOTE: </span>You can ask me to add a subject from the list by giving me the Quiz questions with answerkeys</p>'+
 '</div>'+
'</div>';
}

function getQzs(subj){
    var qzs = "";
    if(subj.length == 0) return '<p class="note">No Quizes Available</p>';
    for(var x = 0 ; x < subj.length; x++)
        qzs += "<button onclick = quizLoader(\""+subj[x].qlk+"\")> ⌥ "+ subj[x].qname + "</button>";;
    return qzs;
}

window.onload = async () => {
    content = await loadSubjects;
    writeSubjects();
};

function writeSubjects(){
    var parent = document.getElementById("side-pane");
    parent.innerHTML = "";
    if(content.length == 0){
        parent.innerHTML += '<div class="subject"><p id="subj-title">No Subjects</p>'
    }
    for(x = 0; x < content.length; x++){
        var cont = content[x].subj_name;
        var quizes = getQzs(content[x].qk);
        var mcont = '<div class="subject">'+
                '<p id="subj-title">'+cont+'</p>'+
                '<p id="showQuizes" onclick = \'show("'+content[x].qkey+'")\'>📚 '+content[x].qk.length+' Quiz(s)</p>'+
                '<div id="'+content[x].qkey+'" class="quiz-available-hidden">'+
                   quizes+
                '</div>'+
            '</div>'
        parent.innerHTML += mcont;
        console.log("Hello & Welcome 👋 Don't go herer! It's Dangerous 💀");
    }
    writeQDetails();
}