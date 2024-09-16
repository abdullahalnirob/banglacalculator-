let submit = document.getElementById("submit");
let radioOne = document.getElementById("radio-one")
let radioTwo = document.getElementById("radio-two")
let radioThree = document.getElementById("radio-three")
let radioFour = document.getElementById("radio-four")
submit.onclick = function () {
    if(radioOne.checked){
        let number1 = Number(document.getElementById("number1").value)
        let number2 = Number(document.getElementById("number2").value)
        document.getElementById("result").innerHTML = number1+number2
    }
    else if(radioTwo.checked){
        let number1 = Number(document.getElementById("number1").value)
        let number2 = Number(document.getElementById("number2").value)
        document.getElementById("result").innerHTML = number1-number2
    }
    else if(radioThree.checked){
        let number1 = Number(document.getElementById("number1").value)
        let number2 = Number(document.getElementById("number2").value)
        document.getElementById("result").innerHTML = number1*number2
    }
    else if(radioFour.checked){
        let number1 = Number(document.getElementById("number1").value)
        let number2 = Number(document.getElementById("number2").value)
        document.getElementById("result").innerHTML = number1/number2
    }
    else{
        document.getElementById("result").innerHTML = "Erorr!!"
        Swal.fire({
            title: "মেথড সিলেক্ট করা হয়নি।",
            text: "দয়া করে একটি মেথড সিলেক্ট করুন।",
            icon: "question"
            
          });
    }
}
let open =document.getElementById("open").onclick=function(){
    window.open("https://www.facebook.com/dev.abdullahalnirob/")
}