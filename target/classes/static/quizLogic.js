var questionnum = 1
var navq2 = false
var navq3 = false
var navq4 = false

document.getElementById("Question2").style.display = "none"
document.getElementById("Question3").style.display = "none"
document.getElementById("Question4").style.display = "none"
document.getElementById("navprev").disabled = true
document.getElementById("navnext").disabled = true
document.getElementById("submitbutton").disabled = true
document.getElementById("result").style.display = "none"

document.getElementById("1answer1").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
});
document.getElementById("1answer2").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
});
document.getElementById("1answer3").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
});
document.getElementById("1answer4").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
});

document.getElementById("2answer1").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq2 = true
});
document.getElementById("2answer2").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq2 = true
});
document.getElementById("2answer3").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq2 = true
});
document.getElementById("2answer4").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq2 = true
});

document.getElementById("3answer1").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq3 = true
});
document.getElementById("3answer2").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq3 = true
});
document.getElementById("3answer3").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq3 = true
});
document.getElementById("3answer4").addEventListener("click", function() {
    document.getElementById("navnext").disabled = false
    navq3 = true
});

document.getElementById("4answer1").addEventListener("click", function() {
    navq4 = true
    
    if(navq2 && navq3 && navq4)
    {
        document.getElementById("submitbutton").disabled = false
    }
});
document.getElementById("4answer2").addEventListener("click", function() {
    navq4 = true

    if(navq2 && navq3 && navq4)
    {
        document.getElementById("submitbutton").disabled = false
    }
});
document.getElementById("4answer3").addEventListener("click", function() {
    navq4 = true

    if(navq2 && navq3 && navq4)
    {
        document.getElementById("submitbutton").disabled = false
    }
});
document.getElementById("4answer4").addEventListener("click", function() {
    navq4 = true

    if(navq2 && navq3 && navq4)
    {
        document.getElementById("submitbutton").disabled = false
    }
});


document.getElementById("navnext").addEventListener("click", function() {
    if(questionnum == 1)
    {
        document.getElementById("navprev").disabled = false
        document.getElementById("Question1").style.display = "none"
        document.getElementById("Question2").style.display = "inline"

        if(navq2 == false)
        {
            document.getElementById("navnext").disabled = true
        }
    }

    else if(questionnum == 2)
    {
        document.getElementById("Question2").style.display = "none"
        document.getElementById("Question3").style.display = "inline"

        if(navq3 == false)
        {
            document.getElementById("navnext").disabled = true
        }
    }

    else if(questionnum == 3)
    {
        document.getElementById("Question3").style.display = "none"
        document.getElementById("Question4").style.display = "inline"
        document.getElementById("navnext").disabled = true
    }

    if(questionnum < 4)
    {
        questionnum += 1
    }
});

document.getElementById("navprev").addEventListener("click", function() {

    if(questionnum == 4)
    {
        document.getElementById("Question4").style.display = "none"
        document.getElementById("Question3").style.display = "inline"
        document.getElementById("navnext").disabled = false
    }

    if(questionnum == 3)
    {
        document.getElementById("Question3").style.display = "none"
        document.getElementById("Question2").style.display = "inline"
    }

    if(questionnum == 2)
    {
        document.getElementById("Question2").style.display = "none"
        document.getElementById("Question1").style.display = "inline"
        document.getElementById("navprev").disabled = true
    }
    
    if(questionnum > 1)
    {
        questionnum -= 1
    }
    document.getElementById("navnext").disabled = false
    
});

document.getElementById("submitbutton").addEventListener("click", function() {
    var numcorrect = 0
    if(document.getElementById("1answer1").checked)
    {
        numcorrect += 1
    }

    if(document.getElementById("2answer3").checked)
    {
        numcorrect += 1
    }

    if(document.getElementById("3answer2").checked)
    {
        numcorrect += 1
    }

    if(document.getElementById("4answer4").checked)
    {
        numcorrect += 1
    }

    console.log(numcorrect + "/4")

    document.getElementById("result").style.display = "inline"
    document.getElementById("result").textContent="Your Score: " + numcorrect + " / 4";

    document.getElementById("feedbackq1").style.display = "inline"
    document.getElementById("feedbackq2").style.display = "inline"
    document.getElementById("feedbackq3").style.display = "inline"
    document.getElementById("feedbackq4").style.display = "inline"

    document.getElementById("feedbackq1").textContent = "Question 1, answer: 276, your answer: " + document.querySelector('input[name="answerq1"]:checked').value
    document.getElementById("feedbackq2").textContent = "Question 2, answer: Feb 3rd, your answer: " + document.querySelector('input[name="answerq2"]:checked').value
    document.getElementById("feedbackq3").textContent = "Question 3, answer: window, your answer: " + document.querySelector('input[name="answerq3"]:checked').value
    document.getElementById("feedbackq4").textContent = "Question 4, answer: Surrey, your answer: " + document.querySelector('input[name="answerq4"]:checked').value

    

});