let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = "";
const question = [];
const choices = [
  ["Hyper Text Markup Language", "Hot Mail", "How to Make Lumpia"],
  ["2", "1", "3"],
  [
    "Opening tag has a / in front",
    "Closing tag has a / in front",
    "There is no difference",
  ],
  ["Break tag", "A broken one", "An opening tag"],
  ["Opening", "Closing"],
  ["Opening", "Closing"],
  ["The last page", "The home page", "The second page"],
  [
    `src=”image.jpg/gif” alt=”type some text”`,
    `Src=”image.jpg/gif” alt=”type some text”`,
  ],
  ["Tag", "Empty element", "Closed element"],
  ["< img / >", "< img > < / img >", "< / img>"],
  ["Quotation marks", "Commas", "Parenthesis"],
  ["In the same folder", "Where ever is fine", "In different folders"],
  [
    "Adds a link to google on the page",
    "Adds a search engine to the page",
    "Nothing",
  ],
  ["Page 4", "Homepage", "Table of contents"],
  [
    "Nothing",
    "Brings up a note pad with the HTML code already used for the site.",
    "Opens a new website.",
  ],
];

const answers = [
  "A", //1
  "A", //2
  "B", //3
  "A", //4
  "A", //5
  "B", //6
  "B", //7
  "A", //8
  "B", //9
  "A", //10
  "A", //11
  "A", //12
  "A", //13
  "B", //14
  "B", //15
];

const toAlpha = (num) => {
  if (num < 1 || num > 26 || typeof num !== "number") {
    return -1;
  }
  const leveller = 64;
  return String.fromCharCode(num + leveller);
};

question[0] = "What does HTML stand for?";
question[1] = "How many tags are in a regular element?";
question[2] = "What is the difference in an opening tag and a closing tag?";
question[3] = "< br  / > What type of tag is this?";
question[4] = "< body > Is this an opening tag or a closing tag?";
question[5] = "< / body > Is this an opening tag or a closing tag?";
question[6] = "Where is the meta tag only found?";
question[7] = "Which is the correct way to tag an image?";
question[8] = "What is an element that does not have a closing tag called?";
question[9] = "Which of the following is an example of an empty element?";
question[10] = "What should values always be enclosed in?";
question[11] = "Where do all items for the same web site need to be saved?";
question[12] = ` What does < a  h r e f = "h t t p : / / w w w . g o o g l e . c o m"  t i t l e = " L i n k  t o   G o o g l e  " t a r g e t = " _  b l a n k  " > G o o g l e  < / a > do?
`;
question[13] =
  "What is always a welcome page, and explains the purpose or topic of the site?";
question[14] = "What does View Source do?";

console.log(`Enter "startQuiz()" to begin quiz`);

function startQuiz() {
  this.questions = question;
  this.choices = choices;
  this.correctAnswers = answers;
  this.userAnswer = null;
  this.questionIndex = null;

  console.log("");
  console.log("Enter the letter of the correct answer");
  console.log("");

  this.randomize = function () {
    let random = this.questions.length;
    return Math.floor(Math.random() * Math.floor(random));
  };

  this.randomQuestion = function () {
    this.questionIndex = randomize();
    let index;
    console.log(
      this.questionIndex + 1 + ". " + this.questions[this.questionIndex]
    );
    console.log("");

    for (index in this.choices[this.questionIndex]) {
      console.log(
        toAlpha(parseInt(index) + 1) +
          ". " +
          this.choices[this.questionIndex][index]
      );
    }

    this.userAnswer = prompt("Choose the number of correct answer.");
    this.checkAnswer();
  };

  this.checkAnswer = function () {
    console.log("");
    console.log("You Answered: ", this.userAnswer.toUpperCase());

    if (
      this.userAnswer.toUpperCase() === this.correctAnswers[this.questionIndex]
    ) {
      console.log("Your answer is correct!");
      console.log("");
      console.log(`Enter "startQuiz()" to generate another random question`);
    } else {
      console.log("Your answer is wrong!");
      console.log("");
      console.log(
        "The correct answer is: " + this.correctAnswers[this.questionIndex]
      );
      console.log("");
      console.log(`Enter "startQuiz()" to generate another random question`);
    }
  };

  this.randomQuestion();
}
