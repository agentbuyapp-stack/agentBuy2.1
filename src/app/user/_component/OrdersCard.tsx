"use client";
import { Package, Check, Clock, CheckCircle2, Eye, MoreVertical, MessageCircle, FileText, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import {
    X,
    Calendar,
    CreditCard,
    Building2,
    Copy,
    CheckCheck,
    AlertCircle,
    Download,
    Printer
} from 'lucide-react';
export const OrdersCard = () => {
    const [showReport, setShowReport] = useState(false);
    const [copiedAccount, setCopiedAccount] = useState(false);

    const handleCopyAccount = () => {
        navigator.clipboard.writeText('5018881234');
        setCopiedAccount(true);
        setTimeout(() => setCopiedAccount(false), 2000);
    };
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="w-110 h-50 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-4 flex flex-col gap-3 border border-gray-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
                            <Package className="w-4 h-4 text-white mb-0.5" />
                            <span className="text-white font-bold text-xs">#3</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-800">Багц захиалга</p>
                            <p className="text-xs text-gray-500">5 цагийн өмнө</p>
                        </div>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Шинэ</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] text-blue-600 font-semibold">Захиалсан</span>
                    </div>
                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] text-gray-400 font-semibold">Төлбөр</span>
                    </div>
                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] text-gray-400 font-semibold">Батал...</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                    <button className="py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105" onClick={() => setShowDetails(true)}>
                        <Eye size={14} />
                        <span>Дэлгэрэнгүй</span>
                    </button>
                    <button className="py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105">
                        <MessageCircle size={14} />
                        <span>Чат</span>
                    </button>
                    {/* <button className="py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1">
                        <FileText size={14} />
                        <span>Тайлан</span>
                    </button> */}
                </div>
            </div>
            <div className="w-110 h-50 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-4 flex flex-col gap-3 border border-gray-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
                            <Package className="w-4 h-4 text-white mb-0.5" />
                            <span className="text-white font-bold text-xs">#1</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-800">Багц захиалга</p>
                            <p className="text-xs text-gray-500">2 цагийн өмнө</p>
                        </div>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Хүлээгдэж буй</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] text-green-600 font-semibold">Захиалсан</span>
                    </div>
                    <div className="flex-1 h-1 bg-green-500"></div>
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                            <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] text-yellow-600 font-semibold">Төлбөр</span>
                    </div>
                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] text-gray-400 font-semibold">Батал...</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-auto">
                    <button className="py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105" onClick={() => { setShowDetails(true) }}>
                        <Eye size={14} />
                        <span>Дэлгэрэнгүй</span>
                    </button>
                    <button className="py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105">
                        <MessageCircle size={14} />
                        <span>Чат</span>
                    </button>
                    <button
                        className="py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105"
                        onClick={() => setShowReport(true)}
                    >
                        <FileText size={14} />
                        <span>Тайлан</span>
                    </button>
                </div>
            </div>

            {showReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
                    <div className="w-auto max-w-lg max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
                        {/* Header - Compact */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-white">
                                    <h2 className="text-lg font-bold">Захиалгын тайлан</h2>
                                    <p className="text-xs text-white/90">Захиалга #1 • 2025-01-08</p>
                                </div>
                            </div>
                            <button
                                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                                onClick={() => setShowReport(false)}
                            >
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        {/* Content - Compact */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {/* Order Items - Compact */}
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <Package size={16} className="text-green-600" />
                                    Барааны жагсаалт
                                </h3>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                1
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-semibold text-gray-800 text-xs truncate">iPhone 15 Pro Max</p>
                                                <p className="text-xs text-gray-500 truncate">Хар өнгө, 256GB</p>
                                            </div>
                                        </div>
                                        <div className="text-right ml-2 flex-shrink-0">
                                            <p className="text-xs font-semibold text-gray-800">2x</p>
                                            <p className="text-xs text-green-600 font-bold">6.4M₮</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Info - Compact */}
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <CreditCard size={16} className="text-green-600" />
                                    Төлбөрийн мэдээлэл
                                </h3>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Барааны үнэ:</span>
                                            <span className="font-semibold text-gray-800">6,400,000₮</span>
                                        </div>
                                        <div className="flex justify-between pb-2 border-b border-green-200">
                                            <span className="text-gray-600">Карго:</span>
                                            <span className="font-semibold text-gray-800">Odod cargo</span>
                                        </div>
                                        <div className="flex justify-between pt-1">
                                            <span className="font-bold text-gray-800">Эцсийн дүн:</span>
                                            <span className="text-xl font-bold text-green-600">7,040,000₮</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bank Account - Compact */}
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <Building2 size={16} className="text-green-600" />
                                    Төлбөр шилжүүлэх данс
                                </h3>
                                <div className="bg-white border border-green-300 rounded-lg overflow-hidden">
                                    {/* Bank Header - Compact */}
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                            <Building2 className="text-blue-600" size={16} />
                                        </div>
                                        <div className="text-white">
                                            <p className="font-bold text-sm">Хаан банк</p>
                                        </div>
                                    </div>

                                    <div className="p-3 space-y-3">
                                        {/* Account Number - Compact */}
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Дансны дугаар</p>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-gray-100 rounded p-2 font-mono text-lg font-bold text-gray-800 tracking-wide">
                                                    5018 8812 34
                                                </div>
                                                <button
                                                    className={`w-9 h-9 rounded flex items-center justify-center transition-all flex-shrink-0 ${copiedAccount
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                                        }`}
                                                    onClick={handleCopyAccount}
                                                >
                                                    {copiedAccount ? <CheckCheck size={16} /> : <Copy size={16} />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Account Name - Compact */}
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Данс эзэмшигч</p>
                                            <div className="bg-gray-100 rounded p-2">
                                                <p className="font-bold text-gray-800 text-sm">AgentBuy ХХК</p>
                                            </div>
                                        </div>

                                        {/* Amount - Compact */}
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Шилжүүлэх дүн</p>
                                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded p-3 text-center">
                                                <p className="text-2xl font-bold text-white">7,040,000₮</p>
                                            </div>
                                        </div>

                                        {/* Payment Note - Compact */}
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Гүйлгээний утга</p>
                                            <div className="bg-yellow-50 border border-yellow-300 rounded p-2">
                                                <p className="font-mono font-bold text-gray-800 text-sm">ORDER#1</p>
                                            </div>
                                        </div>

                                        {/* Warning - Compact */}
                                        <div className="bg-red-50 border border-red-300 rounded p-2 flex gap-2">
                                            <AlertCircle className="text-red-600 flex-shrink-0" size={16} />
                                            <div>
                                                <p className="text-xs font-bold text-red-800 mb-0.5">Анхаар!</p>
                                                <p className="text-xs text-red-700">
                                                    Гүйлгээний утгад <span className="font-bold">ORDER#1</span> бичнэ үү.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Instructions - Compact */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="text-blue-600" size={16} />
                                    Төлбөр төлөх заавар
                                </h4>
                                <ol className="space-y-1.5 text-xs text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                                        <span>Дансны дугаар руу <strong>7,040,000₮</strong> шилжүүлнэ үү</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                                        <span>Гүйлгээний утгад <strong className="text-red-600">ORDER#1</strong> бичнэ үү</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                                        <span>Төлбөр 2-5 минутын дотор баталгаажна</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                                        <span>Асуудал гарвал <strong className="text-blue-600">чат</strong> хэсгээр холбогдоно уу</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Footer - Compact */}
                        <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-2">
                            <button
                                className="flex-1 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-all text-sm"
                                onClick={() => setShowReport(false)}
                            >
                                Хаах
                            </button>
                            <button
                                className="flex-1 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all shadow-md flex items-center justify-center gap-1 text-sm"
                                onClick={handleCopyAccount}
                            >
                                <Copy size={14} />
                                Хуулах
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showDetails && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
                    <div className="w-125 max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <ShoppingBag className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-white">
                                    <h2 className="text-lg font-bold">Барааны дэлгэрэнгүй</h2>
                                    <p className="text-xs text-white/90">Нийт 5 бараа</p>
                                </div>
                            </div>
                            <button
                                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                                onClick={() => setShowDetails(false)}
                            >
                                <X className="text-white" size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="space-y-2">
                                <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-bold text-white">1</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-gray-800 truncate">iPhone 15 Pro Max</h4>
                                            <p className="text-xs text-gray-500 truncate">Хар өнгө, 256GB</p>
                                        </div>
                                        <div className="px-2 py-1 bg-blue-100 text-blue-700 font-bold rounded text-xs flex-shrink-0">
                                            2x
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-bold text-white">2</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-gray-800 truncate">AirPods Pro 2</h4>
                                            <p className="text-xs text-gray-500 truncate">USB-C холбоостой</p>
                                        </div>
                                        <div className="px-2 py-1 bg-blue-100 text-blue-700 font-bold rounded text-xs flex-shrink-0">
                                            1x
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                            <button
                                className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-103 shadow-md text-sm"
                                onClick={() => setShowDetails(false)}
                            >
                                Хаах
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}