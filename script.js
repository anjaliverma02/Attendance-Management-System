let students = [];

function addStudent(){

    let name = document.getElementById("studentName").value;

    if(name==""){
        alert("Enter Student Name");
        return;
    }

    students.push({
        name:name,
        status:"Absent"
    });

    document.getElementById("studentName").value="";

    displayStudents();
}

function displayStudents(){

    let list=document.getElementById("studentList");

    list.innerHTML="";

    let present=0;
    let absent=0;

    for(let i=0;i<students.length;i++){

        if(students[i].status=="Present"){
            present++;
        }else{
            absent++;
        }

        list.innerHTML += `
        <tr>

        <td>${students[i].name}</td>

        <td class="${students[i].status=="Present" ? "present":"absent"}">
        ${students[i].status}
        </td>

        <td>
            <button onclick="toggleAttendance(${i})">
            Mark ${students[i].status=="Present" ? "Absent":"Present"}
            </button>
        </td>

        <td>
            <button onclick="deleteStudent(${i})">
            Delete
            </button>
        </td>

        </tr>
        `;
    }

    document.getElementById("total").innerHTML=students.length;
    document.getElementById("present").innerHTML=present;
    document.getElementById("absent").innerHTML=absent;

}

function toggleAttendance(index){

    if(students[index].status=="Present"){
        students[index].status="Absent";
    }
    else{
        students[index].status="Present";
    }

    displayStudents();

}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}
