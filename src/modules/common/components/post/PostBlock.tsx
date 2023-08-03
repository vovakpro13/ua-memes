import { FC } from 'react'
import { ContentObject, ContentType, IPost } from '../../types/types.ts'
import PostWrapper from './PostWrapper.tsx'
import Reel from './Reel.tsx'

const PostBlock: FC<IPost> = ({ id, author, content, stats, saved }) => {
  const contentComponents = ({ url }: ContentObject) => ({
    [ContentType.Reel]: <Reel src={url} />,
  })

  return (
    <PostWrapper key={id} author={author} stats={stats} postedTimeString='2 hours ago'>
      <div>{content.map((content) => contentComponents(content)[content.type])}</div>
    </PostWrapper>
  )
}

export default PostBlock
