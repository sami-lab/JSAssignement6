//                      chap 21-25 
// task 1
var first_name = prompt("Enter your first name");
var last_name = prompt("Enter your last name");
var full_name = (first_name + last_name);
alert("Welcome" + full_name);

// task 2

var str = prompt("Enter your favourite mobile phone model");
var display_length = str.length;
document.write("My favourite phone is : " + str);
document.write("Length Of string is : " + display_length);

// task 3

var value = "Pakistani"
var val_index = value.indexOf("n");
document.write("String : " + value);
document.write("Index of 'n' is " + val_index);


// task 4
var str1 = "Hello World";
var indexNum = str_1.lastIndexOf("l")
document.write("String :" + str1);
document.write("The last index of 'l' is :" + indexNum)

// task 5

var value = "Pakistani"
var char = value.charAt(3);
document.write("String " + value);
document.write("Character at index 3 is " + char);

// task 6

var firstName_1 = prompt("Enter your first name");
var LastName_2 = prompt("Enter your last name");
var fullName_1 = firstName_1.concat(" " + LastName_2)
alert("Hello" + "," + " " + fullName_1 + "!");

// task 7
var city = "Hyderabad";
var rep = city.replace("Hyder", "Islam");
document.write("City :" + city);
document.write("After Replacement" + rep);

// task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep = message.replace(/and/g, "&");
document.write(rep);

// task 9
var str = "472";
var type = typeof (str);
document.write("Value " + str);
document.write("Type " + type);
var val = Number(str);
document.write("Value " + val);
var type1 = typeof (val);
document.write("Type " + type1);

// task 10
var inp = prompt("Enter any word ");
var cap = inp.toUpperCase();
document.write("User Input " + inp);
document.write("Upper Case " + cap);

// task 11
var Userinput = prompt("Enter any word ");
var copy = Userinput.slice(0, 1);
var other_char = Userinput.slice(1);
copy = copy.toUpperCase();
other_char = other_char.toLowerCase();
inp = copy + other_char;
document.write(inp);

// task 12
var num = 35.36;
var withoutDot = num.toString().replace(".", "");
document.write("Number" + ":" + " " + num + "<br>")
document.write("Result" + ":" + " " + withoutDot)

// task 13
var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("Please enter a valid Username");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

// task 14

var sear = prompt("Enter your Choice");
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

if(A.includes(sear.toLowerCase())){
   const i = A.indexOf(sear.toLowerCase());
   alert(`${sear} is available in our bakery at index ${i}`)
}
else{
   alert("We are sorry Item is not available in our bakery")
}


// task 15

var pas = prompt("Enter password");
var passw=  /^[A-Za-z]\w{7,14}$/;
if(pas.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}

// task 16
var university = "University of Karachi";
const c = university.split('');
c.forEach(t=> alert(t));

// task 17
var inp = prompt("Enter user input");
var last_char = inp.charAt(inp.length - 1);
document.write("User Input " + inp);
document.write("Last Character of input is " + last_char);

// task 18

var temp = "The quick brown fox jumps over the lazy dog";

function countOcurrences(str, value) {
   var regExp = new RegExp(value, "gi");
   return (str.match(regExp) || []).length;
}

console.log(countOcurrences(temp, 'the'));
document.write("Text " + temp);
document.write(countOcurrences(temp, 'the'));

//                        chap 26-30 
// task 19 
// a
var num = prompt("Enter any positive number");
document.write("Number " + num);

// b
document.write("round Off value is " + Math.round(num));

// c
document.write("Floor value is " + Math.floor(num));

// d
document.write("Ciel value is " + Math.ceil(num));

// task 20
var num = prompt("Enter any negative number");
document.write("Number " + num);

// b
document.write("round Off value is " + Math.round(num));

// c
document.write("Floor value is " + Math.floor(num));

// d
document.write("Ciel value is " + Math.ceil(num));

// task 21
var num1 = prompt("Ente a number");
var abs = Math.abs(num1);
document.write(" The absolute value of " + num1 + "is" + abs);

// task 22
var diceRoll_1 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_1);
var diceRoll_2 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_2);

// task 23
var coin_1 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_1 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_1 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}
var coin_2 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_2 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_2 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}

// task 24
var b = Math.floor((Math.random() * 100) + 1);
document.write(b)

// task 25
var weight = prompt("Enter your weight");

// a
document.write(parseInt(weight))

// b

document.write(weight);

// c ,d
document.write(parseFloat(weight));

// task 26
var secret_num = Math.floor((Math.random() * 10) + 1);
var user_num = +prompt("Enter any number between 1 to 10");
if (user_num === secret_num) {
   alert("Congratulations! Your number is equal")
} else ("Try Again! ")


//                            chap 31 -34 
// task 27
var a = new Date();
document.write(a);

// task 28
var monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

var d = new Date();
alert("The current month is " + monthNames[d.getMonth()]);

// task 29
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
alert("Today is" + " " + dayNames[d.getDay()]);

// task 30
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday == dayNames[0] || nameOfToday == dayNames[6]) {
   alert("It's Fun day")
} else ("It's working day");

// task 31
var now = new Date()
var theDate = now.getDate()
if(theDate >= 1 && theDate <= 15){
    alert("First fifteen days of the month")
}
else if (theDate > 15 && theDate <= 31){
    alert("Last days of the month")
}
else{
    alert("You put inappropriate Date")
}

// task 32
var startDate = "1970-1-1";
var timeDiff  = (new Date()) - (new Date(startDate));
var days      = timeDiff;
var days_1 = timeDiff / 1000;
document.write("Current date:" + " " + new Date() + "<br>")
document.write("Elapsed milliseconds since January 1, 1970:" + " " + days + "<br>")
document.write("Elapsed minutes since January 1, 1970:" + " " + days_1)

// task 33
var today = new Date();
if(today.getHours() == 0 || today.getHours() < 12 ) 
alert("It's AM");
else{
alert("It's PM")
}

// task 34
var laterDate = new Date(2020, 11, 31, 10, 33, 30, 0);
document.write(laterDate);

// task 35
var startDate = "2020-6-21";
var endDate   = "2020-4-25";
var timeDiff  = (new Date(startDate)) - (new Date(endDate));
var days      = timeDiff / (1000 * 60 * 60 * 24);
document.write(days + " " + "days have passed since 1st Ramadan, 2020");

// task 36
var startDate = "2015-1-1";
var timeDiff  = (new Date()) - (new Date(startDate));
var days_1 = timeDiff / 1000;
document.write("On reference date" + " " + new Date() + "," + "<br>" + days_1 + " " + "seconds had passed since begining of 2015")


// task 37
var d = new Date();
document.write( "current date" + ":" + " " + d +"<br>");
var b = d.getHours();
 d.setHours(b-1);
document.write( "1 hours ago, it was" + " " + d);




// task 38
var d = new Date();
document.write( "current date" + ":" + " " + d + "<br>");
var bd = d.getFullYear();
 d.setFullYear(bd-100);
document.write( "100 years back, it was" + " "  + d);



// task 39
var age = prompt("Enter your age");
var currentyear = 2020;
var birthyear = currentyear - age;
document.write("Your age is! " + age);
document.write("Your birth year is! " + birthyear);

// task 40
document.write("K-ELECTRIC BILL" + "<br>" + "<br>")
document.write("Customer name: Sami" + "<br>");
var d = new Date();
document.write("Month: June" + "<br>");
var nunit = 410;
var cunits = 16;
document.write("Number of units: " + nunit + "<br>");
document.write("Charges per units: " + cunits + "<br>" + "<br>");
var net = 410*16;
var gross= net + 350;
document.write("Net Amount Payable (within Due Date): " + net + "<br>");
document.write("Late payment surcharge: 350 "  + "<br>");
document.write("Gross Amount Payable (after Due Date): " + gross);


//                                 chap 31-34
// task 41
function date(){
   var a = new Date()
   document.write(a)
}
date()

// task 42
function name(){
   var firstName = prompt("Enter first Name");
var lastName = prompt("Enter last Name");
var fullName;
fullName = firstName + " " + lastName;
alert("Welcome" + "," + " " + fullName + "!");
}
name();


// task 43
function add(a,b){
   var z = a + b
   return z
}
var g = add(5,8)
alert(g)

// task 44
function calc(num1, num2, opr) {
   if (opr == '+') {
      return num1 + num2;
      alert("sum " + (num1 + num2));
   }
   else if (opr == "-") {
      return (num1 - num2);
   }
   else if (opr == "*") {
      return (num1 * num2);
   }
   else if (opr == "/") {
      return (num1 / num2);
   }
   else if (opr == "%") {
      return (num1 % num2);
   }
   else {
      return 0;
   }

}
var result = calc(5 , 10, '-');
document.write("Result is " + result);

// task 45

function squareIt(number) {
   return Math.pow(number, 2);
}
alert(squareIt(5));


// task 46
function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(10)); 

// task 47
Counting(1,10);
function Counting(num1,num2){
   const ele=  document.getElementById('e');
   for(var i=num1; i<= num2; i++){
      ele.innerHTML += i;
   }
}


// task 48

var base = prompt("Enter  Base");
var perp = prompt("Enter Perpendicular");
alert(calculateHypotenuse(base,perp));
function calculateHypotenuse(base,perp){
   return calculateSquare(base)+calculateSquare(perp);
}

function calculateSquare(x){
   return x*x;
}

// task 49
const W= 2;
const H= 3;
alert(CalculateArea(W,H));
function CalculateArea(W,H){
    return W*H;
}


// task 50 
function check_Palindrome(str_entry){
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
    if(cstr==="") {
       document.write("Nothing found!");
        return false;
    }
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        if (cstr.length === 1) {
           document.write("Entry is a palindrome." + "<br>");
            return true;
        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1-x)[0]) {
           document.write("Entry is not a palindrome." + "<br>");
            return false;
        }
    }
    document.write("The entry is a palindrome." + "<br>");
    return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');


// task 51
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// task 52
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word("Web Development Tutorial"));


// task 53
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("The number occurence of 'o' is:" + " " + char_count("JSResourceS.com", "o"));


// task 54
function calcCircumference(radius){
   return 2 * 3.142 * radius
}
var circum = calcCircumference(3);
document.write("The circumference is " + circum);


function calcArea(radius){
   return  3.142 * radius * radius
}
var calcarea = calcArea(5);
document.write("The Area is " + calcarea);