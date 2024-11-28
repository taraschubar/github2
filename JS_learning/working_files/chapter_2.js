 

// let friends={
//     james: 'is cool',
//     lucy: 'isn\'t cool',
//     number_of_eggs: 3
// }
// console.log(friends)

// let example_array = [1,2,3,4,5,6,7,8,9]

// let is_True = true


// function myFirstFunction(value, secondValue) {

// console.log(value != secondValue)
// }

// let multipleTwoNumber = myFirstFunction

// multipleTwoNumber(3,5)
// multipleTwoNumber('5',5)
// multipleTwoNumber(2,8)


// // && - if both conditions are the same 
// // '//' if one consdition of second condition is true
// // ! - gonna inverse the condition

// let condition1 = true
// let condition2 = false

// console.log(condition1 || condition2)

// console.log(typeof example_array)


// IF statement 

// if  (condition1 && condition2){
//     console.log('hi mom')
// } else if (condition1 || condition2){
//     console.log('one condition of the two was true')
 
// }else{
//     console.log('the value was wrong so here we are ')
// }

// Loops

// let example_array = [1,4,2,56,6,3,8,8,9]

// let i = 0
// let length = example_array.length
// // console.log(length)

// while (i < length){
// console.log ('value was true: ', i, example_array[i])

// i ++
// }

// for (let j = 6; j < length; j ++) {

//     if (j % 2 ===6){
//         break
//     }

// console.log ('value was true: ', j, example_array[j])
// }


function add_strings (string1 = 'default1', string2 = 'default2'){

    let concat_string =  string1+ " " + string2
 console.log(concat_string)
 return concat_string
}

let new_string= add_strings ('hello')
console.log('The new strinf is : ', new_string)