
let questions = [
    {
        id: 1,
        question: "Are you suffering from Fever?",
        answer:"Yes",
        options: [
            "Yes",
            "No"
            
        ]   
    },
    {
        id: 2,
        question: "Are the rashes you have located on or near the genitals?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 3,
        question: "Do rashes intially look like pimple and then turn out to be itchy?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 4,
        question: "'Do you have high fever?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 5,
        question: "Are you Suffering from Headache?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 6,
        question: "Do you have Respiratory symptoms (e.g. sore throat, nasal congestion, or cough)",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 7,
        question: "Has the rash Developed within 4 to 5 days?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 8,
        question: "Do you Suffer from Fatigue?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 9,
        question: "Do you have swollen Lymph Nodes?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        id: 10,
        question: "Have you come into contact with an animal or a person infected with the virus recently?",
        answer: "Yes",
        options: [
          "Yes",
          "No"
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}