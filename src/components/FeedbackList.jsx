import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }


  return (
    <div>
      <h2 >Feedback List</h2>
     <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}

     </div>

    </div>
  )
}

export default FeedbackList