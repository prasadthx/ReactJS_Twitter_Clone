import { Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'
import {Avatar} from '@material-ui/core'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5qUK1NRca6MHY7knQbCa1LpF9WR0Uo78hw&usqp=CAU'/>
                    <input placeholder='How are you doing buddy' type='text'/>
                </div>
                <input className='tweetBox__imageInput' placeholder='Enter image URL' type='text'/>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
