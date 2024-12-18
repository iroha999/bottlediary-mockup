import Link from 'next/link'
import { MessageList } from '../components/MessageList'
import { NewMessageForm } from '../components/NewMessageForm'
import { Bottle } from '../components/Icons'
import { FaUserCircle } from 'react-icons/fa'

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <header className="bg-white text-black shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Bottle className="w-8 h-8 mr-2" />
                        <h1 className="text-2xl font-bold">Bottle Diary</h1>
                    </div>
                    <Link href="/account" className="hover:underline">
                        <FaUserCircle className="w-8 h-8 text-black" />
                    </Link>
                </div>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2">
                        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md h-full">
                            <MessageList />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md h-96">
                            <NewMessageForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}