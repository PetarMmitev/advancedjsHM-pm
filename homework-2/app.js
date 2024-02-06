console.log("its working");

const STUDENT_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let averageAgeaverageGrade = "";
let overSixtyUnderThirty = "";
let overThirtyAverageFour = [];
let findStudent = "";

const renderData = () => {
  const p1 = document.createElement("p");
  p1.textContent = averageAgeaverageGrade;
  document.body.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = overSixtyUnderThirty;
  document.body.appendChild(p2);

  const ul = document.createElement("ul");
  const ulinnerHTML = overThirtyAverageFour.map(
    (student) => `<li>${student}</li>`
  );
  ul.innerHTML = ulinnerHTML;
  document.body.appendChild(ul);
};

const fetchStudentsAsync = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();
    console.log(data);
    const averageAge =
      data.reduce((acc, current) => acc + current.age, 0) / data.length;

    const averageGrade =
      data.reduce((acc, current) => acc + current.averageGrade, 0) /
      data.length;
    averageAgeaverageGrade = `Average age ${averageAge} Average grade ${averageGrade} `;
    const overSixty = data.filter((student) => student.age > 60);
    const underThirty = data.filter((student) => student.age < 30);
    overSixtyUnderThirty = `Number of students over 60 ${overSixty.length} Number of students under thirty ${underThirty.length}`;

    overThirtyAverageFour = data
      .filter((student) => student.age > 30 && student.grade >= 4)
      .map(
        (student) =>
          `${student.firstName}  ${student.lastName} - ${student.city}`
      );
    const findStudent = data.find((student) => student.length === "Arthur");

    renderData();
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong in fetch users");
  }
};

fetchStudentsAsync();
