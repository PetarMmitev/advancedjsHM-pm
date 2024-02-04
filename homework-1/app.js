const STUDENT_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let stundentsGrade = [];
let femaleStudents = [];
let maleStudents = [];
let averageGradeFemale = [];
let maleStudentsB = [];

const logUsers = () => {
  console.log("average grade higher than 3", stundentsGrade);
  console.log(
    "female student names with an average grade of 5",
    femaleStudents
  );
  console.log(
    "male student full names who live in Skopje and are over 18 years old",
    maleStudents
  );
  console.log(
    "average grades of all female students over the age of 24",
    averageGradeFemale
  );
  console.log(
    "male students with a name starting with B and average grade over 2",
    maleStudentsB
  );
};

const fetchStudents = () => {
  fetch(STUDENT_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      stundentsGrade = data.filter((student) => student.averageGrade > 3);
      femaleStudents = data
        .filter(
          (student) => student.gender === "Female" && student.averageGrade === 5
        )
        .map((student) => student.firstName);

      maleStudents = data
        .filter(
          (student) =>
            student.city === "Skopje" &&
            student.age > 18 &&
            student.gender === "Male"
        )
        .map((student) => `${student.firstName} ${student.lastName}`);
      averageGradeFemale = data
        .filter((student) => student.gender === "Female" && student.age > 24)
        .map((student) => student.averageGrade);
      maleStudentsB = data.filter(
        (student) =>
          student.firstName[0] === "B" &&
          student.gender === "Male" &&
          student.averageGrade > 2
      );
      logUsers();
    })
    .catch((error) => console.log(error));
};

fetchStudents();
