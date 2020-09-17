import React from 'react'

import {
    Container
} from './styles'

function InstagramPosts({posts}){
    return(
        <Container>
            {
                posts.map(post => (
                    <a href = {`https://instagram.com/p/${post.shortcode}`} >
                    <img key = {post.shortcode} src = {post.display_url} />
                    </a>
                    ))
            }
        </Container>
    )
}

export default InstagramPosts