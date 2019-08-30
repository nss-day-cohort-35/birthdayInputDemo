


const HTMLGenerator = (object) => {
    return `
    <h2>${object.name}</h2>
    <p>${object.birthday}</p>`
}

let objectBuilder = (nameValue, birthdayValue) => {
    let object = {
        name:nameValue ,
        birthday: birthdayValue
    }
    return object
}
document.querySelector("#saveEntry").addEventListener("click", event =>{
        let nameInput = document.querySelector("#fullName").value
       let birthdayInput = document.querySelector("#cohortBirthdays").value
       let birthdayListHolder = document.querySelector("#ourBirthdayList")
       if (nameInput === "" || birthdayInput === ""){
           alert("DON'T LEAVE STUFF BLANK")
       }
       else{
        birthdayListHolder.innerHTML += HTMLGenerator(objectBuilder(nameInput,birthdayInput))
        let nameBox = document.querySelector("#fullName")
        nameBox.value = ""
       }
})