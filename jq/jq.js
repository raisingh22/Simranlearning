var player1 =prompt("Player One : Enter your Name, and you will be Blue");
var player1color= 'rgb(86,151,255,)';

var playeer2 =prompt("Player Two : Enter your Name, and you will red ");
var player2color= 'rgb(237,45,73)';

var game_on = true;
var table = $('table tr');

function reportwin(rowNum,colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

function changecolor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returncolor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function checkBottom(colIndex){
    var colorReport = returncolor(5,colIndex);
    for(var row = 5; row > -1; row--){
        colorReport = returncolor(row,colIndex);
        if (colorReport ==='rgb(128,128,128'){
            return row
        }
    }
}

function colorMatchCheck(one,two,three,four){
    return (one ===two && one ===three && one ===four && one !=='rgb(128,128,128' && one !== undefined)
}