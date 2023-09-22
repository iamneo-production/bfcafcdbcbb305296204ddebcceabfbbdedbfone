function per_student_total_marks(){
    const student_total_marks = document.querySelectorAll(".result")
    console.log(student_total_marks)
    const total_marks=0
    
    for(let i=0;i<student_total_marks.length;i++){
        console.log(student_total_marks[i].nodeValue)
        total_marks =total_marks+ student_total_marks[i].nodeValue
    }
    console.log(total_marks)
}