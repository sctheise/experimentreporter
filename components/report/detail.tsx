'use client'
import { Input } from '@/components/ui/input'
 
import { FC, useState } from 'react'
 
interface DetailProps{ 
    title?: string
    detail: string
}
const Detail: FC<DetailProps> = ({detail, title}) => {
  return (
    <div>
      <p>{title ? title + `:` : ''} {detail}</p>
    </div>
  )
}

export default Detail