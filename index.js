// Live reload для бедных:
//setTimeout(() => location.reload(true), 0xfff);

/**
        <h3>White CHess Pieces:</h3>
    white chess king	♔	U+2654	&#9812;
    white chess queen	♕	U+2655	&#9813;
    white chess rook	♖	U+2656	&#9814;
    white chess bishop	♗	U+2657	&#9815;
    white chess knight	♘	U+2658	&#9816;
    white chess pawn	♙	U+2659	&#9817;

        <h3>Black Chess Pieces:</h3>
    black chess king	♚	U+265A	&#9818;
    black chess queen	♛	U+265B	&#9819;
    black chess rook	♜	U+265C	&#9820;
    black chess bishop	♝	U+265D	&#9821;
    black chess knight	♞	U+265E	&#9822;
    black chess pawn	♟	U+265F	&#9823;
*/

// @todo: highlight possible moves (need to get the state or store it form the beginning and render it)
const state = {
    selectedPieceElement: false,
    currentPlayer: "white",
};
const currentPlayerElement = document.getElementById("current-player");
const mainElement = document.getElementById("main");
const clearSelection = () => mainElement.childNodes.forEach(rowNode => rowNode.childNodes.forEach(cellNode => cellNode.classList && cellNode.classList.remove("selected")));
mainElement.onmouseup = (event) => {
    const selectedPieceElement = event.target;
    // if player already selected some piece, and click on the <strong>not empty</strong> cell, it means...
    if (state.selectedPieceElement && !selectedPieceElement.innerHTML) {
        // ...that user already selected some piece, so now it's time to choose which cell he wants to put it.
        selectedPieceElement.innerHTML = state.selectedPieceElement.innerHTML;
        state.selectedPieceElement.innerHTML = "";
        // empty selectedPiece variable, so next time player clicks on the field, it will be selection of the piece.
        state.selectedPieceElement = false;
        // let show which players move is now
        state.currentPlayer = state.currentPlayer === "white" ? "black" : "white";
        mainElement.className = state.currentPlayer;
        currentPlayerElement.innerText = state.currentPlayer + "s";
        clearSelection();
    } else if (selectedPieceElement.innerHTML) {
        // user will use this piece to make his move, so we need to store it somewhere.
        state.selectedPieceElement = selectedPieceElement;
        clearSelection();
        selectedPieceElement.classList.add("selected");
    } else {
        console.log("user clicked on the empty cell, so do nothing. Or something need to be done?")
    }
};


