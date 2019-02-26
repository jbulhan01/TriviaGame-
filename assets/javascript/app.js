$(document).ready(function () {

    $("#game").hide();
    $("#end").hide();

    //Start Button
    $('#start-button').on("click", function () {
        $('#start').hide();
        $("#game").show();

        game();

    });

    let answerBank = [
        'Wilt Chamberlin', 'Bill Russell', 'Steve Nash', 'LeBron James'

    ]


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
                question: 'WWho was the #1 draft pick in 2003?',
                answers: ['LeBron James', 'Dwayne Wade', 'Charles Barkley', 'Allen Iverson'],
                correct: 'LeBron James'
            },
        ];
        //start outer loop to extract questions
        for (var i = 0; i < trivia.length; i++) {

            $('.questions').append('<div style="margin-top:15px;">' + trivia[i].question + '</div>')

            
            for (var j =0; j < trivia[i].answers.length; j++) {

                $('.questions').append(`<input type="radio" name="question-${i}" value="${trivia[i].answers[j]}">${trivia[i].answers[j]}`)
        
            }
            //End inner loop to extract answers 
           


        }//End outer loop to extract questions 

        //Counter
        $('.counter').text('100')

        var game = setInterval(function () {
            if (parseInt(counter.text()) == 0) {
                //Is 90th minute
                $('#game').hide();
                $('#end').show();
                $('.counter'.append('0'))
            }
            //Increment counter 
            counter.text(parseInt(counter.text()) - 1);
        }, 550);

        function score() {

            //Questions
            if ($('input[type="radio"][name=${trivia[i].answers[0]}]:checked').val() == "${trivia[i].answers[0]}") {
                guessedRight++;
            } else if ($('input[type="radio"][name=${trivia[i].answers[0]}]:checked').val() == "${trivia[i].answers[1]}" ||
                $('input[type="radio"][name=${trivia[i].answers[0]}]:checked').val() == "${trivia[i].answers[2]}" ||
                $('input[type="radio"][name=${trivia[i].answers[0]}]:checked').val() == "${trivia[i].answers[3]}") {
                guessedWrong++;
            } else {
                unanswered++;
            };

        };



        //Submit button
        $('.questions').append('<div style="margin-top:30px"> <button class="button2"> Submit </button> </div>')

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




    };//End game function




});