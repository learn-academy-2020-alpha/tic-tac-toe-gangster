import React, {Component} from 'react'
import Square from './Square.js'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            board: ["","","","","","","","",""],
            playerTurn: 1
        }
    }
    resetButton = () => {
        this.setState({board: ["","","","","","","","",""], playerTurn: 1})
    }

    handleLocation = (index) => {
        let newBoard = this.state.board
        if(this.state.playerTurn == 1 && newBoard[index] === "")
        {
            newBoard[index] = "X"
            this.setState({playerTurn: 2});
        }
        else if(this.state.playerTurn == 2 && newBoard[index] === "")
        {
            newBoard[index] = "O"
            this.setState({playerTurn: 1});
        }
        this.setState({board: newBoard})
        if (this.state.playerTurn !== 0) {
            this.checkWin()
        }
    }
    checkWin = () => {
        let newBoard = this.state.board
        if( newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }
        else if( newBoard[3] === "X" && newBoard[4] === "X" && newBoard[5] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[6] === "X" && newBoard[7] === "X" && newBoard[8] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[0] === "X" && newBoard[3] === "X" && newBoard[6] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[1] === "X" && newBoard[4] === "X" && newBoard[7] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[2] === "X" && newBoard[5] === "X" && newBoard[8] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[0] === "X" && newBoard[4] === "X" && newBoard[8] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[2] === "X" && newBoard[4] === "X" && newBoard[6] === "X" ) {
                alert("X is the Winner!")
                this.setState({playerTurn: 0})
        }
        else if( newBoard[0] === "O" && newBoard[1] === "O" && newBoard[2] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }
        else if( newBoard[3] === "O" && newBoard[4] === "O" && newBoard[5] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[6] === "O" && newBoard[7] === "O" && newBoard[8] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[0] === "O" && newBoard[3] === "O" && newBoard[6] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[1] === "O" && newBoard[4] === "O" && newBoard[7] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[2] === "O" && newBoard[5] === "O" && newBoard[8] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[0] === "O" && newBoard[4] === "O" && newBoard[8] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }else if( newBoard[2] === "O" && newBoard[4] === "O" && newBoard[6] === "O" ) {
                alert("O is the Winner!")
                this.setState({playerTurn: 0})
        }
    }



    render(){
        let square = this.state.board.map((value,index) => {
            return(
                <Square
                    handleLocation = {this.handleLocation}
                    index = {index}
                    value = {value}
                    />
            )
        })
        return(
            <>
                <div className="board">
                    {square}
                    <button onClick={this.resetButton}> Reset </button>
                </div>
            </>
        )
    }
}
export default Board
