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
let data;let dbName = 'jervx.', servername = 'github.io' , dbF = 'inpr';function load(){fetch(('https://jervx.github.io/JervxApplicationDeploy/inpr.json')).then(function(resp) {return resp.json();}).then(function(obj) {data = obj[2].data;setQuestion();});}function setQuestion(){document.getElementById("questionHolder").innerHTML = "<span style=\"font-size:25px;font-weight:bold;color:rgb(98, 98, 98);\">Question "+(pointer+1)+"</span><br><br>"+data[pointer].question;answer = data[pointer++].answer;}function testAnswer(N){return N.toLowerCase().replace(/\s/g,'') === answer.toLowerCase().replace(/\s/g,'');}function correct(){score++;document.getElementById("pane").innerHTML = '<p id="questionHolder" style="color:rgb(80, 80, 80);"><span style="font-size:30px;color:rgb(38, 141, 47);">Correct ✓</span><br><br>'+data[pointer-1].question+'<br><br>\''+data[pointer-1].answer+'\'<br></p><button onclick="reset()">Continue</button>';}function wrong(){document.getElementById("pane").innerHTML = '<p id="questionHolder" style="color:rgb(80, 80, 80);"><span style="font-size:30px">Wrong ✗</span><br><br>'+data[pointer-1].question+'<br><br>\''+data[pointer-1].answer+'\'<br></p><button onclick="reset()">Continue</button>';}function reset(){document.getElementById("pane").innerHTML = '<p id="questionHolder">Tanong para sayo</p><input id="answer" type="text" placeholder="Your answer here" required><button onclick="check()">Submit Answer</button>';setQuestion();}function startQuiz(){document.getElementById("pane").innerHTML = '<p id="questionHolder">Tanong para sayo</p><input id="answer" type="text" placeholder="Your answer here" required><button onclick="check()">Submit Answer</button>';load();}function loadDefaults(){document.getElementById("pane").innerHTML = '<p id="questionHolder" style="font-size:30px;"><span style="font-weight:bold; font-size:28;"> Intermediate Programming</span><br>61 question</p><button onclick="startQuiz()">Start Quiz Now</button><br><br><p>NOTE<br><p style="font-size: 14px;">If more than one answer is being asked, separate them with ( , ) comma</p></p>';}function done(){compute();document.getElementById("pane").innerHTML = '<p id="questionHolder"><span style="font-size:30px;color:rgb(38, 141, 47);">Quiz Completed!</span><br><br>Score:'+score+' of '+getDataSize()+'<br>Grade '+remark+(remark >= 75.00 ? "% &nbsp Remark: Passed!":"% &nbsp Remark: Failed")+'</p><br><br><button style="padding-left:40px;padding-right:40px"onclick="loadDefaults()">Close</button><br><br>';score = 0;pointer = 0;}function getDataSize(){return data.length;}
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