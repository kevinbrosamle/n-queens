/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // create N board
  var board = new Board({n: n});

  // iterate from 0 to n
  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }

  var solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return an array of arrays
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 1) {
    return 1;
  }
  // var solution = {};
  // var solutionCount = 0;
  // var board = new Board ({n: n});

  // var searchBoard = function (currentBoard, placedPeices, n, x, y) {
  //   // debugger;
  //   currentBoard.togglePiece(x, y);
  //   placedPeices.push(JSON.stringify([x, y]));

  //   if (n === 1 && !currentBoard.hasAnyRooksConflicts()) {
  //     var string = JSON.stringify(currentBoard.rows());
  //     solution[string] = true;
  //     //console.table(currentBoard.rows());
  //     //solutionCount++;
  //     return;
  //   }

  //   if (currentBoard.hasAnyRooksConflicts() === false) {
  //     for (var i = 0; i < n; i++) {
  //       for (var j = 0; j < currentBoard.attributes.n; j++) {
  //         if (placedPeices.indexOf(JSON.stringify([i, j])) < 0) {
  //           searchBoard(currentBoard, placedPeices, n - 1, i, j);
  //           currentBoard.togglePiece(i, j);
  //           placedPeices.pop();
  //         }
  //       }
  //     }
  //   }
  // };
  // //for ( var i = 0; i < n; i++) {
  // for ( var j = 0; j < n; j++) {
  //   searchBoard(board, [], n, 0, j);
  //   board.togglePiece(0, j);
  // }
  // for (var key in solution) {
  //   solutionCount++;
  // }
  //}
  //an option is to save a solution as a stringified key.
  var solutionCount = n * countNRooksSolutions(n - 1);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = {};
  var solutionCount = 0;
  var board = new Board ({n: n});
  var oSolution = '';
  if (n === 0) {
    oSolution = board;
  }

  var searchBoard = function (currentBoard, placedPeices, n, x, y) {
    // debugger;
    currentBoard.togglePiece(x, y);
    placedPeices.push(JSON.stringify([x, y]));

    if (n === 1 && !currentBoard.hasAnyQueensConflicts()) {
      var string = JSON.stringify(currentBoard.rows());
      solution[string] = true;
      //console.table(currentBoard.rows());
      //solutionCount++;
      return;
    }

    if (currentBoard.hasAnyQueensConflicts() === false) {
      for (var i = 0; i < currentBoard.attributes.n; i++) {
        for (var j = 0; j < n; j++) {
          if (placedPeices.indexOf(JSON.stringify([i, j])) < 0) {
            searchBoard(currentBoard, placedPeices, n - 1, i, j);
            currentBoard.togglePiece(i, j);
            placedPeices.pop();
          }
        }
      }
    }
  };
  //for ( var i = 0; i < n; i++) {
  for ( var j = 0; j < n; j++) {
    searchBoard(board, [], n, 0, j);
    board.togglePiece(0, j);
  }
  for (var key in solution) {
    oSolution = key;
    solutionCount++;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return oSolution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = {};
  var solutionCount = 0;
  var board = new Board ({n: n});
  if (n === 0) {
    return 1;
  }
  if (n === 2 || n === 3) {
    return 0;
  }
  var searchBoard = function (currentBoard, placedPeices, n, x, y) {
    // debugger;
    currentBoard.togglePiece(x, y);
    placedPeices.push(JSON.stringify([x, y]));

    if (n === 1 && !currentBoard.hasAnyQueensConflicts()) {
      var string = JSON.stringify(currentBoard.rows());
      solution[string] = true;
      //console.table(currentBoard.rows());
      //solutionCount++;
      return;
    }

    if (currentBoard.hasAnyQueensConflicts() === false) {
      for (var i = 0; i < currentBoard.attributes.n; i++) {
        for (var j = 0; j < n; j++) {
          if (placedPeices.indexOf(JSON.stringify([i, j])) < 0) {
            searchBoard(currentBoard, placedPeices, n - 1, i, j);
            currentBoard.togglePiece(i, j);
            placedPeices.pop();
          }
        }
      }
    }
  };
  //for ( var i = 0; i < n; i++) {
  for ( var j = 0; j < n; j++) {
    searchBoard(board, [], n, 0, j);
    board.togglePiece(0, j);
  }
  for (var key in solution) {
    console.log('working...');
    solutionCount++;
  }
  //}
  //an option is to save a solution as a stringified key.
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  
  return solutionCount;
};
