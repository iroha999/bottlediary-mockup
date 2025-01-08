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
      {/* <div className="mt-8">
        <Link href="/api/helloNextJs" className="block text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors mb-4">
          Hello NextJS
        </Link>
        <Link href="/api/py/helloFastApi" className="block text-center py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors">
          Hello FastAPI
        </Link>
      </div> */}
    </div>
  )
}