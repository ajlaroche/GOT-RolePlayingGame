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
    var myCharacterAttack=0;
    // var restartbutton=$("<button>").attr("value","Restart").addClass("btn", "btn-primary","restartBtn");

    $("#snowHealth").text(jonSnow.healthPoints);
    $("#drogoHealth").text(khalDrogo.healthPoints);
    $("#cleganeHealth").text(gregorClegane.healthPoints);
    $("#lanisterHealth").text(jamieLanister.healthPoints);

    //Select protagonist in this section
    $("#characters").on("click", "#snow", function () {
        myCharacterName = jonSnow;
        myCharacterHealthPrint = $("#snowHealth");
        myCharacterAttack=myCharacterName.attackPower;
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
        myCharacterName = khalDrogo;
        myCharacterHealthPrint = $("#drogoHealth");
        myCharacterAttack=myCharacterName.attackPower;
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
        myCharacterName = gregorClegane;
        myCharacterHealthPrint = $("#cleganeHealth");
        myCharacterAttack=myCharacterName.attackPower;
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
        myCharacterName = jamieLanister;
        myCharacterHealthPrint = $("#lanisterHealth");
        myCharacterAttack=myCharacterName.attackPower;
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
            defenderName = jonSnow;
            defenderHealthPrint = $("#snowHealth");
        }
    });
    $("#enemySelect").on("click", "#khal", function () {
        if ($("#defenderArea").children().length === 0) {
            var defenderSelected = $("#khal");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            defenderName = khalDrogo;
            defenderHealthPrint = $("#drogoHealth");
        }
    });
    $("#enemySelect").on("click", "#gregor", function () {
        if ($("#defenderArea").children().length === 0) {
            var defenderSelected = $("#gregor");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            defenderName = gregorClegane;
            defenderHealthPrint = $("#cleganeHealth");
        }
    });
    $("#enemySelect").on("click", "#lanister", function () {
        if ($("#defenderArea").children().length === 0) {
            var defenderSelected = $("#lanister");
            $("#defenderArea").append(defenderSelected);
            defenderSelected.addClass("defenderCard");
            defenderName = jamieLanister;
            defenderHealthPrint = $("#lanisterHealth");
        }
    });


    //Battle calculations

    
    
    $("#attackButton").on("click", function () {
        myCharacterName.healthPoints = (myCharacterName.healthPoints - defenderName.counterAttackPower);
        defenderName.healthPoints = (defenderName.healthPoints - myCharacterName.attackPower);

        myCharacterHealthPrint.text(myCharacterName.healthPoints);
        defenderHealthPrint.text(defenderName.healthPoints);

        if(myCharacterName.healthPoints<=0){
            $("#attackComment").text("you've been defeated... GAME OVER!!!");
            $("#damageComment").empty();
            myCharacterHealthPrint.text("Dead");
            defenderHealthPrint.text("Winner");
            $("#attackButton").hide();
            $("#restartBtn").css("display", "inline")
        }else {
        $("#attackComment").text("You've attacked "+ defenderName.name + " for " + myCharacterName.attackPower + " damage.");
        $("#damageComment").text(defenderName.name + " attacked you back for " + defenderName.counterAttackPower + " damage.");}
        myCharacterName.attackPower += myCharacterAttack;


    })

    $("#restartBtn").on("click", function(){
        location.reload();
    })

});