import { useState, useEffect } from 'react'
import * as S from './styles'
import loadPosts from 'utils/loadPosts'
import ItemsCarousel from 'react-items-carousel'
import Image from 'next/image'
import { Wrapper } from 'components/Wrapper/styles'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import DivisorHeader from 'components/DivisorHeader'
import { FiInstagram } from 'react-icons/fi'

interface PostsProps {
  shortcode: string
  display_url: string
}

const InstagramPosts = () => {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 20

  const loadPostsData = async () => {
    const posts = await loadPosts()

    setPosts(posts)
  }

  useEffect(() => {
    loadPostsData()
  }, [])

  useEffect(() => {
    posts.map((post) => console.log(post.display_url))
  }, [posts])
  return (
    <>
      <DivisorHeader>
        <h2 className="variable">
          <FiInstagram /> &nbsp; <b>SIGA NOSSO INSTAGRAM</b>
        </h2>
        <h2 className="variable">&nbsp; @MASNEMPEIXEOFICIAL</h2>
      </DivisorHeader>
      <Wrapper>
        <S.Wrapper>
          {posts.map((post) => (
            <a
              href={`https://www.instagram.com/p/${post.shortcode}`}
              target="_blank"
              rel="noreferrer"
              key={post.shortcode}
            >
              <Image
                className="post"
                src={post.display_url}
                width={225}
                height={225}
              />
            </a>
          ))}
        </S.Wrapper>

        <S.MobileWrapper>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={2}
            gutter={20}
            leftChevron={
              <button
                style={{ background: 'none', border: 'none', outline: 'none' }}
              >
                {' '}
                <IoIosArrowBack size={30} />{' '}
              </button>
            }
            rightChevron={
              <button
                style={{ background: 'none', border: 'none', outline: 'none' }}
              >
                {' '}
                <IoIosArrowForward size={30} />{' '}
              </button>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {posts.map((post) => (
              <a
                href={`https://www.instagram.com/p/${post.shortcode}`}
                target="_blank"
                rel="noreferrer"
                key={post.shortcode}
              >
                <Image
                  className="post"
                  src={post.display_url}
                  width={225}
                  height={225}
                />
              </a>
            ))}
          </ItemsCarousel>
        </S.MobileWrapper>
      </Wrapper>
    </>
  )
}

export default InstagramPosts
