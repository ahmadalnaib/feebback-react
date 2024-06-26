import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }


  return (
    <div>
      <h2 >Feedback List</h2>
     <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}

     </div>

    </div>
  )
}


FeedbackList.propTypes = {
  feedback:PropTypes.array.isRequired
}
export default FeedbackList