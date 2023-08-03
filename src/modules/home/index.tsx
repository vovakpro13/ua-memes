import { FC } from 'react'
import Section from '../common/components/Section'
import * as classNames from 'classnames'
import StoryCard from './components/StoryCard'
import { ContentType, IPost } from '../common/types/types.ts'
import PostBlock from '../common/components/post/PostBlock.tsx'

const Posts: IPost[] = [
  {
    id: '1',
    author: {
      id: '0',
      name: 'ua_programmer',
      avatar: '/uap-avatar.jpg',
    },
    content: [{ type: ContentType.Reel, url: '/1.MP4' }],

    stats: {
      likes: 24,
      comments: 7,
    },
    saved: false,
  },
  {
    id: '1',
    author: {
      id: '0',
      name: 'ua_programmer',
      avatar: '/uap-avatar.jpg',
    },
    content: [{ type: ContentType.Reel, url: '/2.MP4' }],

    stats: {
      likes: 106,
      comments: 23,
    },
    saved: false,
  },
]

const Home: FC = () => {
  return (
    <div className='overflow-auto no-scrollbar'>
      <Section className='!px-0 !pt-[16px] !pb-[24px]'>
        <div className='flex px-[24px]'>
          <h1 className='text-[18px] font-bold'>UA MEMES</h1>
        </div>

        <div
          className={classNames(
            'mt-[32px] px-[24px]',
            'flex gap-[12px] overflow-x-auto no-scrollbar',
          )}
        >
          <StoryCard bgSrc='/laptop.png' avatarSrc='/man.webp' />
          <StoryCard bgSrc='/abs.png' avatarSrc='/woman.webp' />
        </div>
      </Section>

      {Posts.map((post) => (
        <PostBlock key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Home
