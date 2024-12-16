import Link from 'next/link'
import { Bottle } from './components/Icons'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <Bottle className="w-24 h-24 mb-8 text-black" />
      <h1 className="text-4xl font-bold mb-8 text-center">Bottle Diary</h1>
      <Link href="/dashboard" className="w-64 text-center py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors">
        始める
      </Link>
    </div>
  )
}

