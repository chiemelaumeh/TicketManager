import { useState } from 'react'
import Dropdown from 'react-dropdown'
import '../../CssFiles/SinglePage.css'

const SinglePage = () => {

    const [text, setText] = useState('')

    const options = [
        'Not Started', 'In Progress', 'Completed'
    ]
    const defaultOption = options[0]

    const onSelect = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Make a post request to comments

        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }


    return(
        <div className='singlePageContainer'>
        <h1>Single Page</h1>
        <div className='SingleTicket'>
            <h4>UserName</h4>
            <h3>Ticket Title: Broken Wifi</h3>
            <p>Ticket Description: This Some BS fix it</p>
        <h6>Change Ticket Status</h6>
        <Dropdown options={options} conChange={onSelect} value={defaultOption}  />
        </div>

        <div>
            <h2>Ticket #626</h2>
            <h3>Campus: H Town</h3>
            <h3>Priority: Routine</h3>
            <h3>Date: TODAY</h3>
            <form onSubmit={handleSubmit} className="postComment">
                <input type="text" value={text} onChange={handleChange} className="commentInputBox"/>
                <button type="submit">Submit Comment</button>
            </form>
        </div>
        </div>
    )
}

export default SinglePage