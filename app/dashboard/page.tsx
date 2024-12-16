import Link from 'next/link'
import { MessageList } from '../components/MessageList'
import { NewMessageForm } from '../components/NewMessageForm'
import { Bottle } from '../components/Icons'

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-white text-black">
            <header className="bg-black text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Bottle className="w-8 h-8 mr-2" />
                        <h1 className="text-2xl font-bold">Bottle Diary</h1>
                    </div>
                    <Link href="/account" className="hover:underline">アカウント</Link>
                </div>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="max-w-2xl mx-auto">
                    <MessageList />
                    <NewMessageForm />
                </div>
            </main>
        </div>
    )
}

