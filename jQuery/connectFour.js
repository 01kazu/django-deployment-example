var column = $(".column");
var circle = $(".circle");
var heading= $("h2");
var counter = [6, 13, 20, 27, 34, 41, 48];
// var circle1 = $(".circle 1")
var arr = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39, 40, 41],
  [42, 43, 44, 45, 46, 47, 48]
];
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turns = 1;
// player One odd player two even
var player_name = ['1', '2'];
player_name[0] = prompt("What is your name player 1?");
alert(player_name[0] + ", Your colour is blue");
player_name[1] = prompt("What is your name player 2?");
alert(player_name[1] + ", Your colour is red");
alert("LET THE GAMES BEGIN")

  var playerTurn = 1;
  column.eq(0).click(function() {
    if (playerTurn % 2 === 1) {

      circle.eq(arr[0].pop()).css("background-color", "blue");
      board[counter[0]] = "X";
      counter[0] -= 1;
      console.log("lets see");
    } else {
      circle.eq(arr[0].pop()).css("background-color", "red");
      board[counter[0]] = "O";
      counter[0] -= 1;
    }
    playerTurn += 1;
  })
  column.eq(1).click(function() {

    if (playerTurn % 2 === 1) {

      circle.eq(arr[1].pop()).css("background-color", "blue");
      board[counter[1]] = "X";
      counter[1] -= 1;
    } else {

      circle.eq(arr[1].pop()).css("background-color", "red");
      board[counter[1]] = "O";
      counter[1] -= 1;
    }
    playerTurn += 1;
  })
  column.eq(2).click(function() {
    if (playerTurn % 2 === 1) {

      circle.eq(arr[2].pop()).css("background-color", "blue");
      board[counter[2]] = "X";
      counter[2] -= 1;
    } else {

      circle.eq(arr[2].pop()).css("background-color", "red");
      board[counter[2]] = "O";
      counter[2] -= 1;
    }
    playerTurn += 1;
  })
  column.eq(3).click(function() {
    if (playerTurn % 2 === 1) {

      circle.eq(arr[3].pop()).css("background-color", "blue");
      board[counter[3]] = "X";
      counter[3] -= 1;
    } else {

      circle.eq(arr[3].pop()).css("background-color", "red");
      board[counter[3]] = "O";
      counter[3] -= 1;
    }
    playerTurn += 1;
  })
  column.eq(4).click(function() {
    if (playerTurn % 2 === 1) {

      circle.eq(arr[4].pop()).css("background-color", "blue");
      board[counter[4]] = "X";
      counter[4] -= 1;
    } else {

      circle.eq(arr[4].pop()).css("background-color", "red");
      board[counter[4]] = "O";
      counter[4] -= 1;
    }
    playerTurn += 1;
  })
  column.eq(5).click(function() {
    if (playerTurn % 2 === 1) {

      circle.eq(arr[5].pop()).css("background-color", "blue");
      board[counter[5]] = "X";
      counter[5] -= 1;
    } else {

      circle.eq(arr[5].pop()).css("background-color", "red");
      board[counter[5]] = "O";
      counter[5] -= 1;
    }
    playerTurn += 1;
  })
  column.eq(6).click(function() {
    if (playerTurn % 2 === 1) {
      circle.eq(arr[6].pop()).css("background-color", "blue");
      board[counter[6]] = "X";
      counter[6] -= 1;
    } else {
      circle.eq(arr[6].pop()).css("background-color", "red");
      board[counter[6]] = "O";
      counter[6] -= 1;
    }
    playerTurn += 1;
  })

column.click(function(){
  if (playerTurn%2===0){
    heading.text("Its "+player_name[1]+"'s turn to play");
  }
  else{
    heading.text("Its "+player_name[0]+"'s turn to play");
  }
    for (var i = 0; i < 46; i++) {
      // checks the horizontal axis for wins
      if (board[i] === "X" && board[i + 1] === "X" && board[i + 2] === "X" && board[i + 3] === "X") {
      heading.text(player_name[0] + " wins, Refresh your browser to play again")
      }
      if (board[i] === "O" && board[i + 1] === "O" && board[i + 2] === "O" && board[i + 3] === "O") {
      heading.text(player_name[1] + " wins , Refresh your browser to play again")
      }
      // checks the vertical axis for wins
      if (board[i] === "X" && board[i + 7] === "X" && board[i + 14] === "X" && board[i + 21] === "X") {
      heading.text(player_name[0] + " wins, Refresh your browser to play again")
      }
      if (board[i] === "O" && board[i + 7] === "O" && board[i + 14] === "O" && board[i + 21] === "O") {
      heading.text(player_name[1] + " wins, Refresh your browser to play again")
      }
    }

})
