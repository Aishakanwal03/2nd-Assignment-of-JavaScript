// ******CHAPTER # 1******
// Question # 1

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName +" "+ lastName
// document.write("Welcom "+ fullName)

// Question # 2

// var mobileModel = prompt("Enter your favorite mobile model")
// for (i = 0 ; i = mobileModel.length ; i++){
//     document.write("<b>My favorite phone is:</b> " + mobileModel)
//     document.write("<br><b>Length of string is: </b>"+i)
//     break
// }

// Question # 3

// var string = "Pakistani" 
// document.write("<b>String: </b>"+ string + "<br>")  
// for (i= 0 ; i < string.length ; i++){
//     if (string[i] === "n"){
//         document.write("The index number of 'n' is: " + i + "<br>")
//     }
// }

// Question # 4

// var string = "Hello World"
// document.write("<b>String: </b>"+ string + "<br>")
// var index = string.lastIndexOf("l")
// document.write("<b>Last index of '" +string[index]+ "': </b>"+ index+ "<br>")

// Question # 5

// var string = "Pakistani" 
// document.write("<b>String: </b>"+ string + "<br>") 
// for (i= 0 ; i < string.length ; i++){
//     if (i === 3){
//         document.write("Character at index 3: " + string[i])
//     }
// }

// Question # 6

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// // var fullName = firstName +" "+ lastName
// var fullName = firstName.concat(" ", lastName)
// document.write("Welcom "+ fullName)

// Question # 7

// var string = "Hyderabad"
// var index = string.replace("Hyder", "Islam")
// document.write("<b>After replacement: </b>"+ index+ "<br>")

// Question # 8

// var string = "Ali and Sami are best friends. They play cricket and football together."
// var updatedString = string.replace("and" , "&")
// document.write(updatedString)

// Question # 9

// var string = "472"
// var number = parseInt(472)
// document.write("<br><b>Value:</b> " + string)
// document.write("<br><b>Type:</b> String ")
// document.write("<br><b>Value:</b> " + number)
// document.write("<br><b>Type:</b> Number ")

// Question # 10

// var name = prompt("Enter your name:")
// var upperCase = name.toUpperCase()
// document.write("User input: "+ name)
// document.write("<br>Upper case: "+ upperCase )

// Question # 11

// var userInput = prompt("Enter your text")
// var firstletter = userInput.slice(0, 1);
// var otherletters = userInput.slice(1);
// firstletter = firstletter.toUpperCase();
// otherletters = otherletters.toLowerCase();
// var titleCase = firstletter + otherletters;
// document.write(titleCase)

// Question # 12

// var num = 35.36
// var string =num.toString()
// var integer = string.replace("." , "")
// document.write("<b>Number: </b>"+ num)
// document.write("<b><br>Result:</b> "+integer )

// Question # 13

// var userInput = prompt("Enter your name:")
// var specialChar = "@.,!"
// for (i = 0 ; i <= specialChar.length ; i++) {
//     var charCode = specialChar.charCodeAt(i)
//     for (j = 0 ; j<= userInput.length ; j++){
//         var userCode = userInput.charCodeAt(j)
//         if (userCode == charCode){
//             alert("Enter a valid user name: ")
           
//         }
//     }
// }

// Question # 14

// var items =["cake", "apple pie", "cookies", "chips", "patties"]
// var food = prompt("Welcom to ABC Bakery.What do you want to order sir/ma'am")
// var flag = false
// for (i= 0; i < food.length; i++){
//     if (items[i] === food){
//         document.write(food+" is available at index " + i)
//         flag = true
//         break   
//     }
// }
// if (flag == false){
//     document.write("We are sorry "+food+" is not available at our bakery")
// }

// Question # 15

// var userInput = prompt("Enter Password:")
// var flag = false
// for (i = 1 ; i <= userInput.length ; i++){
//     if (userInput[i] <= 10 || userInput[i] >= 0 ){
//         flag = true
//     }
// }

// if (flag == true){

//     if (userInput[0] <= 10 && userInput[0] >= 0) {
//         alert("Invalid Password!\nPassword must begins with a letter.\nPassword must contain a number.\nPassword must be at least six characters long.")   
//     }else if (userInput.length < 6 ){
//         alert("Invalid Password!\nPassword must begins with a letter.\nPassword must contain a number.\nPassword must be at least six characters long.")
//     }else{
//         alert("Welcome :)")
//     }
// }else {
//     alert("Invalid Password!\nPassword must begins with a letter.\nPassword must contain a number.\nPassword must be at least six characters long.")
// }


// Question # 16

// var university = "University of Karachi"
// var sp = university.split("")
// for (element of sp){
//     document.write(element+"<br>")
// }

// Question # 17

// var userInput = prompt("Enter some text:")
// document.write(userInput[userInput.length - 1])

// Question # 18

// var string = "The quick brown fox jumps over the lazy dog"
// var strArray = string.split(" ")
// count = 0
// for (element of strArray){
//     if (element.toLowerCase() === "the"){
//       count++  
//     }
// }
// document.write("Text: "+string+ "<br>")
// document.write("There are "+count+ " occurances of word 'the' ")

// ******CHAPTER # 1******
// Question # 1

// var takesint = parseFloat(prompt("Enter a positive integer"))
// document.write("<b>number:</b> "+ takesint)

// var round = Math.round(takesint)
// document.write("<b><br>round off value:</b> "+ round)

// var floor = Math.floor(takesint)
// document.write("<b><br>floor value:</b> "+ floor)

// var ceil = Math.ceil(takesint)
// document.write("<b><br>ceil value:</b> "+ ceil)

// Question # 2

// var takesint = parseFloat(prompt("Enter a negagtive integer"))
// document.write("<b>number:</b> "+ takesint)

// var round = Math.round(takesint)
// document.write("<b><br>round off value:</b> "+ round)

// var floor = Math.floor(takesint)
// document.write("<b><br>floor value:</b> "+ floor)

// var ceil = Math.ceil(takesint)
// document.write("<b><br>ceil value:</b> "+ ceil)

// Question # 3

// var value = prompt("Enter value")
// var absolute = Math.abs(value)
// document.write("The absolute value of "+value+" is "+ absolute)

// Question # 4

// var dice = Math.ceil(Math.random()*6)
// document.write("Random dice value: " + dice + "<br>")

// Question # 5

// var coin = Math.ceil(Math.random()*2)

// if (coin == 2){
//     document.write( coin )
//     document.write("<br>Random coin value: Heads" )
// }else {
//     document.write(coin )
//     document.write("<br>Random coin value: Tails" )
// }

// Question # 6

// var randomNumber = Math.ceil(Math.random()*100)
// document.write("Random number between 1 and 100: " + randomNumber + "<br>")

// Question # 7

// var weight = prompt("Enter your weight in Kilograms")
// var userWeight = ""
// for (i = 0 ; i <= weight.length ; i++){
//     var code = weight.charCodeAt(i)
//     if (weight[i] <= 10 && weight[i] >= 0){
//         userWeight += weight[i]
//     }else if(code == 46){
//         userWeight += "."
//     }
// }
// userWeight = eval(userWeight)
// document.write("The weight of user is " + userWeight + "Kilogram")



// Question # 8

// var input = parseInt(prompt("Enter a number between 1 and 10:"))
// var randomNumber = Math.ceil(Math.random()*10)
// if (input === randomNumber){
//   document.write("Congratulations! You guess the right secret number")
// }else{
//   document.write("Try Again!")
// }

// ******CHAPTER # 31-34******
// Question # 1

// var date = new Date()
// document.write(date)

// Question # 2

// var date = new Date()
// var monthNames = ["January","February","March","Aprail","May","June","July","August","September","Octuber","November","December"];
// var month = date.getMonth()
// var currentMonth = monthNames[month]
// document.write("Current month: "+currentMonth)

// Question # 3

// var date = new Date()
// var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var day = date.getDay()
// var currentDay = daysName[day]
// document.write("Today is "+currentDay)

// Question # 4

// var date = new Date()
// var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var day = date.getDay()
// var currentDay = daysName[day]
// if (currentDay=== "Sun" || currentDay=== "Sat"){
//   document.write("It's Fun Day!")
// }

// Question # 5

// var date = new Date()
// var d = date.getDate()
// if (date <= 15){
//   document.write("First fifteen days of the month")
// }else{document.write("Last days of month")

// }


// Question # 6

// var currentDatetime = new Date()
// document.write("<b>Current Date: </b>"+currentDatetime)

// var millSec = currentDatetime.getTime();
// document.write("<br><b> Elapsed milliseconds since January 1 , 1970:</b> "+millSec)

// var currMins = (millSec/1000*60)
// document.write("<br><b> Elapsed minutes since January 1 , 1970: </b>"+currMins)

// Question # 7

// var date = new Date()
// var hour = date.getHours()
// if (hour <= 12 ){
//     document.write("<b>It's AM</b>")
// }else {
//     document.write("<b>It's PM</b>")
// }

// Question # 8

// var date = new Date()
// var setMonth = date.setMonth(11)
// var setDate = date.setDate(31)

// document.write("Later date: "+date)

// Question # 9
// var RamadanDate = new Date("June 18, 2015")
// var ramadanMill = RamadanDate.getTime()
// var date = new Date()
// var currentMill = date.getTime()
// var diff = currentMill - ramadanMill
// var days = diff/(1000*60*60*24)
// days = Math.round(days)
// document.write(days+ " days have passed since 1st Ramadan, 2015 ")

// Question # 10

// var refDate = new Date("Dec 5, 2015")
// var begin2015 = new Date("Jan 1,2015")
// var refMili = refDate.getTime()
// var beginMili = begin2015.getTime()
// var elapsedSec = refMili - beginMili
// elapsedSec = elapsedSec/(1000)
// document.write(elapsedSec)

// Question # 11

// var date = new Date()
// var date2 = new Date()
// var hour = date.getHours()
// var anHourAhead = date2.setHours(hour - 1)
// document.write("Current Date: "+date+ "<br>")
// document.write("1 Hour ago, it was "+date2)

// Question # 12

// var date = new Date()
// var date2 = new Date()
// var year = date.getFullYear()
// var yearsAhead = date2.setFullYear(year - 100)
// alert("Current Date: "+date+ "\n 100 years back, it was "+date2)

// Question # 13

// var date = new Date()
// var userAge= parseInt(prompt("Enter your age: "))
// var year = date.getFullYear()
// var dob = date.setFullYear(year - userAge)
// var userBirthYear = date.getFullYear()

// document.write("Your age is: "+userAge+" <br>Your Birth Year is "+userBirthYear)


// Question # 14

// var custName = "ABC Customer"
// var month = "February"
// var numOfUnits = 410
// var chargePerunit = 16

// document.write("<h1> K-Electric Bill </h1>")
// document.write("<br>Customer Name: " + custName)
// document.write("<br>Month: " + month)
// document.write("<br>Number of units: " + numOfUnits)
// document.write("<br>Charges per unit: " + chargePerunit + "<br>")
// document.write("<br>Net Amount payable (within Due Date): "+(numOfUnits*chargePerunit))
// document.write("<br> Late Payment surcharge: 350")
// document.write("<br> Gross Amount payable (after Due Date): "+ (numOfUnits*chargePerunit+350))

// ******CHAPTER # 35-38******

// Question # 1

// function CurrentDate(){
//   var date = new Date()
// document.write(date)
// }
// CurrentDate()

// Question # 2

// function GreetUser(){
//   var firstName = prompt("Enter your first name:")
//   var lastName = prompt("Enter your last name:")
//   document.write("Welcome "+ firstName + " " + lastName + "!")
// }
// GreetUser()

// Question # 3

// function Sum(){
//   var firstNumber = parseInt(prompt("Enter first number:"))
//   var secondNumber = parseInt(prompt("Enter second number:"))
//   document.write("The sum of two number is " + (firstNumber + secondNumber))
// }
// Sum()

// Question # 4

// function Calculator(){
//     var num1 = parseInt(prompt("Enter first number"))
//     var operator = prompt("Enter your operator")
//     var num2 = parseInt(prompt("Enter second number"))
//     if (operator === "+"){
//         return num1 + num2
//     }else  if (operator === "-"){
//         return num1 - num2
//     }else  if (operator === "/"){
//         return num1 / num2
//     }else  if (operator === "%"){
//         return num1 % num2
//     }else  if (operator === "*"){
//         return num1 * num2
//     }else {
//         return "Incorrect operator"
//     }
// }
// document.write(Calculator())

// Question # 5

// function Square(number){
//     var sqr = number * number
//     return sqr;
// }
// document.write(Square(6))

// Question # 6

// function Factorial(num){
//     var fact
//     fact = 1
//     for (i = 1 ; i < num; i++){
//         fact = fact * (i+1)
//     }
//     return fact
// }
// document.write(Factorial(5))

// Question # 7

// function Counting(first , last){
//     for (i = first ; i <= last ; i++){
//         document.write(i+ "<br>")
//     }
// }
// var first = parseInt(prompt("Enter starting number of Countring: "))
// var last = parseInt(prompt("Enter last number of Countring: "))
// Counting(first , last)

// Question # 8

// function calculateHypotenuse(perp, base) {   
//     function calculateSquare(number){
//         var sq = number * number
//         return sq                       
//     }
//     var hyp = calculateSquare(perp) + calculateSquare(base)
//     hyp = Math.sqrt(hyp)
//     return hyp; 
// }
// var base = parseInt(prompt("Enter base of right angle triangle: "))
// var perp = parseInt(prompt("Enter perpendicular of right angle triangle: "))
// document.write( "The hypotenuse of right angle triangle is " +calculateHypotenuse(4, 3))

// Question # 9

// function areaOfRectangle(height ,width){
//     return height * width
// }
// document.write(areaOfRectangle(4 , 3)+ "<br>")
// var height = parseInt(prompt("Enter height of rectangle: "))
// var width = parseInt(prompt("Enter width of rectangle: "))
// document.write(areaOfRectangle(height, width))

// Question # 10

// var input = prompt("Enter some text:")
// userInput = input.toLowerCase()
// var word = ""
// for (i = userInput.length - 1 ; i >= 0 ; i--){
//     word += userInput[i].toLowerCase()
// }
// if (userInput === word) {
//     document.write(input + " is palindrome")
// }else{
//     document.write(input + " is not palindrome")
// }

// Question # 11

// var st = "the quick brown fox"
// function upperCase(string){
//     var array = string.split(" ")
//     var upperArray = []
//     for (element of array){
//         var firstLetter = element.slice(0,1)
//         firstLetter = firstLetter.toUpperCase()
//         var otherLetters = element.slice(1)
//         otherLetters = otherLetters.toLowerCase()
//         var letter = firstLetter + otherLetters
//         upperArray.push(letter)

//     }
//     return upperArray.join(" ")
// }

// document.write(upperCase(st))

// Question # 12

// var string = "Web Development Tutorial"
// function longestWord(string) {
//     var array = string.split(" ")
//     var longestStr = array[0]
//     for (element of array){
//         if (element.length > longestStr.length){
//             longestStr = element
//         }
//     }
    
//     return longestStr
// }
// var sp = longestWord(string)
// document.write(sp)

// Question # 13

// var string = "JSResourceS.com"
// var letter = "o"
// function countLetter(string , letter){
//     var array = string.split("")
//     var count = 0
//     for (element of array){
//         if (element === letter){
//             count = count + 1
//         }    
//     }
//     return count
// }
// document.write(countLetter(string , letter))

// Question # 14

// function calcCircumference(radius) {
//     var circumference = 2 * 3.142 * radius
//     return circumference
// }

// function calcArea(radius) {
//     var area = 3.142 * (radius * radius)
//     return area
// }

// var radius = parseInt(prompt("Enter radius of circle:" ))
// document.write("The circumference of circle is " +calcCircumference(radius))
// document.write("<br> The area of circle is " +calcArea(radius))

