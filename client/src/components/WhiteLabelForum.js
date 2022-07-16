import React, { useState }  from 'react';

function WhiteLabelForum() {
  const [showSamples, setShowSamples] = useState(false)

  function handleSampleName() {
    setShowSamples(showSamples => !showSamples)
  }

  let samples = ["/fi-school-cohort-b"]

  const sample = samples[Math.floor(Math.random() * samples.length)];

  return (
    <div className="white-label-forum">
        {showSamples ? <h1>{sample}</h1> : <h1>/white-label-forum</h1>}
        <p className="experience" onClick={handleSampleName}>find your community</p>
    </div>
  )
}

export default WhiteLabelForum