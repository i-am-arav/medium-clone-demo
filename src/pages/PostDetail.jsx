    import React from 'react'
import { useParams } from 'react-router-dom'
    
    const PostDetail = ({}) => {
        const { slug } = useParams();

      return (
        <div>PostDetail</div>
      )
    }
    
    export default PostDetail