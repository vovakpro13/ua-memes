import Section from '../Section'
import * as classNames from 'classnames'
import { ReactComponent as DotsIcon } from '../../../../assets/icons/post/dots.svg'
import { ReactComponent as LikeIcon } from '../../../../assets/icons/post/like.svg'
import { ReactComponent as CommentIcon } from '../../../../assets/icons/post/comment.svg'
import { ReactComponent as ShareIcon } from '../../../../assets/icons/post/share.svg'
import { ReactComponent as SaveIcon } from '../../../../assets/icons/post/save.svg'
import { FC, ReactNode } from 'react'
import { IAuthor, IPostStats } from '../../types/types.ts'

type Props = {
  author: IAuthor
  stats: IPostStats
  postedTimeString: string

  children?: ReactNode
}

const PostWrapper: FC<Props> = ({
  author: { avatar, name },
  postedTimeString,
  stats: { likes, comments },

  children,
}) => {
  return (
    <Section>
      <div className={classNames('flex justify-between items-center')}>
        <div className={classNames('flex items-center gap-[8px]')}>
          <img className='rounded-[70px] w-[38px] h-[38px]' src={avatar} alt={name} />

          <div>
            <h4 className='text-[16px] font-bold'>{name}</h4>
            <p className='text-[12px] text-[#727477]'>{postedTimeString}</p>
          </div>
        </div>

        <button>
          <div className='w-[24px] h-[24px]'>
            <DotsIcon />
          </div>
        </button>
      </div>

      <div className={classNames('my-[16px]')}>{children}</div>

      <div className={classNames('flex justify-between items-center')}>
        <div className={classNames('flex items-center gap-[20px]')}>
          <button className='flex items-center gap-[8px]'>
            <div className='w-[20px] h-[20px]'>
              <LikeIcon />
            </div>

            <p>{likes}</p>
          </button>

          <button className='flex items-center gap-[8px]'>
            <div className='w-[20px] h-[20px]'>
              <CommentIcon />
            </div>

            <p>{comments}</p>
          </button>

          <button className='w-[20px] h-[20px]'>
            <ShareIcon />
          </button>
        </div>

        <div>
          <button className=''>
            <div className='w-[24px] h-[24px]'>
              <SaveIcon />
            </div>
          </button>
        </div>
      </div>
    </Section>
  )
}

export default PostWrapper
