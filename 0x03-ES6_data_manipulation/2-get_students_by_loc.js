/**
	* @param id: Number, firstName: string, location: string
	* @author Abdullah Ismail <https://github.com/Torbary>
	* @returns
	*/
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
		return students.filter((student) => student.location === city);
	}
	return [];
}
