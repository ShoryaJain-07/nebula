import {FC} from 'react'
import Image from "next/image"
import { RefreshCw, Square } from "lucide-react"
import { recentTxHeaders, recentTxDatas } from "@/constants"
import { etherTest, arbTest } from '@/assets' 
import styles from "@/styles/globalStyles.module.scss"

import TxHeader from "./TxHeader"

interface IProps {
    action: string;
}

const TradeTxs: FC<IProps> = ({ action }) => {
  return (
    <div className={`lg:w-[50%] w-[100%] h-[350px] text-[#fff] border-[2px] border-[#D2ECFF] rounded-[15px] recentTxs overflow-hidden gradient-trade_card ${styles.stats_mediumCard_glass}`}>

        <aside className="w-full sticky top-0 bg-[#090c13] p-[30px] h-[70px]">
            <div className="flex items-center h-full min-w-[300px] gap-[10px]">
                <h2 className="font-semibold xl:text-[24px] md:text-[18px] text-[16px]"> {action} </h2>
                <RefreshCw className="xl:w-[25px] xl:h-[25px] md:w-[18px] md:h-18px w-[15px] h-[15px] border-[1px] border-[#fff] text-[#fff] p-[2px] rounded-[5px]" />
            </div> 
        </aside>

        {/* HEADER */}
        <aside className={`w-full h-[60%] recentTxs overflow-y-auto flex items-center`}>

           <div className="md:w-[50%] w-[100%]">
                   <TxHeader styles="justify-between lg:translate-y-[0px] translate-y-[-8px] px-[40px]" headers={recentTxHeaders} sliceFrom={0} sliceTo={2} />

              {/* FROM & TO */}
               <div className='w-full flex justify-between p-[20px] mt-[20px] items-start'>
                   <div className='flex flex-col gap-[10px]'>
                         { recentTxDatas.map(tx => (
                            <div key={tx.id} className='flex gap-[10px]'>
                              <div className="flex items-center gap-[5px]">
                                 <aside className="flex items-end">
                                    <Image src={etherTest} alt="icon" className='md:w-[20px] md:h-[20px] w-[15px] h-[15px]' />
                                    <sub>
                                      <Image src={arbTest} alt="icon" />
                                    </sub>
                                 </aside>
                              </div>
                              <div className="flex flex-col">
                                 <h3 className='md:text-[12px] text-[10px]'> { tx.fromAmount } </h3>
                                 <h3 className="md:text-[12px] text-[10px]"> { tx.from } </h3>
                              </div>
                          </div>
                        )) }
                   </div>
                    <div className='flex flex-col gap-[10px]'>
                         { recentTxDatas.map(tx => (
                            <div key={tx.id} className='flex gap-[10px]'>
                              <div className="flex items-center gap-[5px]">
                                 <aside className="flex items-end">
                                    <Image src={etherTest} alt="icon" className='md:w-[20px] md:h-[20px] w-[15px] h-[15px]' />
                                    <sub>
                                      <Image src={arbTest} alt="icon" />
                                    </sub>
                                 </aside>
                              </div>
                              <div className="flex flex-col">
                                 <h3 className='md:text-[12px] text-[10px]'> { tx.fromAmount } ETH </h3>
                                 <h3 className="md:text-[12px] text-[10px]"> { tx.from } </h3>
                              </div>
                          </div>
                        )) }
                   </div>

               </div>
           </div>

            {/* tx type & time */}
           <div className="md:w-[50%] w-[100%]">
                    <TxHeader styles="lg:translate-y-[0px] md:translate-y-[-8px] translate-y-[-7px] justify-between px-[40px]" headers={recentTxHeaders} sliceFrom={2} sliceTo={4} />

                  <div className='w-full flex justify-around items-start mt-[10px]'>
                    <div className='flex flex-col gap-[25px]'>
                          { recentTxDatas.map(tx => (
                              <h3 className="md:text-[14px] text-[12px]" key={tx.id}> { tx.txType } </h3>
                          )) }
                    </div>
                    <div className='flex flex-col gap-[25px]'>
                          { recentTxDatas.map(tx => (
                              <h3 className="md:text-[14px] text-[12px]" key={tx.id}> 22/02 13:00:45 </h3>
                          )) }
                    </div>
               </div>
           </div>
        </aside>

        <div className="w-full h-[50px] sticky bottom-0 left-0 mt-[20px] bg-[#151a47]">
            <h4 className="flex w-full h-full items-center font-medium md:text-[14px] text-[12px] gap-[20px] justify-center cursor-pointer"> 
               See more
               <Square className="w-[14px] h-[14px]" />
            </h4>
        </div>
    </div>
  )
}

export default TradeTxs