// Database
let students = JSON.parse(localStorage.getItem("students")) || [
    {
        id: 1,
        name: "Rahul",
        age: 19,
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        age: 20,
        marks: 92
    },
    {
        id: 3,
        name: "Arjun",
        age: 19,
        marks: 76
    },
    {
        id: 4,
        name: "Sneha",
        age: 20,
        marks: 64
    },
    {
        id: 5,
        name: "Kiran",
        age: 19,
        marks: 38
    }
];

// Save database
localStorage.setItem("students", JSON.stringify(students));


// Display students
function displayStudents() {

    let table = document.getElementById("studentTable");

    students.forEach(function(student) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.id;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.age;
        row.insertCell(3).innerHTML = student.marks;

    });
}

displayStudents();