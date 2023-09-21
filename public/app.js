function student_total_marks(){
    const marks = document.getElementsByClassName("student4").value;
    const total_mark_per_Student = sum(marks)
    console.log(total_mark_per_Student)
    document.getElementById("result1").innerHTML = sum(total_mark_per_Student)
}