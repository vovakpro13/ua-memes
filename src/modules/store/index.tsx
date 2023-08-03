import { FC } from 'react'
import Section from '../common/components/Section'
import SearchBar from './components/SearchBar.tsx'
import Tag from './components/Tag.tsx'
import MemeCard from './components/MemeCard.tsx'
import { FileTypes } from '../common/types/types.ts'

const Store: FC = () => {
  return (
    <div className='overflow-auto no-scrollbar'>
      <Section className='!border-0 !px-0'>
        <div className='flex px-[24px]'>
          <SearchBar />
        </div>

        <div className='mt-[24px]'>
          <h3 className='text-[18px] font-bold px-[24px]'>Популярні Теги</h3>

          <div className='mt-[13px] flex gap-[12px] overflow-auto no-scrollbar px-[24px]'>
            <Tag name='Усі' selected />
            <Tag name='коти' />
            <Tag name='музика' />
            <Tag name='танець' />
            <Tag name='машини' />
            <Tag name='лайтове' />
            <Tag name='село' />
            <Tag name='політика' />
          </div>
        </div>
      </Section>

      <Section className='!border-0'>
        <div className='grid grid-cols-2 gap-[20px]'>
          <MemeCard
            type={FileTypes.Video}
            src='/grands.mp4'
            name='Дід спить, поки бабка говорить'
          />
          <MemeCard type={FileTypes.Video} src='/cat.mp4' name='Кіт ловить промінь від лазера' />
          <MemeCard type={FileTypes.Video} src='/cat2.mp4' name='Кіт впирається об двері' />
          <MemeCard
            type={FileTypes.Video}
            src='/fatman.mp4'
            name='Жирний чоловік пригає і вдаряється об лід'
          />
          <MemeCard type={FileTypes.Video} src='/childs.mp4' name='Дитина їсть ціпля' />
        </div>
      </Section>
    </div>
  )
}

export default Store
