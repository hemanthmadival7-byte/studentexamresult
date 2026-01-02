let students = [];

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);
    let m3 = parseInt(document.getElementById("m3").value);

    if (!id || !name || isNaN(m1) || isNaN(m2) || isNaN(m3)) {
        alert("Please enter all fields correctly");
        return;
    }

    if (m1 < 0 || m2 < 0 || m3 < 0 || m1 > 100 || m2 > 100 || m3 > 100) {
        alert("Marks must be between 0 and 100");
        return;
    }

    let total = m1 + m2 + m3;
    let avg = (total / 3).toFixed(2);
    let grade = calculateGrade(avg);

    students.push({ id, name, total, avg, grade });
    displayStudents(students);
    clearFields();
}

function calculateGrade(avg) {
    if (avg >= 85) return "A";
    if (avg >= 70) return "B";
    if (avg >= 50) return "C";
    return "Fail";
}

function displayStudents(list) {
    let table = document.getElementById("resultTable");
    table.innerHTML = "";

    list.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.total}</td>
                <td>${s.avg}</td>
                <td>${s.grade}</td>
            </tr>
        `;
    });
}

function searchStudent() {
    let key = document.getElementById("search").value.toLowerCase();
    let filtered = students.filter(s =>
        s.id.toString() === key || s.name.toLowerCase().includes(key)
    );
    displayStudents(filtered);
}

function sortByMarks() {
    students.sort((a, b) => b.total - a.total);
    displayStudents(students);
}

function sortByGrade() {
    const order = { "A": 1, "B": 2, "C": 3, "Fail": 4 };
    students.sort((a, b) => order[a.grade] - order[b.grade]);
    displayStudents(students);
}

function clearFields() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
}
