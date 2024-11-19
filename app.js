const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById("result");

submitBtn.addEventListener('click', () => {

    const inputValue = userInput.value.trim();
    const cleanedStr = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join(""); 

    if (inputValue === "") {
        result.textContent = "Please enter a string. 😒";
        result.style.color = "#FF8C00";
        result.style.backgroundColor = "transparent"; 
    } else if (cleanedStr === reversedStr) {
        result.textContent = `"${inputValue}" is a palindrome. 😁`;
        result.style.color = "#32de84";
        result.style.backgroundColor = "transparent";
    } else {
        result.textContent = `"${inputValue}" is not a palindrome. 😢`;
        result.style.color = "#D2122E";
       
    }
});
