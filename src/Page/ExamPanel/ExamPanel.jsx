import React  from 'react'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
import ExamPanelcard from './ExamPanelcard'

export default function ExamPanel() {
  
  return (
    <div>
        <NavBar/> 

        <ExamPanelcard/>
        <Footer/>
    </div>
  )
}
