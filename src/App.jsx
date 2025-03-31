//import logo from './logo.svg';
import cardsData from './data.json';
import './App.css';

function App() {
  return (
    <Container/>
  );
}


function Container() {
  return (
    <div className="container">
      <YourResult/>
      <Summary/>
    </div>
  )
}

function YourResult() {
  return (
    <div className="your-result">
      <p>Your Result</p>
      <Score value="76"/>
      <p className="score-feedback">Great</p>
      <p className="score-comparative">You scored higher than 65% of the people who have taken these tests.</p> {/* Value 65 should be a variable? */}
    </div>
  )
}

function Score({value}) {
  return (
    <div className="score-div">
      <p className="score-number">{value}</p>
      <p>of 100</p>
    </div>
  )
}

function Summary() {
  return (
    <div className="summary">
      <p>Summary</p>
      {
        cardsData.map(card => (
          <SummaryScoreCard category={card.category} score={card.score} icon={card.icon}/>
        ))
      }
      <Button text="Continue" url=""/>
    </div>

  )
}

function SummaryScoreCard({category, score, icon}) {
  return (
    <div className="summary-card" id={`summary-card-${category}`}>
      <img src={icon}/>
      <div>{category}</div>
      <div>{score} / 100</div>
  </div>
  );
}

function Button({text, url}) {
  return (
    <a href={url} className="button">
      {text}
    </a>
  )
}

export default App;
