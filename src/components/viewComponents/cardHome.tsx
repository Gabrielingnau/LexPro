import { ReactElement } from 'react';
import { Buttom } from '@/components/buttom';

interface CardProps {
    title: string;
    subTitle: string
    svgChildren: ReactElement
    children: ReactElement
}

export function Card ({ title, subTitle, svgChildren, children }: CardProps) {
    return (
        <div className='flex flex-col min-h-[24rem] w-full justify-center max-w-[58rem] rounded-[.63rem] p-[1.9rem] shadow-cardHome bg-gradient-to-tl from-gray600 from-100% to-gray700'>
            <div className='flex w-full flex-col cell:items-start items-center gap-5'>
                <div className='flex flex-col cell:items-start items-center gap-4'>
                    {svgChildren}
                    <div>
                        <h2 className='text-white text-lg font-normal uppercase'>{subTitle}</h2>
                        <h2 className='text-white text-[1.75rem] font-bold uppercase'>{title}</h2>
                    </div>
                </div>

                <div className='flex flex-col cell:items-start items-center gap-4 text-base text-justify font-normal font-inter text-gray500 cell:text-start'>
                {children}
                </div>
                
                <div className='py-4'>
                  <Buttom title='Mais detalhes'/>
                </div>
            </div>
        </div>
    )
}