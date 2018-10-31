class Course{
    constructor(id,time,date,rooms){
        this.id = id;
        this.time = time;
        this.date = date;
        this.rooms = rooms;
    }
    toString(){
        return this.id;
    }
}
class Student{
    constructor(id,name,gpa,courses){
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    toString(){
        return this.id;
    }
}
class Database{
    constructor(){
        this.courses = new Map();
        this.students = new Map();
        this.readStudents();
        this.readCourses();
}
readStudents(){
	let url = "https://maeyler.github.io/JS/data/Students.txt"
	fetch(url)
		.then(r => r.text()).then(r => this.addStudents(r))
}
readCourses(){
	let url = "https://maeyler.github.io/JS/data/Courses.txt"
	fetch(url)
		.then(r => r.text()).then(r => this.addCourses(r))
}
addStudents(txt){
    let m=txt.length;
    let x=txt.split("\n");
		m+=x.length;
    for(let line of x){
		let y=line.split("\t");
		let id=y[0],name=y[1],gpa=y[2];
		let courses=[];
		for(let i=3;i<y.length;i++){ 
			courses.push(y[i]);}
		let s=new Student(id,name,gpa,courses);
		this.students.set(s.id,s);}      
}
addCourses(txt){
    let m=txt.length;
    let x=txt.split("\n");
		m+=x.length;
    for(let line of x){
        let y=line.split("\t");
        let id=y[0],time=y[1],date=y[2];
        let rooms=[];
        for(let i=3;i<y.length;i++){
            rooms.push(y[i]);}
		let c=new Course(id,time,date,rooms);
		this.courses.set(c.id,c);}
}
clearOutput(){
	out.innerText="";
	return out.innerText;
}
randomStudent(){
    let k=Array.from(this.students.keys())
    let s=this.students.get(k[Math.trunc(k.length * Math.random())]);
	out.innerText+="\n"+(s.id +" "+ s.name +" "+ s.gpa + " GPA");
    return out.innerText;
}
aboveGPA(gpa){
    let count=0;
    for(let s of this.students.values())
        if(s.gpa>gpa)
			count+=1;
	out.innerText="NUMBER OF THE STUDENTS ABOVE "+gpa+" GPA: "+count;
	return out.innerText;
}
takenCourses(id){
    let s=this.students.get(id);
	out.innerText="\n\n"+(s.id+" "+s.name+" COURSES:\n\n"+s.courses);
	return out.innerText;
}
examSchedules(id){
    let s=this.students.get(id);
    let schedule=s.id+" "+s.name+" EXAM SCHEDULE:\n";
	for(let x of s.courses){
        let y = this.courses.get(x)
		schedule+="\n" +y.id+" / "+y.date+" / "+y.time+" / "+y.rooms;}
	out.innerText="\n\n"+schedule;
	return out.innerText;
}
courseStudents(id){
    let cs=id+" COURSE STUDENTS:\n";
    for(let x of this.students.values()) {
    	for(let y of x.courses){ 
			if(y==id){cs+="\n"+x.id+" "+x.name;}}}
	out.innerText="\n\n"+cs;
	return out.innerText;
}
examroomCourses(id){
	let erCourses=id+" EXAM ROOM COURSE LIST:\n";
    for(let x of this.courses.values()) {
		for(let y of x.rooms){ 
			if(y==id){erCourses+="\n"+x.id;}}}
	out.innerText="\n\n"+erCourses			
	return out.innerText;
}
examroomCount(id){
	let count=0;
    for(let x of this.courses.values()) {
		for(let y of x.rooms){ 
			if(y==id){count+=1;}}}
	out.innerText="NUMBER OF THE EXAM ROOM COURSES: " + count;
	return out.innerText;
}
}