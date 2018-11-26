// Live reload для бедных:
// setTimeout(() => location.reload(true), 0xfff);

/*
    white chess king	♔	U+2654	&#9812;
    white chess queen	♕	U+2655	&#9813;
    white chess rook	♖	U+2656	&#9814;
    white chess bishop	♗	U+2657	&#9815;
    white chess knight	♘	U+2658	&#9816;
    white chess pawn	♙	U+2659	&#9817;
    black chess king	♚	U+265A	&#9818;
    black chess queen	♛	U+265B	&#981=9;
    black chess rook	♜	U+265C	&#9820;
    black chess bishop	♝	U+265D	&#9821;
    black chess knight	♞	U+265E	&#9822;
    black chess pawn	♟	U+265F	&#9823;
*/
const chessPieces = {
    "♔": {
        color: "white",
        name: "king",
        unicode: 2654,
        html: "&#9812;",
        value: "♔",
    },
    "♕": {
        color: "white",
        name: "king",
        unicode: 2655,
        html: "&#9813;",
        value: "♕",
    },
};

// @todo: highlight possible moves (need to get the state or store it form the beginning and render it)
const state = {
    selectedPiece: null,
    currentPlayer: "white",
};
document.getElementsByTagName("main")[0].onmouseup = (event) => {
    console.log(event);
    const selectedCell = event.target;
    if (state.selectedPiece) {
        // user already selected some piece, so
    } else {

    }
    state.currentPlayer = state.currentPlayer === "white" ? "black" : "white";


};


