import React from 'react'
import './App.css'
import Card from './Card'
import Comment from './Comment'




const App = () => {


  return (
    <div className="ui comments" style={{ paddingTop: "10px", paddingLeft: "15px" }}>
      <Card>
        <Comment name="Alice Cooper" timeAgo="1 days ago" star="4 Stars" comment=" Hey guys, Exelent React exercise." />
      </Card>
      <Card>
        <Comment name="Ozzy Ozburne" timeAgo="1 days ago" star="5 Stars" comment="This exercise awesome." />
      </Card>
    </div>
  )
}

export default App;