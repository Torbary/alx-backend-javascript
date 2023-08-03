function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teacher: printTeacherFunction = printTeacher;
const formattedName = teacher("John", "Doe");
console.log(formattedName);
