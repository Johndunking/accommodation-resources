import React from 'react'
import {useState, useEffect} from 'react'
import Teacher from '../../assets/Teacher.png'

import './gpt.css'

const Chatgpt = () => {
  const [ value, setValue] = useState("")
  const  [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState([])

  const createNewChat = () => {
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue("")
  }

  

  const getMessages = async () => {
    const options = {
      method: "POST",
      body : JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const serverURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

    try {
      const response = await fetch('https://accommodation-resources-7aaa1a2f27ae.herokuapp.com//completions',options)
      const data = await response.json()
      console.log("API Response:", data);
      setMessage(data.choices[0].message);
      setValue("")
      

     

    } catch (error) {
      console.error(error)
    }
  }

  console.log(message)

  




  useEffect(() => {

    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }
    if (currentTitle && value && message){
      setPreviousChats(prevChats => (
        [...prevChats, {
          title: currentTitle,
          role: "Student",
          content: value

        }, {
          title: currentTitle,
          role: message.role,
          content: message.content

        }]
      ))
    }
    

  }, [message, currentTitle])

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
  const uniqueTitle = Array.from(new Set(previousChats.map(previousChats => previousChats.title)))

  console.log(previousChats)







  return (
    <div className='app'>
        <section className='side-bar'>
          <button className='button' onClick={createNewChat}>+ New Chat</button>
          <ul className='history'>
          {uniqueTitle?.map((uniqueTitle, index) =>
            <li key={index} onClick={() => handleClick(uniqueTitle)}>
              {uniqueTitle}
            </li>)}
          </ul>
          <nav className='nav'>
            <p>Made by the Mr. Duncan</p>
          </nav>
        </section>
        <section className='main'>
          {currentTitle && <h1 className='title'> <img src={Teacher} alt='Teacher' fluid className='center' style={{ width: '18rem'}}/></h1>}
          <ul className='feed'>
            {currentChat?.map((chatMessage, index) => <li key={index}>
              <p className='role'>{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
              </li>)}

          </ul>
          <div className='bottom-section'>
            <div className='input-container'>
              <input value={value} onChange={(e) => setValue(e.target.value)} 
              onKeyUp={(e) => {if (e.key === "Enter") {e.preventDefault();  getMessages();}}}
              placeholder="Ask me anything!"
               />
              <div id='submit'  type='submit' onClick={getMessages}>➢</div>
              
            </div>
            <p className='info'>
              Ask any questions and i will do my best to support you!
            </p>

          </div>
        </section>
    </div>
  )
}

export default Chatgpt