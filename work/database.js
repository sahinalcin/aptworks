class Course {
  constructor(n,t,d,r) {
    this.name = n
    this.time = t
	this.date = d
    this.rooms = []
  }
  toString() {
    return this.name
  }
}
class Student {
  constructor(i,n,g,c) {
    this.id = i
	this.name = n
	this.gpa = g
    this.courses = []
  } 
  toString() {
    return this.id
  }
}
class Point {
  constructor(x,y) {
    this.x = x
	this.y = y
  } 
  toString() {
    return "(" + this.x + "," + this.y + ")" 
  }
}
class Point3D extends Point {
  constructor(x,y,z) {
    super(x,y)
	this.z = z
  } 
  toString() {
    return "(" + this.x + "," + this.y + "," + this.z + ")"
  }
}
class Distance {
  constructor(k,m) {
    this.km = k;
	this.miles = m;
  }
  get Miles() {
    return Math.round(this.km * 1.8 + 32);
  }
  set Miles(value=32) {
    this.km = Math.round((value - 32) / 1.8);
  }
  toString() {
    return this.km
  }
  static fromMiles(value) {
    let t = new Distance();
    t.Miles = value;
    return t;
  }
}

class CW4 extends Menu {
  constructor() {
    super();
    this.courses = new Course("BLM305")
	this.students = new Student("1721221226")
	this.point = new Point(3,5);
	this.point3D = new Point3D(3,5,8);
    this.distance = new Distance(1200 +" km");
  }
}

