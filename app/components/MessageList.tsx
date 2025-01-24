'use client'

import { useState } from 'react'
import { Bottle } from './Icons'

export function MessageList() {
    const [messages, setMessages] = useState([
        { id: 1, content: "どんなに小さな一歩でも、前に進んでいることを忘れないでください。暗闇の中でも、希望の光は必ず見つかります。あなたは一人じゃありません。", date: "2025-01-15", isOpen: false, sender: "匿名" },
        { id: 2, content: "今日という日が、これからのあなたにとって素晴らしいものになりますように。過去の出来事に囚われず、新しい一歩を踏み出す勇気を持ってください。あなたの未来は輝いています。", date: "2025-01-15", isOpen: false, sender: "匿名" },
        { id: 3, content: "ここ数ヶ月、ずっと何もかも上手くいかないように感じて、心が疲れ果ててしまいました。だけど、それでも明日が来ることを信じています。少しでも元気を出せるように、こうして言葉を送ります。", date: "2025-01-15", isOpen: false, sender: "匿名" },
        { id: 4, content: "時には、立ち止まって自分を見つめ直すことが大切です。焦らず、無理をせず、一歩ずつ進んでいきましょう。あなたが歩む道は、あなた自身が作り上げるものです。", date: "2025-01-15", isOpen: false, sender: "匿名" },
        { id: 5, content: "最近、何もかもがうまくいかないように感じて、自分を責める日々が続いています。でも、それでも一つの希望を持ち続けています。もしも、あなたも同じように感じていたら、この言葉が少しでも届けばいいなと思います。", date: "2025-01-15", isOpen: false, sender: "匿名" }
    ]);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const toggleMessage = (id: number) => {
        setMessages(messages.map(msg =>
            msg.id === id ? { ...msg, isOpen: !msg.isOpen } : msg
        ))
    }

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen)
    }

    const closedMessages = messages.filter(msg => !msg.isOpen)

    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-center">
                流れついたボトルメール
                <span className="ml-2 bg-gray-800 text-white rounded-full px-3 py-1 text-sm">
                    {closedMessages.length}
                </span>
            </h2>
            <div className="flex-1">
                <button
                    onClick={toggleAccordion}
                    className="w-full text-left flex items-center justify-between p-3 hover:bg-gray-50 transition-colors rounded-lg border border-gray-200"
                >
                    <span className="flex items-center">
                        <Bottle className="w-6 h-6 mr-2 text-gray-600" />
                        <span className="text-gray-700">
                            {isAccordionOpen ? 'ボトルメールのリストを非表示' : 'ボトルメールのリストを表示'}
                        </span>
                    </span>
                    <span className="text-gray-500">{isAccordionOpen ? '▲' : '▼'}</span>
                </button>
                {isAccordionOpen && (
                    <div className="mt-4 space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className="border border-gray-200 p-4 rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                                onClick={() => toggleMessage(message.id)}
                            >
                                {message.isOpen ? (
                                    <>
                                        <p className="mb-2 text-gray-800">{message.content}</p>
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <p>送信者: {message.sender}</p>
                                            <p>{message.date}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full text-left flex items-center justify-center py-2 hover:bg-gray-50 transition-colors rounded">
                                        <Bottle className="w-5 h-5 mr-2 text-gray-600" />
                                        <span className="text-gray-700">クリックしてメッセージを開く</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}