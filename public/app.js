function per_student_total_marks(){
    let student_total_marks = document.querySelectorAll(".result")
    console.log(student_total_marks)
    let total_marks=0
    
    for(let i=0;i<student_total_marks.length;i++){

        total_marks += parseFloat(student_total_marks[i].innerHTML)
    }
    window.alert(total_marks)
}