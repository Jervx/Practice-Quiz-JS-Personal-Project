/*
 Copyright © Jerbee Paragas 1/31/2020 
 ATTENTION: -------------------------------------------------------------------------------------
    if you opened this source code your IP will be
    tracked by GITHUB. Don't worry as long as you are not copying
    the code, screenshot, you will be fine.
 
 Message: 
    This is my own algorithm and you should not copy 
    it without my concent. 
    NOTE: You should not copy comeone else's code!
 
<important>--------------------------------------------------------------------------------------
 LICENSE: Apache License 2.0
 A permissive license whose main conditions require preservation of copyright and license notices. 
 Contributors provide an express grant of patent rights. Licensed works, modifications, and larger
 works may be distributed under different terms and without source code.
<!important!>-------------------------------------------------------------------------------------
 */

let config;let data;function load() {fetch(dbName+servername+serverDir+serverFlDB)    .then(function (resp) {return resp.json();}).then(function (obj) {config = obj.quizes;});}let dbName = "https://jervx";function loadQuestion(subjecSelector) {fetch(config[subjecSelector].url).then(function (resp) {return resp.json();}).then(function (obj) {      data = obj[2].data;setQuestion();    });
}function clearPane() {document.getElementById("pane").innerHTML = '<p id="questionHolder" style="color:rgb(80, 80, 80);"></p><br><input id="answer" type="text" placeholder="Your Answer Here"><br><br><button onclick="check()">Submit Answer</button><br><button style="background-color:rgb(133, 52, 52);" onclick="done()">Ayaw Kona</button>';}function setQuestion() {if(pointer > data.length - 1) done();clearPane();document.getElementById("questionHolder").innerHTML ='<span style="font-size:25px;font-weight:bold;color:rgb(98, 98, 98);">Question ' +(pointer + 1) +"</span><br><br>" +data[pointer].question;answer = data[pointer++].answer;
}function testAnswer(N) {  return (N.toLowerCase().replace(/\s/g, "") ===answer.toLowerCase().replace(/\s/g, ""));}function correct() {score++;document.getElementById("pane").innerHTML ='<p id="questionHolder" style="color:rgb(80, 80, 80);"><span style="font-size:30px;color:rgb(38, 141, 47);">Correct ✓</span><br><br>' +data[pointer - 1].question +"<br><br>'" +data[pointer - 1].answer +'\'<br></p><button onclick="setQuestion()">Continue</button>';}function wrong() {document.getElementById("pane").innerHTML ='<p id="questionHolder" style="color:rgb(80, 80, 80);"><span style="font-size:30px">Wrong ✗</span><br><br>' +data[pointer - 1].question +"<br><br>'" +data[pointer - 1].answer +'\'<br></p><button onclick="setQuestion()">Continue</button>';}function startQuiz(v) {document.getElementById("pane").innerHTML = '<p id="questionHolder">Tanong para sayo</p><input id="answer" type="text" placeholder="Your answer here" r equired><button onclick="check()">Submit Answer</button>';load();}function loadDefaults() {document.getElementById("pane").innerHTML ='<div id="blocks1"><div class="contentPane" id="con1"><h3 id="contentPane-Title">Start Learning</h3><p>We have our own learning strategies, sometimes we need a lot of time to learn and fully understand something.</p></div><div class="contentPane" id="con2"><h3  id="contentPane-Title">Master Your Lessons</h3><p>After Learning From School, Study it again until you master it! Semetimes repeatedly reading something will help you a lot.</p></div><div class="contentPane" id="con3"><h3  id="contentPane-Title">Test Your Learning</h3><p>Now After Learning And Mastering the lessons, you need to verify if you really learned something so we provided a sets of quetions for you.</p></div></div><p id="questionHolder" style="font-size:25px;"><span style="font-weight:bold; font-size:28;"></p><button onclick="showSubjects()">Show Subjects ⎇ </button>';score = 0;pointer = 0;
}let serverDir = "JervxApplicationDeploy/db/", serverFlDB = "config.json", servername = ".github.io/";function done() {compute();document.getElementById("pane").innerHTML ='<p id="questionHolder"><span style="font-size:30px;color:rgb(38, 141, 47);">Quiz Completed!</span><br><br>Score:' +score +" of " +getDataSize() +"<br>Grade " +remark +(remark >= 75.0 ? "% &nbsp Remark: Passed!" : "% &nbsp Remark: Failed") +'</p><br><br><button style="padding-left:40px;padding-right:40px"onclick="loadDefaults()">Close</button><br><br>';}function showSubjects() {var x = 0;document.getElementById("pane").innerHTML = "";while (x < config.length) document.getElementById("pane").innerHTML +='<p id="questionHolder" style="font-size:20px;margin-top:0px"><span style="font-weight:bold;"> ' + config[x++].name + '</span></p><button onclick="loadQuestion(' + (x - 1) + ')">Start Practice Quiz</button><hr style="border:1px solid rgb(200, 200, 200)"><br><br></p>';}function getDataSize() {return data.length;}
load();
/*
 Copyright © Jerbee Paragas 1/31/2020
 ATTENTION: -------------------------------------------------------------------------------------
    if you opened this source code your IP will be
    tracked by GITHUB. Don't worry as long as you are not copying
    the code, screenshot, you will be fine.

 Message:
    This is my own algorithm and you should not copy
    it without my concent.
    NOTE: You should not copy comeone else's code!

<important>--------------------------------------------------------------------------------------
 LICENSE: Apache License 2.0
 A permissive license whose main conditions require preservation of copyright and license notices.
 Contributors provide an express grant of patent rights. Licensed works, modifications, and larger
 works may be distributed under different terms and without source code.
<!important!>-------------------------------------------------------------------------------------
 */
