const adviceNum = document.getElementById("advice-num");
const advice = document.getElementById("advice-text");
const random = document.querySelector(".dice-btn");

async function fetchAdvice(){
    const randomId = Math.floor(Math.random() *224) + 1;
    const url = `https://api.adviceslip.com/advice/${randomId}`;
    random.disabled = true;
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if(!data.slip){
            throw new Error("No advice found for this id");
        }
        adviceNum.textContent = `#${data.slip.id}`;
        advice.textContent = `“${data.slip.advice}”`;
    } catch (error) {
        advice.textContent = "Sorry, we couldn't load advice. Please try again.";
        console.error("Failed to fetch data:", error.message);
    } finally{
        random.disabled = false;
    }
}

random.addEventListener("click",fetchAdvice);
fetchAdvice();