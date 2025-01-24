'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'

const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Deutschland" },
    { code: "JP", name: "日本" },
    { code: "CN", name: "中国" },
    { code: "KR", name: "한국" },
    { code: "AU", name: "Australia" },
    { code: "IN", name: "भारत" }
]

export default function Account() {
    const router = useRouter()
    const [selectedCountry, setSelectedCountry] = useState('')

    const handleLogout = () => {
        // ここに実際のログアウト処理を実装します
        // 例: クッキーやローカルストレージからユーザー情報を削除するなど
        
        // ログアウト後、エントリーページにリダイレクト
        router.push('/')
    }

    interface CountryChangeEvent extends React.ChangeEvent<HTMLSelectElement> { }

    const handleCountryChange = (event: CountryChangeEvent) => {
        setSelectedCountry(event.target.value)
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
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">国</label>
                            <select
                                id="country"
                                name="country"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">選択してください</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.name}>{country.name}</option>
                                ))}
                            </select>
                        </div>
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