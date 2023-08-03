import * as classNames from 'classnames'

// eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const StoryCard = ({ bgSrc, avatarSrc }) => {
  return (
    <div
      className={classNames(
        'min-w-[100px] w-[100px] h-[140px] rounded-[16px] relative overflow-hidden',
      )}
    >
      <img src={bgSrc} alt='' className='h-full object-cover' />

      <div
        className='absolute top-0 w-full h-full z-10'
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)',
        }}
      ></div>

      <div className='z-20 absolute bottom-[8px] w-full flex justify-center'>
        <div
          className='rounded-full w-[40px] h-[40px] border-2 border-black-800 overflow-hidden'
          style={{ outline: '2px solid mediumvioletred' }}
        >
          <img src={avatarSrc} alt='' className='object-cover h-full w-full' />
        </div>
      </div>
    </div>
  )
}

export default StoryCard
