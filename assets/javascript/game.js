$(document).ready(function () {

    //Define charactors in this section

    var jonSnow = { healthPoints: 110, attackPower: 8, counterAttackPower: 12 };
    var khalDrogo = { healthPoints: 150, attackPower: 20, counterAttackPower: 25 };
    var gregorClegane = { healthPoints: 180, attackPower: 30, counterAttackPower: 25 };
    var jamieLanister = { healthPoints: 90, attackPower: 5, counterAttackPower: 15 };

    $("#snowHealth").text(jonSnow.healthPoints);
    $("#drogoHealth").text(khalDrogo.healthPoints);
    $("#cleganeHealth").text(gregorClegane.healthPoints);
    $("#lanisterHealth").text(jamieLanister.healthPoints);

    //Select protagonist in this section
    $("#characters").on("click", "#snow", function () {
        $("#snow").addClass("myCharacter");
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
            var defenderSelected = $("#snow");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
        }
    });
    $("#enemySelect").on("click", "#khal", function () {
        if ($("#defenderArea").children().length === 0) {
            var defenderSelected = $("#khal");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
        }
    });
    $("#enemySelect").on("click", "#gregor", function () {
        if ($("#defenderArea").children().length === 0) {
            var defenderSelected = $("#gregor");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
        }
    });
    $("#enemySelect").on("click", "#lanister", function () {
        if ($("#defenderArea").children().length === 0) {
            var defenderSelected = $("#lanister");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
        }
    });

    //Battle calculations
    var protagonistHealth = 0;
    var protagonistPower =0;
    var defenderPower = 0;
    var defenderHealth =0;
    if ($(".myCharacter").has("#snow")) {
        protagonistHealth = jonSnow.healthPoints;
        protagonistPower = jonSnow.attackPower;
    }
    if($("#defenderArea").has("#khal")){
        defenderPower= khalDrogo.counterAttackPower;
        defenderHealth=khalDrogo.healthPoints;
    }

        $("#attackButton").on("click", function () {
            protagonistHealth=protagonistHealth-defenderPower;
            defenderHealth=defenderHealth-protagonistPower;
            $("#snowHealth").text(protagonistHealth);
            $("#drogoHealth").text(defenderHealth);
        
    })

});