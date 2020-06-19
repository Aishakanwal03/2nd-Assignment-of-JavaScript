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
// var userName = userInput
// var specialChar = ["@", ",", ".","!"]
// for (i = 0 ; i <= specialChar.length ; i++) {
//     for (j = 0 ; j<= userName.length ; j++){
//         if (specialChar[i] == userName[j]){
//             alert(specialChar , userName)
//             break
//         }
//     }
// }
// alert("Your Name is: "+userName)

// Question # 14

var items =["cake", "apple pie", "cookies", "chips", "patties"]
var food = prompt("Welcom to ABC Bakery.What do you want to order sir/ma'am")
var flag = false
for (i= 0; i < food.length; i++){
    if (items[i] === food){
        document.write(food+" is available at index " + i)
        flag = true
        break   
    }
}
if (flag == false){
    document.write("We are sorry "+food+" is not available at our bakery")
}