$(document).ready(function () {

    //Define charactors in this section

    var jonSnow = { name: "Jon Snow", healthPoints: 110, attackPower: 8, counterAttackPower: 12 };
    var khalDrogo = { name: "Khal Drogo", healthPoints: 150, attackPower: 20, counterAttackPower: 25 };
    var gregorClegane = { name: "Gregor Clegane", healthPoints: 180, attackPower: 30, counterAttackPower: 25 };
    var jamieLanister = { name: "Jamie Lanister", healthPoints: 90, attackPower: 5, counterAttackPower: 15 };
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
    $("#characters").on("click", "#snow", function () {
        $("#choose").text("Your Character");
        myCharacterName = jonSnow;
        myCharacterHealthPrint = $("#snowHealth");
        myCharacterAttack = myCharacterName.attackPower;
        var enemy1 = $("#khal");
        var enemy2 = $("#gregor");
        var enemy3 = $("#lanister");
        $("#enemySelect").append(enemy1);
        $("#enemySelect").append(enemy2);
        $("#enemySelect").append(enemy3);
        enemy1.addClass("enemyCard");
        enemy2.addClass("enemyCard");
        enemy3.addClass("enemyCard");
    });
    $("#characters").on("click", "#khal", function () {
        $("#choose").text("Your Character");
        myCharacterName = khalDrogo;
        myCharacterHealthPrint = $("#drogoHealth");
        myCharacterAttack = myCharacterName.attackPower;
        var enemy1 = $("#snow");
        var enemy2 = $("#gregor");
        var enemy3 = $("#lanister");
        $("#enemySelect").append(enemy1);
        $("#enemySelect").append(enemy2);
        $("#enemySelect").append(enemy3);
        enemy1.addClass("enemyCard");
        enemy2.addClass("enemyCard");
        enemy3.addClass("enemyCard");
    });
    $("#characters").on("click", "#gregor", function () {
        $("#choose").text("Your Character");
        myCharacterName = gregorClegane;
        myCharacterHealthPrint = $("#cleganeHealth");
        myCharacterAttack = myCharacterName.attackPower;
        var enemy1 = $("#snow");
        var enemy2 = $("#khal");
        var enemy3 = $("#lanister");
        $("#enemySelect").append(enemy1);
        $("#enemySelect").append(enemy2);
        $("#enemySelect").append(enemy3);
        enemy1.addClass("enemyCard");
        enemy2.addClass("enemyCard");
        enemy3.addClass("enemyCard");
    });
    $("#characters").on("click", "#lanister", function () {
        $("#choose").text("Your Character");
        myCharacterName = jamieLanister;
        myCharacterHealthPrint = $("#lanisterHealth");
        myCharacterAttack = myCharacterName.attackPower;
        var enemy1 = $("#snow");
        var enemy2 = $("#gregor");
        var enemy3 = $("#khal");
        $("#enemySelect").append(enemy1);
        $("#enemySelect").append(enemy2);
        $("#enemySelect").append(enemy3);
        enemy1.addClass("enemyCard");
        enemy2.addClass("enemyCard");
        enemy3.addClass("enemyCard");
    });
    
    //Select Antagonist in this section
    $("#enemySelect").on("click", "#snow", function () {
        if ($("#defenderArea").children().length === 0) {
            $("#chooseEnemy").text("Defender");
            var defenderSelected = $("#snow");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            $("#characters").children().addClass("protagonistCard");
            defenderName = jonSnow;
            defenderHealthPrint = $("#snowHealth");
        }
    });
    $("#enemySelect").on("click", "#khal", function () {
        if ($("#defenderArea").children().length === 0) {
            $("#chooseEnemy").text("Defender");
            var defenderSelected = $("#khal");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            $("#characters").children().addClass("protagonistCard");
            defenderName = khalDrogo;
            defenderHealthPrint = $("#drogoHealth");
        }
    });
    $("#enemySelect").on("click", "#gregor", function () {
        if ($("#defenderArea").children().length === 0) {
            $("#chooseEnemy").text("Defender");
            var defenderSelected = $("#gregor");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            $("#characters").children().addClass("protagonistCard");

            defenderName = gregorClegane;
            defenderHealthPrint = $("#cleganeHealth");
        }
    });
    $("#enemySelect").on("click", "#lanister", function () {
        if ($("#defenderArea").children().length === 0) {
            $("#chooseEnemy").text("Defender");
            var defenderSelected = $("#lanister");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            $("#characters").children().addClass("protagonistCard");
            defenderName = jamieLanister;
            defenderHealthPrint = $("#lanisterHealth");
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
                $("#restartBtn").css("display", "inline")
            } else if (defenderName.healthPoints <= 0) {
                $("#attackComment").text("You have defeated " + defenderName.name + ". You can choose to fight another enemy");
                $("#chooseEnemy").text("Choose an Enemy!");  
                $("#damageComment").empty();
                defenderHealthPrint.text("Dead");
                $("#losersRow").append($(".defenderCard").addClass("defeatedCard"));
                if ($("#losersRow").children().length === 3) {
                    $("#attackButton").hide();
                    $("#chooseEnemy").text("YOU WON!");  
                    $("#restartBtn").css("display", "inline")
                }
            } else {
                $("#attackComment").text("You've attacked " + defenderName.name + " for " + myCharacterName.attackPower + " damage.");
                $("#damageComment").text(defenderName.name + " attacked you back for " + defenderName.counterAttackPower + " damage.");
            }
            myCharacterName.attackPower += myCharacterAttack;
        } else {
            $("#chooseEnemy").text("Choose an Enemy!");  
        }
        
    })


    $("#restartBtn").on("click", function () {
        location.reload();
    })

});