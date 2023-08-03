import { FC } from 'react'
import ContentWrapper from './ContentWrapper.tsx'

const Reel: FC<{ src?: string }> = ({ src }) => {
  return (
    <ContentWrapper>
      <video src={src} muted autoPlay playsInline controls></video>
    </ContentWrapper>
  )
}

export default Reel
