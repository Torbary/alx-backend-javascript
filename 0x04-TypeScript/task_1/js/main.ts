// main.ts

interface StudentData {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  //private lastName: string;

  constructor(data: StudentData) {
    this.firstName = data.firstName;
    //this.lastName = data.lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a student object using the StudentClass
const studentData: StudentData = {
  firstName: 'John',
  lastName: 'Doe',
};

const student: StudentClassInterface = new StudentClass(studentData);

console.log(student.displayName()); // Output: "John"
console.log(student.workOnHomework()); // Output: "Currently working"
