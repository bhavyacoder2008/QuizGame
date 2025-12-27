const QuizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: "<a>"
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Which attribute is mandatory for the <img> tag?",
    options: ["alt", "src", "title", "width"],
    answer: "src"
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>"
  },

  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: "color"
  },
  {
    question: "Which unit is relative to the font-size of the root element?",
    options: ["em", "px", "rem", "%"],
    answer: "rem"
  },
  {
    question: "Which CSS position value removes the element from normal flow?",
    options: ["relative", "static", "absolute", "sticky"],
    answer: "absolute"
  },
  {
    question: "Which property is used to create space inside an element?",
    options: ["margin", "border", "padding", "gap"],
    answer: "padding"
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of these"],
    answer: "All of these"
  },
  {
    question: "Which data type is NOT primitive in JavaScript?",
    options: ["Number", "String", "Boolean", "Object"],
    answer: "Object"
  },
  {
    question: "What will typeof null return?",
    options: ["null", "undefined", "object", "number"],
    answer: "object"
  },
  {
    question: "Which method converts JSON string into JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },

  {
    question: "Which event fires when a button is clicked?",
    options: ["onpress", "onclick", "onhover", "onsubmit"],
    answer: "onclick"
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "querySelectorAll",
      "getElementsByClassName",
      "getElementById",
      "getElementsByTagName"
    ],
    answer: "getElementById"
  },
  {
    question: "What does event delegation rely on?",
    options: [
      "Event bubbling",
      "Event capturing",
      "Inline events",
      "Default behavior"
    ],
    answer: "Event bubbling"
  },
  {
    question: "Which CSS property controls stacking order?",
    options: ["order", "z-index", "layer", "depth"],
    answer: "z-index"
  },
  {
    question: "Which method prevents page reload on form submit?",
    options: [
      "stopPropagation()",
      "preventDefault()",
      "return false",
      "halt()"
    ],
    answer: "preventDefault()"
  },

  {
    question: "Which JavaScript feature allows functions to remember scope?",
    options: ["Hoisting", "Closure", "Callback", "Promise"],
    answer: "Closure"
  },
  {
    question: "What is the default display value of a <div>?",
    options: ["inline", "inline-block", "block", "flex"],
    answer: "block"
  },
  {
    question: "Which CSS selector has highest specificity?",
    options: ["Class", "Element", "ID", "Universal"],
    answer: "ID"
  },
  {
    question: "What does the defer attribute do in script tag?",
    options: [
      "Loads script after HTML parsing",
      "Blocks HTML rendering",
      "Executes script immediately",
      "Delays CSS loading"
    ],
    answer: "Loads script after HTML parsing"
  },
  {
    question: "Which concept allows async code to look synchronous?",
    options: ["Callbacks", "Promises", "Async/Await", "setTimeout"],
    answer: "Async/Await"
  }
];

let count = 0;

const start = document.querySelector(".start")
const options = document.querySelector(".option-container")
const question = document.querySelector(".question")
const next = document.querySelector(".next")
const check = document.querySelector(".check")

const op_list = [...options.children]

options.addEventListener("click", (e) => {
  op_list.forEach((item) => item.classList.remove('checked'))
  e.target.classList.add('checked')
})

start.addEventListener("click",() => {
    document.querySelector(".home").style.display = "none"
    document.querySelector(".game-start").style.display = "flex"
})


question.textContent = QuizQuestions[count]["question"]


op_list[0].textContent = QuizQuestions[count]["options"][0]
op_list[1].textContent = QuizQuestions[count]["options"][1]
op_list[2].textContent = QuizQuestions[count]["options"][2]
op_list[3].textContent = QuizQuestions[count]["options"][3]



next.addEventListener("click",()=>{
    count++
    question.textContent = QuizQuestions[count]["question"]

    op_list[0].textContent = QuizQuestions[count]["options"][0]
    op_list[1].textContent = QuizQuestions[count]["options"][1]
    op_list[2].textContent = QuizQuestions[count]["options"][2]
    op_list[3].textContent = QuizQuestions[count]["options"][3]

    op_list.forEach(element => {
        element.style.backgroundColor = "#fff" 
    });
})

check.addEventListener("click",()=>{
    if(document.querySelector(".checked").textContent === QuizQuestions[count]["answer"]){
        document.querySelector(".checked").style.backgroundColor = "green"
    }
    else{
        document.querySelector(".checked").style.backgroundColor = "red"

    }
})



