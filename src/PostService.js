import axios from 'axios'

const url = 'api/posts/'

class PostService {
  // GET POST
  static getPosts () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        })))
      } catch (err) {
         reject(err)
    }
        })
  }
  
  // CREATE POST
  static insertPost(text){
   return axios.post(url,{
     text
   });
  }
  
  // DELETE POST
  static deletePost(id){
    return axios.delete(`${url}${id}`)
  }
}


export default PostService;