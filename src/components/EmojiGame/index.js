import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    isGameActive: true,
    clickedEmojisList: [],
  }

  finishGameAndSetScore = score => {
    const {topScore} = this.state

    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({isGameActive: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isClicked = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isClicked) {
      this.finishGameAndSetScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetScore(clickedEmojisLength)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {}

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const iswon = clickedEmojisList.length === emojisList.length
    return (
      <WinOrLoseCard
        iswon={iswon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.playAgain}
      />
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameActive} = this.state
    console.log(topScore)
    return (
      <div className="bg-container">
        <div className="top-container">
          <NavBar
            currScore={clickedEmojisList.length}
            topScore={topScore}
            isGameActive={isGameActive}
          />
        </div>
        <div className="bottom-container">
          {isGameActive ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
