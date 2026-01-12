import { AlertCircle, Building2, CheckCheck, CheckCircle2, Copy, CreditCard, FileText, Package, X } from "lucide-react"
import { useState } from "react";
type ShowReportClick = {
    handleFalseClick: () => void;
}
export const ShowReport = (props: ShowReportClick) => {
    const { handleFalseClick } = props;
    const [copiedAccount, setCopiedAccount] = useState(false);

    const handleCopyAccount = () => {
        navigator.clipboard.writeText('5018881234');
        setCopiedAccount(true);
        setTimeout(() => setCopiedAccount(false), 2000);
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
            <div className="w-auto max-w-lg max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
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
                        onClick={handleFalseClick}
                    >
                        <X className="text-white" size={20} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
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
                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <Building2 size={16} className="text-green-600" />
                            Төлбөр шилжүүлэх данс
                        </h3>
                        <div className="bg-white border border-green-300 rounded-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 flex items-center gap-2">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                    <Building2 className="text-blue-600" size={16} />
                                </div>
                                <div className="text-white">
                                    <p className="font-bold text-sm">Хаан банк</p>
                                </div>
                            </div>

                            <div className="p-3 space-y-3">
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
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Данс эзэмшигч</p>
                                    <div className="bg-gray-100 rounded p-2">
                                        <p className="font-bold text-gray-800 text-sm">AgentBuy ХХК</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Шилжүүлэх дүн</p>
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded p-3 text-center">
                                        <p className="text-2xl font-bold text-white">7,040,000₮</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Гүйлгээний утга</p>
                                    <div className="bg-yellow-50 border border-yellow-300 rounded p-2">
                                        <p className="font-mono font-bold text-gray-800 text-sm">ORDER#1</p>
                                    </div>
                                </div>
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
                <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-2">
                    <button
                        className="flex-1 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold transition-all text-sm"
                        onClick={handleFalseClick}
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
    )
}