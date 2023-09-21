function per_student_total_marks(){
    const marks = document.getElementsByClassName("student1")   ;
    console.log(marks)
    const sum=0
    marks.forEach(element => {
        sum+=element;
    });
    console.log(sum)
}