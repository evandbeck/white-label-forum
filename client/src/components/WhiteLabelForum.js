import React, { useState }  from 'react';

function WhiteLabelForum() {
  const [showSamples, setShowSamples] = useState(false)
  const [example, setExample] = useState()

  function handleSampleName() {
    setShowSamples(showSamples => !showSamples)
  }

  let samples = ["/boston-celtics", "/minecraft-friends", "/kansas-bbq", "/ms-smiths-class", "/novelty-coin-collectors", "/astrology-club", "/scorpios", "/fi-school-cohort-b", "/beethoven-bros"]

  const sample = samples[Math.floor(Math.random() * samples.length)];

  return (
    <div className="white-label-forum">
        {showSamples ? <h1>{sample}</h1> : <h1>/white-label-forum</h1>}
        <a className="experience" onClick={handleSampleName}>see yourself here</a>
    </div>
  )
}

export default WhiteLabelForum