const setOfWords = [
    "Hey, hello how are you? Are you human?",
    "I think you are not fit for this job because you are alien.",
    "I am getting late for the party, see you soon.. bye.",
    "Do not argue with me because I am your mother."
];

// console.log(setOfWords.length);


const msgDisp = document.getElementById('msg');
const typeWords = document.getElementById('text');
const btnPress = document.getElementById('btn');
let startTime, endTime;



const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msgDisp.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    
    btnPress.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let dispMsg = "You typed total at " + speed + " words per minutes. ";

    dispMsg += compareWords(msgDisp.innerText, totalStr);

    msgDisp.innerText = dispMsg;
}


const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

const compareWords = (str1, str2) => {

    let words1 = str1.toString().split(" ");
    let words2 = str2.toString().split(" ");
    let count = 0;



    //comparing typed word sentence with sentence given to type to get the count of faulty words typed.

    words1.forEach(function (item, index) {
        if(item == words2[index]) {
            count++;
        }
    })

    let errorWords = (words1.length - count);
    return(count + " correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".");
    

}


btnPress.addEventListener('click', function() {
    if(this.innerText == "Start") {
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btnPress.innerText = "Start";
        endPlay();
    }
})






