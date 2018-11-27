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

const switchPlayer = () => {
    state.currentPlayer = state.currentPlayer === "white" ? "black" : "white";
    // let show which players move is now
    mainElement.className = state.currentPlayer;
    currentPlayerElement.innerText = state.currentPlayer + "s";
}

const putPieceIntoTheEmptyCell = (selectedPieceElement) => {
    console.info(state.selectedPieceElement.title, "-", selectedPieceElement.title);
    selectedPieceElement.innerHTML = state.selectedPieceElement.innerHTML;
    // noinspection JSPrimitiveTypeWrapperUsage
    state.selectedPieceElement.innerHTML = "";
    // empty selectedPiece variable, so next time player clicks on the field, it will be selection of the piece.
    state.selectedPieceElement = false;
    switchPlayer();
};

mainElement.onmouseup = (event) => {
    const selectedPieceElement = event.target;
    const selectedPieceCode = selectedPieceElement && selectedPieceElement.innerHTML.charCodeAt(0x0);
    const stateSelecetedPieceCode = state.selectedPieceElement && state.selectedPieceElement.innerHTML.charCodeAt(0x0);

    // @todo replace if with a switch-case?
    // if player already selected some piece, and click on the <strong>not empty</strong> cell, it means...
    if (state.selectedPieceElement && !selectedPieceElement.innerHTML) {
        // ...that player already selected some piece, so now it's time to choose which cell he wants to put it.
        putPieceIntoTheEmptyCell(selectedPieceElement);
        clearSelection();
    } else if (state.selectedPieceElement && selectedPieceElement.innerHTML) {
        // player clicked to the cell with other piece, so we need to check
        // if it's an enemy (the piece with the different color), then we need to replace
        // this piece with players, otherwise we should just switch
        console.log("cell with piece selected when state.selectedPieceElement is not false.");
        selectedPieceElement.innerHTML = state.selectedPieceElement.innerHTML;
        // noinspection JSPrimitiveTypeWrapperUsage
        state.selectedPieceElement.innerHTML = "";
        switchPlayer();
        // @todo: implement eaten pieces on the side of the board
        clearSelection();
        state.selectedPieceElement = false;

    } else if (!state.selectedPieceElement && selectedPieceElement.innerHTML) {
        // player will use this piece to make his move, so we need to store it somewhere.
        // but we need to be sure that it's correct piece of color the same as the player.
        if ((state.currentPlayer === "white" && selectedPieceCode <= 9817) ||
            (state.currentPlayer === "black" && selectedPieceCode > 9817)) {
            // if white player is trying to move white piece
            // or black player trying to move black piece then let him do it.
            state.selectedPieceElement = selectedPieceElement;
            selectedPieceElement.classList.add("selected");
        }
    }
};


