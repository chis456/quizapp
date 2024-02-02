var questionnum = 1
var navq2 = false
var navq3 = false

document.getElementById("Question2").style.display = "none"
document.getElementById("Question3").style.display = "none"
document.getElementById("Question4").style.display = "none"
document.getElementById("navprev").disabled = true
document.getElementById("navnext").disabled = true

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

    //document.getElementById("navnext").disabled = true
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