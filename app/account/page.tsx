'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Bottle } from '../components/Icons'
import { FaUserCircle } from 'react-icons/fa'

export default function Account() {
    const router = useRouter()

    const handleLogout = () => {
        // ここに実際のログアウト処理を実装します
        // 例: クッキーやローカルストレージからユーザー情報を削除するなど

        // ログアウト後、エントリーページにリダイレクト
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-white text-black"> 
            <header className="bg-white text-black shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <FaUserCircle className="w-8 h-8 mr-2" />
                        <h1 className="text-2xl font-bold">アカウントセンター</h1>
                    </div>
                    <Link href="/dashboard" className="hover:underline">ダッシュボードに戻る</Link>
                </div>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="max-w-md mx-auto border border-gray-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">アカウント情報</h2>
                    <div className="space-y-4">
                        <p><strong>ユーザー名:</strong> ユーザー1</p>
                        <p><strong>メールアドレス:</strong> user1@example.com</p>
                        <button
                            onClick={handleLogout}
                            className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                        >
                            ログアウト
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

