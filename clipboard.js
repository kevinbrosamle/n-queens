// var searchBoard = function(n, x, y) {
  //   if (n === 0) {
  //     solutionCount++;
  //     return;
  //   }

  //   board.togglePiece(x, y);
    
  //   if (!board.hasAnyRooksConflicts()) {
  //     for (var i = 0; i < board.attributes.n; i++) {
  //       for (var j = 0; j < board.attributes.n; j++) {
          
  //         searchBoard(n - 1, i, j);
  //       }
  //     } 
  //   }
  // };

  // searchBoard(n, 0, 0);

   // for (var i = 0; i < currentBoard.attributes.n; i++) {
    //   for (var j = 0; j < currentBoard.attributes.n; j++) {
    //     if (placedPeices.indexOf([i, j]) < 0) {
    //       placedPeices.push([i, j]);
    //       currentBoard.togglePiece(i, j);
    //     }
    //     if (currentBoard.hasAnyRooksConflicts() === false) {
    //       searchBoard(currentBoard, placedPeices, n - 1);
    //     }
    //   }
    // }