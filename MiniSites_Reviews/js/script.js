const reviews = [
    {   
        id: 1,
        img: "img/person-1_1000x667.jpeg",
        name : "Sophie Pendragon ",
        job: "Nurse",
        text: "ABC Services never disappoint. Commitment to excellence and customer satisfaction. Prompt responses and friendly staff.",
    },
    {   
        id: 2,
        img: "img/person-2_640x640.jpg",
        name : "Howl Jenkins",
        job: "Engineer",
        text: "XYZ Company's service exceeded expectations. Professionalism from start to finish. Highly recommend their attention to detail.",
    },
    {   
        id: 3,
        img: "img/person-3_640x640.jpg",
        name : "Mark",
        job: "Engineer",
        text: "DEF Solutions provided exceptional service. Professionalism, proficiency, and innovative solutions. Highly recommended.",
    },
]

const image = document.getElementById("reviewer-img");
const name = document.getElementById("reviewer-name");
const job = document.getElementById("reviewer-job");
const text = document.getElementById("review-text");

let counter = 0;


const displayReviewer = (index) => {
    const reviewer = reviews[index];
    image.src = reviewer.img;
    name.textContent = reviewer.name;
    job.textContent = reviewer.job;
    text.textContent = reviewer.text;
}

const updateReviewerPlus = () => {
    counter++;
    console.log(counter);
    
    if(counter === 3){
        counter = 0;
    }
    displayReviewer(counter);
    console.log(counter);
}

const updateReviewerMinus = () => {
    counter--;
    console.log(counter);
    
    if(counter === -1){
        counter = 2;
    }
    displayReviewer(counter);
    console.log(counter);
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("readyState: complete");
    displayReviewer(0);
    app();
})

const app = () => {
    let index = 0; // Define index variable
    let lastReviewer = -1;
    const nextButton = document.getElementById("next-arrow");
    const previousButton = document.getElementById("previous-arrow");
    const surpriseButton = document.getElementById("surprise");

    nextButton.addEventListener("click", (event) => {
        updateReviewerPlus();
    })

    previousButton.addEventListener("click", (event) => {
        updateReviewerMinus();
    })

    previousButton.addEventListener("click", (event) => {
        updateReviewerMinus();
    })

    surpriseButton.addEventListener("click", (event) => {
        
        while(index === lastReviewer){
            index = Math.floor(Math.random() * reviews.length);
        } 
        lastReviewer = index;
        displayReviewer(index);
    })

    
}