import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Expform from '@/components/form/expform'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Expform />
      </div>
    </main>
  )
}
