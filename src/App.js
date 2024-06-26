import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/feedbackData";


function App()
{
  const[feedback,setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  return (
    <>
    <Header/>
    <div className="container">
 <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>

  )
}

export default App;