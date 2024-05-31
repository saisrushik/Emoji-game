import './index.css'

const WinOrLoseCard = props => {
  const {iswon, score, onClickPlayAgain} = props
  const imgUrl = iswon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = iswon ? 'You Won' : 'You Lose'
  const scoreLabel = iswon ? 'Best Score' : 'Score'

  return (
    <div>
      <h1>srushik</h1>
    </div>
  )
}

export default WinOrLoseCard
