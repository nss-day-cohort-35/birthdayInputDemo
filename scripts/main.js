
//Function builds an object, we will pass it the user input name and birthday
let objectBuilder = (nameValue, birthdayValue) => {
    let object = {
        name:nameValue ,
        birthday: birthdayValue
    }
    return object
}

//Function takes an object and returns an html string
const HTMLGenerator = (object) => {
    return `
    <h2>${object.name}</h2>
    <p>${object.birthday}</p>`
}

//adding an event listener to the button
document.querySelector("#saveEntry").addEventListener("click", event =>{

        //reference to the entire name input element
       let nameInputElement = document.querySelector("#fullName")
        //reference to value of what is in the input element
       let nameInputValue = document.querySelector("#fullName").value

       //reference to the entire birthday input element
       let birthdayInputElement = document.querySelector("#cohortBirthdays")
        //reference to value of what is in the input element
       let birthdayInputValue = document.querySelector("#cohortBirthdays").value

        //reference to container where we will list the birthdays
       let birthdayListHolder = document.querySelector("#ourBirthdayList")


       //if the name input is blank or the birthday input is blank, alert the user
       if (nameInputValue === "" || birthdayInputValue === ""){
           alert("DON'T LEAVE STUFF BLANK")
       }
       //otherwise add the created html string to the birthday list holder and reset the inputs
       else{
        birthdayListHolder.innerHTML += HTMLGenerator(objectBuilder(nameInputValue,birthdayInputValue))

        nameInputElement.value = ""
        birthdayInputElement.value = ""
       }
})