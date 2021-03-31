import { Button } from '@material-ui/core'
import { React, useState } from 'react'
import './TweetBox.css'
import {Avatar} from '@material-ui/core'
import db from '../../firebase'
function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setImage] = useState("")

    const sendTweet = e => {
        e.preventDefault()
        db.collection('posts').add({
            displayName: 'Prasad Zore',
            userName: 'prasadthx',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5qUK1NRca6MHY7knQbCa1LpF9WR0Uo78hw&usqp=CAU'
        })

        setTweetMessage("")
        setImage("")
    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5qUK1NRca6MHY7knQbCa1LpF9WR0Uo78hw&usqp=CAU'/>
                    <input 
                    placeholder='How are you doing buddy' 
                    type='text'
                    value = {tweetMessage}
                    onChange = {(e) => setTweetMessage(e.target.value)}/>
                </div>
                <input 
                className='tweetBox__imageInput' 
                placeholder='Enter image URL' type='text'
                value = {tweetImage}
                onChange = {(e) => setImage(e.target.value)}/>
                <Button onClick={sendTweet} type ='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
