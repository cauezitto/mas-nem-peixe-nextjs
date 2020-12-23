import axios from 'axios'
import postsJson from './posts.json'

type Props = {
  shortcode: string
  display_url: string
}

const loadPosts = async () => {
  const response = await axios
    .get(`https://www.instagram.com/masnempeixeoficial/?__a=1`, {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch((err) => console.log(err))

  if (!response) {
    const posts = postsJson.graphql.user.edge_owner_to_timeline_media.edges //[0].node.display_url

    const postsInfo = []

    //console.log(posts[0].node)
    for (let index = 0; index < posts.length; index++) {
      if (index < 4) {
        postsInfo.push(posts[index].node)
      }
    }

    return postsInfo
  }

  const posts = response.data.graphql.user.edge_owner_to_timeline_media.edges //[0].node.display_url

  const postsInfo = []

  //console.log(posts[0].node)
  for (let index = 0; index < posts.length; index++) {
    if (index < 4) {
      postsInfo.push(posts[index].node)
    }
  }

  return postsInfo

  // return []
}

export default loadPosts
