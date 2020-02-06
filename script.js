
var males=["Aman" , "Oliver", "Harry" , "Jack" , "George" , "Oscar" , "Harsh" , "Charlie" , "Jacob" , "Logan" , "Thomas" , "Rohit" ,
"Issac" , "Teddy" , "Daniel", "Rajesh" , "kulbhushan" , "Ramesh" , "Dilip" , "Atharv" , "Akshat" , "Amay"];


var females=["Emma" , "Olivia" , "Ava" , "Isabella" , "Mia" , "Harper" , "Elizabeth" , "Alice" , "Cora" , "Hailey" , "Isla" , "Piper" ,
"Violet" , "Bella" , "Sophie" , "Soumya" , "Shreya" , "Akshita" , "Dipti" , "Sonam" , "Neha" , "Lata" , "Sunita"];



var names = Array();
var regx = /[@#$%``%^&*+=_0-9]/;
function Add() {
  var name = document.getElementById("names_input").value;


  if (!isNaN(name) || regx.test(name)) {
    alert("Enter Valid names !!");
  } else {
    // console.log(names.length);
    if (names.length==15) {
      document.getElementById("add_names").style.display='none';
      document.getElementById("submit_names").style.display='block';
    }
    else{
      names.push(name);
      if (names.length <=15) {
        for (i = 0; i < names.length; i++) {
          var x = "";
          x = x + names[i] + "<br>";

          document.getElementById("show_names").innerHTML = names;
          localStorage.setItem("names", JSON.stringify(names));

        }
      } else {
        alert("You can enter only 15 values");

      }
    }

  }

}

function validate() {


var x, text="";
  x = document.getElementById("number_input").value;

  if(isNaN(x)){
    document.getElementById("name_container").style.display="none";
    text="Invalid Input! Please enter only numeric values!!";
    document.getElementById("demo").innerHTML=text;

  }
  else if (isNaN(x) || x < 1 || x > 15) {
    document.getElementById("name_container").style.display="none";
    text = " Invalid Input! Please enter number between 1 - 15 .";
    document.getElementById("demo").innerHTML=text;
}

  else {

    document.getElementById("name_container").style.display="block";
      document.getElementById("demo").innerHTML="";
    var country;
    var gender;

    country=document.getElementById("country_name").value;
    gender=document.getElementById("gender").value;
    //
    // if(country=="Australia" && gender=="Male"){
    //   var test=localStorage.getItem("name");
    //   alert(test);
    // }
    var count,i;
    count=document.getElementById("number_input").value;
    if(gender=="Male"){

      for(i=1; i<=count;i++){
        text+=i + ". " + males[i] + "<br>";

         document.getElementById("name_container").innerHTML = text;

      }
    }

    if(gender=="Female"){
      for (i = 1; i <= count; i++) {
        text+= i +". " + females[i]+ "<br>";
        // document.getElementById("number_input").style.display="block";
        document.getElementById("name_container").innerHTML = text;
    }
    }

  }
}
