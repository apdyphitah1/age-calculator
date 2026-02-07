const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");


function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please select a valid birth date.");
        return;
    }
    else {
        const age = getAge(birthdayValue); 
        resultEl.textContent = `Your age is: ${age} ${age === 1 ? "year" : "years"} old.`;
        
        
    }
} 


function getAge(birthdayValue) {
    const today = new Date();
    const birthDate = new Date(birthdayValue);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
    
}

btnEl.addEventListener("click", calculateAge)