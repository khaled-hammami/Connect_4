import React from "react";
import {
    GAME_STATE_DRAW,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN
} from '../Constants';

const Header = ({ gameState, currentPlayer, winPlayer }) => {
    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return `Player ${currentPlayer} Turn`;
            case GAME_STATE_WIN:
                return `Player ${winPlayer} Wins`;
            case GAME_STATE_DRAW:
                return <div>Game is Draw</div>;
            default:
                return "Unknown State";
        }
    };

    return (
        <div className="panel header">
            <div className="header-text"> {renderLabel()} </div>
        </div>
    );
};

export default Header;
