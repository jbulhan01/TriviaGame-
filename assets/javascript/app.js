$(document).ready(function () {

    $("#game").hide();
    $("#end").hide();

    //Start Button
    $('#start-button').on("click", function () {
        $('#start').hide();
        $("#game").show();

        game();

    });

    var answerBank = [
        'Wilt Chamberlin', 'Bill Russell', 'Steve Nash', 'LeBron James', 'Los Angeles Lakers', 'Michael Jordan', 'Gheorghe Muresan', 'Charlotte Hornets'

    ]

    //Game board, start of game 
    function game() {
        var guessedRight = 0;
        var guessedWrong = 0;
        var unanswered = 0;

        var trivia = [
            {
                question: 'What player scored the most points in one game?',
                answers: ['Micheal Jordan', 'Kobe Bryant', 'Wilt Chamberlin', 'Larry Bird'],
                correct: 'Wilt Chamberlin'
            },
            {
                question: 'Who won the most career NBA championships as player?',
                answers: ['Micheal Jordan', 'Bill Russell', 'Magic Johnson', 'Scott Skiles'],
                correct: 'Bill Russell'
            },
            {
                question: 'What player has the highest career FT percentage?',
                answers: ['John Stockton', 'Steve Nash', 'Steph Curry', 'Chris Paul'],
                correct: 'Steve Nash'
            },
            {
                question: 'Who was the #1 draft pick in 2003?',
                answers: ['LeBron James', 'Dwayne Wade', 'Charles Barkley', 'Allen Iverson'],
                correct: 'LeBron James'
            },
            {
                question: 'What team has the most NBA Finals appearances?',
                answers: ['Los Angeles Lakers', 'Boston Celtics', 'Minnesota Timberwolves', 'Chicago Bulls'],
                correct: 'Los Angeles Lakers'
            },
            {
                question: 'Who won the most NBA Finals MVPs?',
                answers: ['Michael Jordan', 'LeBron James', 'Tim Duncan', 'Kevin Garnett'],
                correct: 'Michael Jordan'
            },
            {
                question: 'Who was the tallest player of all-time?',
                answers: ['Shaq', 'Kareem Abdul-Jabbar', 'Gheorghe Muresan', 'Yao Ming'],
                correct: 'Gheorghe Muresan'
            },
            {
                question: 'What team drafted Kobe Bryant?',
                answers: ['Charlotte Hornets', 'Los Angeles Lakers', 'New York Knicks', 'Boston Celtics'],
                correct: 'Charlotte Hornets'
            },

        ];
        //start outer loop to extract questions
        for (var i = 0; i < trivia.length; i++) {

            $('.questions').append('<div style="margin-top:15px;">' + trivia[i].question + '</div>')


            for (var j = 0; j < trivia[i].answers.length; j++) {

                $('.questions').append(`<input type="radio" name="questions-${i}" value="${trivia[i].answers[j]}">${trivia[i].answers[j]}`)

            }
            //End inner loop to extract answers 



        }//End outer loop to extract questions 

        //Counter
        $('.counter').text('100')
        var counter = $('.counter');


        var trivia = setInterval(function () {
            if (parseInt(counter.text()) == 0) {
                $('#game').hide();
                $('#end').show();
                $('.counter').append('0');
            }
            //Increment counter 
            counter.text(parseInt(counter.text()) - 1);
        }, 550);

        //Need score to show up after submitting the answers 
        function score() {


            //Question
            if ($('input[type="radio"][name=question 0]:checked').val() === "answer 0") {
                guessedRight++;
                console.log
            } else if ($('input[type="radio"][name=question 0]:checked').val() == "answer 1" ||
                $('input[type="radio"][name=question 0]:checked').val() == "answer 2" ||
                $('input[type="radio"][name=question 0]:checked').val() == "answer 3") {
                guessedWrong++;
            } else {
                unanswered++;
            };

        };

        //Submit button
        $('.questions').append('<div style="margin-top:15px"> <button class="button2"> Submit </button> </div>')

        $('.button2').click(function () {


            
            console.log()

            $('#game').hide();
            $('.questions').hide();
            $('#end').show();

            score();
            $(".right").append(guessedRight);
            $(".wrong").append(guessedWrong);
            $(".unanswered").append(unanswered);

        });


        //Need to get game to restart without refreshing the page 

    };//End game function




});