var time = 10,
    intervalId;
    correctAns = 0,
    wrongAns = 0,
    noAns = 0;

var questionBank = [

    {question:"This songstress sang during British royals Kate and William's first wedding dance, and claimed it was a moment she would 'treasure forever'.",
    answerOptions:["Beyonce", "Ellie Goulding", "Celine Dion", "Whitney Houston"],
    answer:1},

    {question:"This gentleman actor attended the University of Massachusetts Amherst on a gymnastics scholarship.",
    answerOptions:["Richard Gere", "Johnny Depp", "Channing Tatum", "Matt Damon"],
    answer:0},

    {question:"This singer/actress holds the most nominations for the 'Razzie Award for Worst Actress', at six. She has won the award five times.",
    answerOptions:["Miley Cyrus", "Lady Gaga", "Mariah Carey", "Madonna"],
    answer:3},

    {question:"This magical actor first broke into show business as a male stripper in the early-2000s.",
    answerOptions:["Ben Affleck", "Mark Wahlberg", "Channing Tatum", "Brad Pitt"],
    answer:2},

    {question:"This tall blonde actress was a high school classmate of Snoop Dogg.",
    answerOptions:["Charlize Theron", "Naomi Watts", "Gwyneth Paltrow"," Cameron Diaz"],
    answer:3},
    
    {question:"This Oscar-winning actress, who has played a stranded astronaut and an FBI agent undercover at a beauty pageant, has said that she despises musicals and vows to never star in one.",
    answerOptions:["Sandra Bullock", "Meryl Streep", "Natalie Portman", "Reece Witherspoon"],
    answer:0},

    {question:"This actress, who has played a princess and a superhero, aspired to be a nun when she was a child.",
    answerOptions:["Angelina Jolie", "Anne Hathaway", "Julia Roberts", "Selma Hayek"],
    answer:1},

    {question:"This actor known for starring in gloomy movies is also an accomplished guitarist who has performed on-stage with Marilyn Manson and Alice Cooper.",
    answerOptions:["Keanu Reeves", "Billy Bob Thorton", "Johnny Depp", "Joaquin Phoenix"],
    answer:2},

    {question:"This singer performed her hit single, 'Born This Way', at the 2011 Grammy Awards. Not bad, considering she claims it took her 10 minutes to write.",
    answerOptions:["Rihanna", "Lady Gaga", "Kelly Clarkson", "Britney Spears"],
    answer:1},

    {question:"Though this actress jokes her husky, low voice came from smoking at four, its true origin is from having colic as a baby, from which she still has calluses on her vocal cords.",
    answerOptions:["Emma Stone", "Juliette Lewis", "Lindsay Lohan", "Kathleen Turner"],
    answer:0},

    {question:"This full-lipped actress was partly the inspiration for Katy Perry's song, 'I Kissed a Girl'.",
    answerOptions:["Jessica Alba", "Jennifer Garner", "Eva Mendes", "Scarlett Johansson"],
    answer:3},

    {question:"This daytime TV host, known for covering risque topics that feature outlandish guests, once served as Mayor of Cincinnati.",
    answerOptions:["Maury Povich", "Steve Wilkos", "Jerry Springer", "Dr. Phil McGraw"],
    answer:2},

    {question:"This Canadian funny-man dropped out of high school and worked as a janitor before catching his big break with 'In Living Color'.",
    answerOptions:["Mike Myers", "Jim Carrey", "Matthew Perry", "Martin Short"],
    answer:1},

    {question:"This pop songstress maintained an alter-ego named, 'Sasha Fierce', as a way to push out of her shy behavior. She said in a 2010 interview that she had killed off Sasha.",
    answerOptions:["Beyonce", "Janet Jackson", "Whitney Houston", "Queen Latifah"],
    answer:0},

    {question:"This game show host served in the US Marine Corps before moving on to a career in stand-up comedy and, later, his own eponymous TV show.",
    answerOptions:["Steve Harvey", "Dr. Phil", "Drew Carey", "Jerry Springer"],
    answer:2},

    {question:"This daytime TV host and stand-up comedienne lent her name to a former ride at Disney World in which riders traveled into her brain on a tour guided by Bill Nye.",
    answerOptions:["Ellen DeGeneres", "Wendy Williams", "Who0pi Golberg", "Rosie O'Donnell"],
    answer:0},

    {question:"This two-time 'Sexiest Man Alive' contributed his voice to an early episode of 'South Park' where he played Stan's dog. His dialogue consisted of barking and panting.",
    answerOptions:["Ryan Reynolds", "George Clooney", "Dwayne Johnson", "Chris Hemsworth"],
    answer:1},

    {question:"This actor, who has portrayed multiple adventurers, has a species of spider named after him.",
    answerOptions:["Orlando Bloom", "Elijah Wood", "Ewan McGregor", "Harrison Ford"],
    answer:3},

    {question:"This actor's grandfather is credited with helping to bring forth Canada's modern healthcare system.",
    answerOptions:["Kiefer Sutherland", "Ryan Gosling", "Keanu Reeves", "Ryan Reynolds"],
    answer:0},

    {question:"This actor, renowned for his soothing voice, earned his pilot's license at the age of 65.",
    answerOptions:["Morgan Freeman", "Harrison Ford", "James Earl Jones", "Sean Connery"],
    answer:0},

    {question:"This actress, who has appeared in movies since the age of 12, was born in Israel and has a degree from Harvard.",
    answerOptions:["Drew Barrymore", "Dakota Fanning", "Natalie Portman", "Angelina Jolie"],
    answer:2}

];


$(document).ready(function () {

    //Start if Start button clicked
    $("#startButton").click(function() {
        playGame();
    });

});

function playGame(){

    //Remove Start Button
    $("#startButton").remove();

    //Display all questions and answer options
    showQuesAns();

    //Start Timer
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);

    $(".answerChoices").click(function(){
        alert("a radio button was clicked.");
        alert($('input[name="answers"]:checked', '.answerChoices').val());
    });
}

function countDown() {
    //Count down and display time left
    $("h2").text("Time Remaining: " + time);

    //End the game when time runs out
    if (time===0) {
        endGame();
    }
    time--;
   
}

function showQuesAns() {

    // Display each question along with it's possible answers
    var nextQuestion;

    for (i=0; i<questionBank.length; i++) {

        nextQuestion = "<p class='questions'>" + questionBank[i].question + "</p>";
        $(".content").append(nextQuestion);

        nextAnswer = '<form class="answerChoices">';
        for (j=0; j<questionBank[i].answerOptions.length; j++){
            nextAnswer = nextAnswer + "<input type='radio' name='answers' value=" + questionBank[i].answerOptions[j] + '>' + questionBank[i].answerOptions[j] ;
        }
        nextAnswer = nextAnswer + "</form>" + "<br>" + "<br>";
        $(".content").append(nextAnswer);
    }

}

function endGame(){
    //Calculate figures and display
    clearInterval(intervalId);
    $(".content").empty();
    $("h2").text("All Done!")
    $(".content").append("<p>" + "Correct Answers: " + correctAns + "</p>");
    $(".content").append("<p>" + "Incorrect Answers: " + wrongAns + "</p>");
    $(".content").append("<p>" + "Unswered: " + noAns + "</p>");

}


