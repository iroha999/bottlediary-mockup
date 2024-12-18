'use client'

import { useState } from 'react'
import { Bottle } from './Icons'

export function MessageList() {
    const [messages, setMessages] = useState([
        { id: 1, content: "親愛なる誰かへ、本当に辛い日々が続いています。会社で上司に酷い扱いを受け、仕事に集中できなくなっています。家に帰っても心が重く、夜眠れないことが多いのです。自分の価値を見失いそうになっています。何か良いアドバイスはありませんか?これ以上は耐えられそうにありません。助けてください...", date: "2023-06-01", isOpen: false, sender: "匿名" },
        { id: 2, content: "先日、仕事で大きな成果を上げることができました!上司から高い評価をいただき、賞与もついてきました。これまでの努力が報われた気がしてとてもうれしいです。同僚たちからも祝福の言葉をかけてもらい、チームとして一丸となれた瞬間でした。あの時の達成感と喜びは忘れられません。これからも会社に貢献し続けられるよう、さらに頑張っていきたいと思います。", date: "2023-06-02", isOpen: false, sender: "ユーザー1" },
        { id: 3, content: "あなたの夢を諦めないでください。", date: "2023-06-03", isOpen: false, sender: "匿名" },
        { id: 4, content: "自分のパン屋さんを開業したいのですが、資金が足りず悪銭苦闘しています。", date: "2023-06-04", isOpen: false, sender: "ユーザー2" },
        { id: 5, content: "昨日はテストで百点をとることができました！", date: "2023-06-05", isOpen: false, sender: "匿名" },
    ])
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const openMessage = (id: number) => {
        setMessages(messages.map(msg =>
            msg.id === id ? { ...msg, isOpen: true } : msg
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
                            <div key={message.id} className="border border-gray-200 p-4 rounded-lg hover:shadow-sm transition-shadow">
                                {message.isOpen ? (
                                    <>
                                        <p className="mb-2 text-gray-800">{message.content}</p>
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <p>送信者: {message.sender}</p>
                                            <p>{message.date}</p>
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => openMessage(message.id)}
                                        className="w-full text-left flex items-center justify-center py-2 hover:bg-gray-50 transition-colors rounded"
                                    >
                                        <Bottle className="w-5 h-5 mr-2 text-gray-600" />
                                        <span className="text-gray-700">クリックしてメッセージを開く</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}