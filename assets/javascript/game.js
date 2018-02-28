$(document).ready(function () {

    //Define charactors in this section

    var jonSnow = { name: "Jon Snow", healthPoints: 110, attackPower: 15, counterAttackPower: 15 };
    var khalDrogo = { name: "Khal Drogo", healthPoints: 120, attackPower: 15, counterAttackPower: 8 };
    var gregorClegane = { name: "Gregor Clegane", healthPoints: 130, attackPower: 20, counterAttackPower: 10 };
    var jamieLanister = { name: "Jamie Lanister", healthPoints: 100, attackPower: 12, counterAttackPower: 25 };
    var defenderName = "";
    var myCharacterName = "";
    var myCharacterHealthPrint = "";
    var defenderHealthPrint = "";
    var myCharacterAttack = 0;


    $("#snowHealth").text(jonSnow.healthPoints);
    $("#drogoHealth").text(khalDrogo.healthPoints);
    $("#cleganeHealth").text(gregorClegane.healthPoints);
    $("#lanisterHealth").text(jamieLanister.healthPoints);

    //Select protagonist in this section
    $("#characters").on("click", ".card", function () {
        $("#choose").text("Your Character");
        if ($(this).attr("id") === "snow") {
            myCharacterName = jonSnow;
            myCharacterHealthPrint = $("#snowHealth");
            var enemy1 = $("#khal");
            var enemy2 = $("#gregor");
            var enemy3 = $("#lanister");
        } else if ($(this).attr("id") === "khal") {
            myCharacterName = khalDrogo;
            myCharacterHealthPrint = $("#drogoHealth");
            var enemy1 = $("#snow");
            var enemy2 = $("#gregor");
            var enemy3 = $("#lanister");
        } else if ($(this).attr("id") === "gregor") {
            myCharacterName = gregorClegane;
            myCharacterHealthPrint = $("#cleganeHealth");
            var enemy1 = $("#snow");
            var enemy2 = $("#khal");
            var enemy3 = $("#lanister");
        } else {
            myCharacterName = jamieLanister;
            myCharacterHealthPrint = $("#lanisterHealth");
            var enemy1 = $("#snow");
            var enemy2 = $("#gregor");
            var enemy3 = $("#khal");
        }
        myCharacterAttack = myCharacterName.attackPower;
        $("#enemySelect").append(enemy1);
        $("#enemySelect").append(enemy2);
        $("#enemySelect").append(enemy3);
        enemy1.addClass("enemyCard");
        enemy2.addClass("enemyCard");
        enemy3.addClass("enemyCard");
    });


    //Select Antagonist in this section
    $("#enemySelect").on("click", ".card", function () {
        if ($("#defenderArea").children().length === 0) {
            $("#chooseEnemy").text("Defender");
            $("#attackComment").empty();
            if ($(this).attr("id") === "snow") {
                var defenderSelected = $("#snow");
                defenderName = jonSnow;
                defenderHealthPrint = $("#snowHealth");
            } else if ($(this).attr("id") === "khal") {
                var defenderSelected = $("#khal");
                defenderName = khalDrogo;
                defenderHealthPrint = $("#drogoHealth");
            } else if ($(this).attr("id") === "gregor") {
                var defenderSelected = $("#gregor");
                defenderName = gregorClegane;
                defenderHealthPrint = $("#cleganeHealth");
            } else {
                var defenderSelected = $("#lanister");
                defenderName = jamieLanister;
                defenderHealthPrint = $("#lanisterHealth");
            }
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            $("#characters").children().addClass("protagonistCard");

        }
    });


    //Battle calculations



    $("#attackButton").on("click", function () {
        if ($("#defenderArea").children().length > 0) {     //Test if enemy has been seclected before performing battle calcs//
            myCharacterName.healthPoints = (myCharacterName.healthPoints - defenderName.counterAttackPower);
            defenderName.healthPoints = (defenderName.healthPoints - myCharacterName.attackPower);

            myCharacterHealthPrint.text(myCharacterName.healthPoints);
            defenderHealthPrint.text(defenderName.healthPoints);

            if (myCharacterName.healthPoints <= 0) {
                $("#attackComment").text("you've been defeated... GAME OVER!!!");
                $("#damageComment").empty();
                $("#characters").children().addClass("defeatedCard");
                myCharacterHealthPrint.text("Dead");
                defenderHealthPrint.text("Winner");
                $("#attackButton").hide();
                setTimeout(function(){
                    $("#restartBtn").css("display", "inline")
                }, 2000);
                
            } else if (defenderName.healthPoints <= 0) {
                $("#attackComment").text("You have defeated " + defenderName.name + ". You can choose to fight another enemy");
                $("#chooseEnemy").text("Choose an Enemy!");
                $("#damageComment").empty();
                defenderHealthPrint.text("Dead");
                $("#losersRow").append($(".defenderCard").addClass("defeatedCard"));
                if ($("#losersRow").children().length === 3) {
                    $("#attackButton").hide();
                    $("#chooseEnemy").text("YOU WON!");
                    $("#attackComment").empty();
                    setTimeout(function () {
                        $("#restartBtn").css("display", "inline")
                    }, 2000);

                }
            } else {
                $("#attackComment").text("You've attacked " + defenderName.name + " for " + myCharacterName.attackPower + " damage.");
                $("#damageComment").text(defenderName.name + " attacked you back for " + defenderName.counterAttackPower + " damage.");
            }
            myCharacterName.attackPower += myCharacterAttack;
        } else {
            $("#chooseEnemy").text("Choose an Enemy!");
            $("#attackComment").text("No enemy selected!");
        }

    })

    $("#restartBtn").on("click", function () {
        location.reload();
    })

});