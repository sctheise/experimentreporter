'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
 
import { useState } from 'react'
import Detail from '../report/detail'
 
export default function Expform() {
 
  const [name, setName] = useState('')
  const [ID, setID] = useState('')
  const [date, setDate] = useState('')
  const [Hypothesis, setHypothesis] = useState('')
  const [primaryMetric, setPrimaryMetric] = useState('')
  const [secondaryMetric, setSecondaryMetric] = useState('')

  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Experiment Name</Label>
        <Input onChange={(e) => setName(e.target.value)} type='text' placeholder='Experiment Name' />
        <Label htmlFor="email">Experiment ID</Label>
        <Input onChange={(e) => setID(e.target.value)} type='text' placeholder='Experiment ID' />
        <Label htmlFor="email">Hypothesis</Label>
        <Input onChange={(e) => setHypothesis(e.target.value)} type='text' placeholder='Experiment Hypothesis' />
        <Label htmlFor="email">Primary Metric</Label>
        <Input onChange={(e) => setPrimaryMetric(e.target.value)} type='text' placeholder='Primary Metric' />
        <Label htmlFor="email">Secondary Metric</Label>
        <Input onChange={(e) => setSecondaryMetric(e.target.value)} type='text' placeholder='Secondary Metric' />
      </div>
      
      

      <br />
      <div className='bg-white px-5 py-5' style={{width: '930px', height: '1315.5px'}}>
        <div className='flex bg-slate-800 h-24 w-full'>
          <h1 className='text-white flex-none w-32 px-2'><Detail title={"ID"} detail={ID} /></h1>
          <div className='text-white m-auto'> 
            <h1 className='text-white text-3xl'><Detail detail={name} /> </h1>
          </div>
          <h1 className='text-white flex-none w-32'> [Logo] </h1>
        </div>
        <Detail title={"Experiment Hypothesis"} detail={Hypothesis} />
        <Detail title={"Primary Metric"} detail={primaryMetric} />
        <Detail title={"Secondary Metric"} detail={secondaryMetric} />
      </div>
      
    </div>
  )
}