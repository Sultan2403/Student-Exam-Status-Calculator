// Variables for feedback

let Student_Name_Text_Field = document.getElementById("Student-Name");
let Ass_1_Text_Field = document.getElementById("Ass-1-text-field");
let Ass_2_Text_Field = document.getElementById("Ass-2-text-field");
let Final_Exam_Score_Text_Field = document.getElementById("Final-exam-score");
let Overall_Score_Text_Field = document.getElementById("student-overall-score");
let button = document.getElementById("btn")
let remarks = document.getElementById("remark_text_field")
let extra_info = document.getElementById("extra-info")


button.addEventListener("click", function () {

    // Variables for calculations...... gotten from user input btw

    let Student_Name = document.getElementById("name-of-student").value;
    let Ass_1 = parseFloat(document.getElementById("Ass-1").value);
    let Ass_2 = parseFloat(document.getElementById("Ass-2").value);
    let Exam_Score = parseFloat(document.getElementById("Exam-Score").value);

    // Logic and shii ;)

    let ass_average = (Ass_1 + Ass_2) / 2;
    let overall_score = (ass_average * 0.4) + (Exam_Score * 0.6);


    // Checking for a valid name

    if (Student_Name.trim() === "" || !isNaN(Student_Name)) {
        extra_info.textContent = "Enter a valid name!";
        console.log("Enter a valid name!")
        return;
    }

    // Max Ass score

    // To be implemented tomorrow befor submission

    // Special case for eggxellent students :);

    else if (overall_score >= 90) {
        let Is_Excellent = (Student_Name + " is excellent with a score of " + overall_score);
        extra_info.textContent = Is_Excellent;
        remarks.textContent = "Excellent"
        console.log(Is_Excellent)
    }
    // Smart guys who pass :)

    else if (overall_score >= 70) {
        let student_has_passed = (Student_Name + "passed with a score of" + overall_score);
        extra_info.textContent = student_has_passed;
        remarks.textContent = "Pass"
        console.log(student_has_passed)
    }

    // Failures Section :)

    else if (overall_score < 70) {
        let student_is_a_failure = (Student_Name + " failed with a score of " + overall_score);
        extra_info.textContent = student_is_a_failure;
        remarks.textContent = "Fail"
        console.log(student_is_a_failure)
    }

    // Updating the table

    Student_Name_Text_Field.textContent = Student_Name;
    Ass_1_Text_Field.textContent = Ass_1;
    Ass_2_Text_Field.textContent = Ass_2;
    Overall_Score_Text_Field.textContent = overall_score;
    Final_Exam_Score_Text_Field.textContent = Exam_Score;
})
