function per_student_total_marks(){
    const marks = document.getElementsByClassName("student4").value;
    console.log(marks)
    const sum = 0
    marks.array.forEach(element => {
        sum+=element;
    });
    const total_mark_per_Student = sum
    console.log(total_mark_per_Student)
    document.getElementById("result1").innerHTML = sum(total_mark_per_Student)
}