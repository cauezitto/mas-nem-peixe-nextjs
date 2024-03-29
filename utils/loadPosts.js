import axios from 'axios'

const loadPosts = async () => {
        const response = await axios.get(`https://www.instagram.com/masnempeixeoficial/?__a=1`, {
        responseType: "json",
        headers: {
            'Content-Type': 'application/json'
          }
    })

    const posts = response.data.graphql.user.edge_owner_to_timeline_media.edges//[0].node.display_url

    let postsInfo = []

    //console.log(posts[0].node)
    for (let index = 0; index < posts.length; index++) {
        if(index < 5){
            postsInfo.push(posts[index].node)
        }
        
    }

    return postsInfo
}

export default loadPosts