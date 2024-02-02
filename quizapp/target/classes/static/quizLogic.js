var questionnum = 1

document.getElementById("Question2").style.display = "none"
document.getElementById("Question3").style.display = "none"
document.getElementById("Question4").style.display = "none"
document.getElementById("navprev").disabled = true

document.getElementById("navnext").addEventListener("click", function() {
    if(questionnum == 1)
    {
        document.getElementById("navprev").disabled = false
        document.getElementById("Question1").style.display = "none"
        document.getElementById("Question2").style.display = "inline"
    }

    else if(questionnum == 2)
    {
        document.getElementById("Question2").style.display = "none"
        document.getElementById("Question3").style.display = "inline"
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
    
});