const students = [];
function addStudent() {
  const name = prompt('enter the name of the student');
  const grade = parseFloat(prompt('enter the grade of the student'));
  const student = {
    name: name,
    grade: grade,
  };
  students.push(student);
  alert('student added!');
}
function viewStudents() {
  let studentList = 'list of students:\n';
  for (const student of students) {
    studentList += `${student.name}: ${student.grade}\n`;
  }
  alert(studentList);
}
