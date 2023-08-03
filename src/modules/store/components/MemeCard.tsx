import { FC } from 'react'
import { FileTypes } from '../../common/types/types.ts'
import { ReactComponent as DownloadIcon } from '../../../assets/icons/store/download.svg'

type Props = {
  type: FileTypes
  src: string
  name?: string
}

const MemeCard: FC<Props> = ({ src, name, type }) => {
  const getContent = () => ({
    [FileTypes.Image]: <img src={src} alt={name} />,
    [FileTypes.Video]: (
      <video className='bottom-0 absolute' src={src} muted autoPlay playsInline controls></video>
    ),
  })

  const download = () => {
    const a = document.createElement('a')
    a.href = src
    a.download = src.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className='max-h-[360px] w-full rounded-[10px] flex flex-col'>
      <div className='h-[250px] max-h-[250px] overflow-hidden relative'>{getContent()[type]}</div>

      <div className='py-[10px] flex justify-between items-center gap-[15px]'>
        <div className='flex-1'>
          <h5 className='text-[12px]'>{name}</h5>
        </div>

        <button onClick={download} className='w-[24px] h-[24px]'>
          <DownloadIcon />
        </button>
      </div>
    </div>
  )
}

export default MemeCard
