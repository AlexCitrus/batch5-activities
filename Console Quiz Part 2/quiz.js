document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

/* Store questions, choices, and answers in an array */
const question = [];
const choices = [
  ["Hyper Text Markup Language", "Hot Mail", "How to Make Lumpia"], // Choices for Question No. 1
  ["2", "1", "3"], // Choices for Question No. 2
  [
    "Opening tag has a / in front",
    "Closing tag has a / in front",
    "There is no difference",
  ], // Choices for Question No. 3
  ["Break tag", "A broken one", "An opening tag"], // Choices for Question No. 4
  ["Opening", "Closing"], // Choices for Question No. 5
  ["Opening", "Closing"], // Choices for Question No. 6
  ["The last page", "The home page", "The second page"], // Choices for Question No. 7
  [
    `src=”image.jpg/gif” alt=”type some text”`,
    `Src=”image.jpg/gif” alt=”type some text”`,
  ], // Choices for Question No. 8
  ["Tag", "Empty element", "Closed element"], // Choices for Question No. 9
  ["< img / >", "< img > < / img >", "< / img>"], // Choices for Question No. 10
  ["Quotation marks", "Commas", "Parenthesis"], // Choices for Question No. 11
  ["In the same folder", "Where ever is fine", "In different folders"], // Choices for Question No. 12
  [
    "Adds a link to google on the page",
    "Adds a search engine to the page",
    "Nothing",
  ], // Choices for Question No. 13
  ["Page 4", "Homepage", "Table of contents"], // Choices for Question No. 14
  [
    "Nothing",
    "Brings up a note pad with the HTML code already used for the site.",
    "Opens a new website.",
  ], // Choices for Question No. 15
];

const answers = [
  "A", // Correct answer for question No. 1
  "A", // Correct answer for question No. 2
  "B", // Correct answer for question No. 3
  "A", // Correct answer for question No. 4
  "A", // Correct answer for question No. 5
  "B", // Correct answer for question No. 6
  "B", // Correct answer for question No. 7
  "A", // Correct answer for question No. 8
  "B", // Correct answer for question No. 9
  "A", // Correct answer for question No. 10
  "A", // Correct answer for question No. 11
  "A", // Correct answer for question No. 12
  "A", // Correct answer for question No. 13
  "B", // Correct answer for question No. 14
  "B", // Correct answer for question No. 15
];

/* Converter of choices from numbers to alphabet */
const toAlpha = (num) => {
  if (num < 1 || num > 26 || typeof num !== "number") {
    return -1;
  }
  const leveller = 64;
  return String.fromCharCode(num + leveller);
};

/* Questions Array */
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

/* Note */
console.log(`Enter "startQuiz()" to begin quiz`);

/* Main Function */
function startQuiz() {
  this.questions = question;
  this.choices = choices;
  this.correctAnswers = answers;
  this.userAnswer = null;
  this.pickedQuestion = null;
  this.userScore = 0;
  this.streak = 0;
  console.log("");
  console.log("Enter the letter of the correct answer");
  console.log(""); // picks a random index from an array

  /* Random number generator */ this.randomize = function () {
    let random = this.questions.length;
    return Math.floor(Math.random() * Math.floor(random));
  };

  // this.regenerationKeme(){

  // }

  // this.streakChecker = function () {
  //   this.streak = 0;

  //   if (
  //     this.userAnswer.toUpperCase() === this.correctAnswers[this.pickedQuestion]
  //   ) {
  //     this.streak++;
  //     console.log("streak added");
  //   } else {
  //     this.streak = 0;
  //   }

  //   if (this.streak === 5) {
  //     alert("YOU ARE ON A 5 POINT STREAK!");
  //   } else if (this.streak === 10) {
  //     alert("YOU ARE ON A 10 POINT STREAK!");
  //   } else if (this.streak === 15) {
  //     alert("YOU ARE ON A 15 POINT STREAK!");
  //   }
  // };
  this.randomQuestion = function () {
    this.pickedQuestion = randomize();
    let index;
    console.log(
      this.pickedQuestion + 1 + ". " + this.questions[this.pickedQuestion]
    );
    console.log("");

    for (index in this.choices[this.pickedQuestion]) {
      console.log(
        toAlpha(parseInt(index) + 1) +
          ". " +
          this.choices[this.pickedQuestion][index]
      );
    }

    this.userAnswer = prompt("Choose the number of correct answer.");
    this.checkAnswer();
  };

  this.addPoint = function () {
    this.userScore++;
  };

  this.checkAnswer = function () {
    console.log("");
    console.log("You Answered: ", this.userAnswer.toUpperCase());

    if (
      this.userAnswer.toUpperCase() === this.correctAnswers[this.pickedQuestion]
    ) {
      this.streak++;
      console.log("Your answer is correct!");
      console.log("");
      this.addPoint();
      console.log(`Your Points: ${this.userScore}`);
      console.log("");
      if (this.streak === 5) {
        alert("YOU ARE ON A 5 POINT STREAK!");
      } else if (this.streak === 10) {
        alert("YOU ARE ON A 10 POINT STREAK!");
      } else if (this.streak === 15) {
        alert("YOU ARE ON A 15 POINT STREAK!");
      }

      // console.log(`Enter "startQuiz()" to generate another random question`);
      this.randomQuestion();
    } else if (this.userAnswer.toUpperCase() === "EXIT") {
      console.log("");
      // console.log(`Enter "startQuiz()" to generate another random question`);
      console.log(`Your Points: ${this.userScore}`);
      console.log("");
      console.log("You quit oof");
    } else {
      this.streak--;
      console.log("Your answer is wrong!");
      console.log("");

      if (this.correctAnswers[this.pickedQuestion] === "A") {
        console.log(
          "The correct answer is: " +
            this.correctAnswers[this.pickedQuestion] +
            ". " +
            this.choices[this.pickedQuestion][0]
        );
      } else if (this.correctAnswers[this.pickedQuestion] === "B") {
        console.log(
          "The correct answer is: " +
            this.correctAnswers[this.pickedQuestion] +
            ". " +
            this.choices[this.pickedQuestion][1]
        );
      }
      console.log("");
      // console.log(`Enter "startQuiz()" to generate another random question`);
      console.log(`Your Points: ${this.userScore}`);
      console.log("");
      this.streakChecker();
      this.randomQuestion();
    }
  };

  // Generate Random Question
  this.randomQuestion();
}
