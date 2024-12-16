'use client'

import { useState } from 'react'
import { Bottle } from './Icons'

export function MessageList() {
    const [messages, setMessages] = useState([
        { id: 1, content: "こんにちは、元気ですか？", date: "2023-06-01", isOpen: false, sender: "匿名" },
        { id: 2, content: "素敵な一日をお過ごしください。", date: "2023-06-02", isOpen: false, sender: "ユーザー1" },
        { id: 3, content: "あなたの夢を諦めないでください。", date: "2023-06-03", isOpen: false, sender: "匿名" },
    ])

    const openMessage = (id: number) => {
        setMessages(messages.map(msg =>
            msg.id === id ? { ...msg, isOpen: true } : msg
        ))
    }

    const closedMessages = messages.filter(msg => !msg.isOpen)

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                受信したボトルメール ({closedMessages.length}通)
            </h2>
            <div className="space-y-6">
                {messages.map((message) => (
                    <div key={message.id} className="border border-gray-200 p-6 rounded-lg shadow-md">
                        {message.isOpen ? (
                            <>
                                <p className="mb-4 text-lg">{message.content}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <p>送信者: {message.sender}</p>
                                    <p>{message.date}</p>
                                </div>
                            </>
                        ) : (
                            <button
                                onClick={() => openMessage(message.id)}
                                className="w-full text-left hover:underline flex items-center justify-center"
                            >
                                <Bottle className="w-8 h-8 mr-2 text-black" />
                                <span>クリックしてメッセージを開く</span>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

