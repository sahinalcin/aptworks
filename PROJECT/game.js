
function Question(que, choices, answer) {
    this.que = que;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer == choice;
}

function Quiz(questions) {
    this.score = 0;
	this.mistake = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
		var scoreHTML="";
		scoreHTML = scoreHTML + ("DOĞRU SAYISI: " + quiz.score);
		document.getElementById("score").innerHTML = scoreHTML;
    }
	else {
		this.mistake++;
		var mistakeHTML="";
		mistakeHTML = mistakeHTML + ("YANLIŞ SAYISI: " + quiz.mistake);
		document.getElementById("mistake").innerHTML = mistakeHTML;
	}

    this.questionIndex++;
}

Quiz.prototype.endGame = function() {
    return this.questionIndex == 10;
}

function run() {
    if(quiz.endGame()) {
        message();
    }
    else {
        document.getElementById("question").innerHTML = quiz.getQuestionIndex().que;
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            document.getElementById("choice" + i).innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        qcount();
    }
};

function guess(id, guess) {
    document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        run();
    }
};

function qcount() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    document.getElementById("qnum").innerHTML = "SORU: " + currentQuestionNumber + " / 10";
};

function message() {
    var gameOverHTML = "";
	if(quiz.score<5){
		gameOverHTML =  "<h2 id='score'>"+ quiz.score + " Doğru Yaptınız" + "<br>" +"Bilgi Seviyeniz Kötü</h2>";
		document.getElementById("score").innerHTML = gameOverHTML;}
		
	else if(quiz.score>=5 && quiz.score<=6){
		gameOverHTML += "<h2 id='score'>"+ quiz.score + " Doğru Yaptınız" + "<br>" +"Bilgi Seviyeniz Orta</h2>";
		document.getElementById("score").innerHTML = gameOverHTML;}
	
	else if(quiz.score>=7 && quiz.score<=9){
		gameOverHTML +=  "<h2 id='score'>"+ quiz.score + " Doğru Yaptınız" + "<br>" +"Bilgi Seviyeniz İyi</h2>";
		document.getElementById("score").innerHTML = gameOverHTML;}
		
	else if(quiz.score=10){
		gameOverHTML +=  "<h2 id='score'>"+ quiz.score + " Doğru Yaptınız" + "<br>" +"Bilgi Seviyeniz Mükemmel</h2>";
		document.getElementById("score").innerHTML = gameOverHTML;}
	
};
function restart(){
	location.reload();
	}
	
let questions = [
    new Question("Bilgiye ulaşılmasını ve bilginin oluşturulmasını sağlayan iletişimi hızlandıran teknolojilere ne denir?",	["Teknoloji", "İletişim", "Bilişim Teknolojileri", "Donanım"], "Bilişim Teknolojileri"),
	new Question("Cep telefonu, tablet, bilgisayar gibi elektronik cihazları yöneten en temel yazılıma ne denir?", ["İşletim sistemi", "Uygulama yazılımı", "Bilgisayar", "Patron yazılım"], "İşletim sistemi"),
	new Question("Tübitak tarafından geliştirilen Türkiye’nin milli işletim sistemi aşağıdakilerden hangisidir?", ["Windows", "Android", "Pardus", "Linux"], "Pardus"),
	new Question("Aşağıda verilen lisans türlerinden hangisinin bazı özelliklerini kısıtlı bir şekilde ücretsiz kullanabiliriz?", ["Freeware Yazılım", "Demo Yazılım", "Lisanslı Yazlım", "Beta Yazılım"], "Demo Yazılım"),					
	new Question("Aşağıdakilerden hangisi programlama dili değildir?", ["C++", "Python", "Linux", "Java"], "Linux"),					
	new Question("Aşağıdakilerden hangisi bir bulut depolama hizmeti veren servistir?", ["Youtube", "Twitter", "Instagram", "Google Drive"], "Google Drive"),				
	new Question("F2 tuşunun görevi nedir?", ["Tam ekran özelliğini aktifleştirir", "Arama penceresini açar", "Genişletme penceresini açar", "Seçili dosyanın adını değiştirmeye izin verir"], "Seçili dosyanın adını değiştirmeye izin verir"),
	new Question("Bir resmi, yazıyı veya şekli bilgisayar ortamına aktarmaya yarayan donanıma ne denir?", ["CPU", "Printer", "Modem", "Scanner"], "Scanner"),
	new Question("Kötü amaçlı yazılımları temizlemek için kullanılan yazılımlara ne denir?", ["Trojan", "Virus", "Malware", "Antivirüs"], "Antivirüs"),
	new Question("Aşağıdaki şifrelerden hangisi diğerlerine göre daha güvenilir ve kırılması daha zordur?", ["A12345", "Abc123", "Wz149-Mac", "Wyz123hbn"], "Wz149-Mac"),
	new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

let randQuestions = [];
let rand;
let i = 0;
	do{ rand = questions[Math.floor(Math.random()*questions.length)];
		if (!randQuestions.includes(rand)){
			randQuestions.push(rand);}
		else{i--;}
		i++;
	}while (i < 10);

let quiz = new Quiz(randQuestions);

run();




