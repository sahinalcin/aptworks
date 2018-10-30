class Course {
    constructor (id, time, date, rooms) {
        this.id= id;
        this.time = time;
        this.date = date;
        this.rooms = rooms;
    }
    toString () {
        return this.id;
    }
}
class Student {
    constructor (id, name, gpa, courses) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    toString () {
        return this.id;
    }
}
class Database{
    constructor () {
        this.courses = new Map();
        this.students = new Map();
        this.readStudents();
        this.readCourses();
}

readStudents(){
var url = "https://sahinalcin.github.io/aptworks/HW2/Students.txt"
        fetch(url)
        .then(res => res.text()).then(res => [this.addStudents(res)])
}

addStudents(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    for (let line of a) {
        let b = line.split("\t");
    	   let id = b[0], name = b[1], gpa = b[2];
    	   let list = [];
    	   for (let i=3; i<b.length; i++){ 
				list.push(b[i]);}
    const std = new Student (id, name, gpa, list);
    this.students.set(std.id, std);}      
}

readCourses() {
     var url = ""https://sahinalcin.github.io/aptworks/HW2/Courses.txt"
        fetch(url)
        .then(res => res.text()).then(res => [this.addCourses(res)])
}

addCourses(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    for (let line of a) {
         let b = line.split("\t");
         let id = b[0], time = b[1], date = b[2];
         let list = [];
         for (let i=3; i<b.length; i++){
              list.push(b[i]);}
	const course = new Course (id, time, date, list)
	this.courses.set(course.id, course)
    }
}

randomStudent() {
    const keys = Array.from(this.students.keys())
    let key = keys[Math.trunc(keys.length * Math.random())];
    let std = this.students.get(key);
    return std.id +" "+ std.name;
}

aboveGPA(gpa) {
    let b = 0;
    for (let std of this.students.values()) 
        if (std.gpa > gpa) b =b+1;
	return "NUMBER OF THE STUDENTS ABOVE "+gpa+" GPA: "+b;
}

takenCourses(id) {
    let std=this.students.get(id);
		return std.id+" "+std.name+" COURSES:\n\n"+std.courses;
}

examSchedules(id) {
	let lessons;
    let std=this.students.get(id);
    let a=std.id+" "+std.name+" EXAM SCHEDULE:\n";
	lessons=std.courses;
	for (let lesson of lessons){
        let c=this.courses.get(lesson)
		a=a+"\n"+c.id+" "+ c.time+ " "+ c.date+ " "+ c.rooms;}
        return a;
}

courseStudents(id) {
    let lessons;
    let s=id +" COURSE STUDENTS:\n";
    for (let std of this.students.values()) {
    	for (let d of std.courses){ 
			if(d==id){
			s=s+"\n"+std.id+"  "+std.name;}}}
	return s;
}

courseList(id){
	let list=id+ " EXAM ROOM LESSON LIST:\n";
    for (let c of this.courses.values()) {
		for (let r of c.rooms){ 
			if(r==id){
				list=list+"\n"+c.id;}}}
	return list;
}

examroomCount(id){
	let count=0;
    for (let c of this.courses.values()) {
		for (let r of c.rooms){ 
			if(r==id){
				count=count+1;}}
    }
	return "NUMBER OF THE EXAM ROOM LESSONS: "+ count;
}
}