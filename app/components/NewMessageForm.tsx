'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaPaperPlane } from 'react-icons/fa'

export function NewMessageForm() {
    const [message, setMessage] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [showName, setShowName] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSending(true)
        // メッセージ送信のロジックをここに追加
        // 送信が成功したらトースト通知を表示
        toast("ボトルメールは誰かのビーチに流れ着くでしょう")
        setIsSending(false)
        setMessage('') // 入力フィールドをクリア
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">新しいボトルメールを送信</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="メッセージを入力してください..."
                />
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="showName"
                        checked={showName}
                        onChange={(e) => setShowName(e.target.checked)}
                        className="mr-2"
                    />
                    <label htmlFor="showName">名前を表示する</label>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400 flex items-center justify-center"
                    disabled={isSending || message.trim() === ''}
                >
                    {isSending ? '送信中...' : <><FaPaperPlane className="mr-2" />送信</>}
                </button>
            </form>
            <ToastContainer position='top-center' style={{ width: 'auto', maxWidth: '80%' }} />
        </div>
    )
}