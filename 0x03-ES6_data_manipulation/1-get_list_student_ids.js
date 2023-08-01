/**
	* Retrives ids from a list of students
	* @param {{
	*   id: NUmber,
	*   firstName: string,
	*   location: string
	* }[]} students - The list of students
	* @author Torbary <https://github.com/Torbary>
	* @returns
	*/
export default function getListStudentIds(students) {
  if (students instanceof Array) {
		return students.map((student) => student.id);
	}
	return [];
}
