import { FC } from 'react'
import { ContentObject, ContentType, IPost } from '../../types/types.ts'
import PostWrapper from './PostWrapper.tsx'
import Reel from './Reel.tsx'

const PostBlock: FC<IPost> = ({ id, author, content, stats }) => {
  const contentComponents = ({ url }: ContentObject) => ({
    [ContentType.Reel]: <Reel src={url} />,
  })

  return (
    <PostWrapper key={id} author={author} stats={stats} postedTimeString='2 hours ago'>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <div>{content.map((content) => contentComponents(content)[content.type])}</div>
    </PostWrapper>
  )
}

export default PostBlock
