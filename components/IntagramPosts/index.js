import React, {useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import {
    Container
} from './styles'

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

function InstagramPosts({posts}){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return(
        <Container>

                {
                posts.map(post => (
                    <a href = {`https://instagram.com/p/${post.shortcode}`} className = 'desktop' >
                    <img key = {post.shortcode} src = {post.display_url} />
                    </a>
                    ))
                }
            
            <div className = 'mobile' style={{ padding: `0 ${chevronWidth}px`}}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={<IoIosArrowBack size = {25} />}
                    rightChevron={<IoIosArrowForward size = {25} />}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                {
                posts.map(post => (
                    <a href = {`https://instagram.com/p/${post.shortcode}`}>
                    <img key = {post.shortcode} src = {post.display_url} />
                    </a>
                    ))
                }
                </ItemsCarousel>
                </div>
        </Container>
    )
}

export default InstagramPosts