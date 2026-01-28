import Link from "next/link";
import { User, LogOut, Clock } from "lucide-react";

export default function Header() {
    return (
        <header className="flex flex-col w-full">
            {/* Top Blue Bar -- Main Navigation */}
            <div className="bg-cnu-blue text-white h-12 flex items-center justify-between px-4 min-w-[1000px]">
                <div className="flex items-center space-x-6">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
                        <span className="bg-white text-cnu-blue rounded-full p-0.5 w-6 h-6 flex items-center justify-center text-xs">H</span>
                        <span>HOME</span>
                    </Link>
                    <div className="w-[1px] h-4 bg-blue-400"></div>
                    {/* Mock Navigation Mockups */}
                    <span className="opacity-80 text-sm">학사행정</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-medium">수강관리</span>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>홍길동 [컴퓨터융합학부]</span>
                    </div>
                    <div className="flex items-center bg-white/20 rounded px-2 py-0.5 space-x-1">
                        <Clock size={14} />
                        <span>59분 55초</span>
                    </div>
                    <button className="hover:underline opacity-90">로그인 연장</button>
                    <div className="w-[1px] h-3 bg-blue-300"></div>
                    <button className="flex items-center hover:underline opacity-90">
                        <LogOut size={14} className="mr-1" />
                        로그아웃
                    </button>
                </div>
            </div>

            {/* Secondary Bar -- Breadcrumb / Title area */}
            <div className="bg-white border-b border-gray-200 h-10 flex items-center px-4 text-sm text-gray-600 min-w-[1000px]">
                <span className="mr-2 text-gray-400">Home</span>
                <span className="mr-2 text-gray-400">&gt;</span>
                <span className="mr-2 text-gray-400">학사행정</span>
                <span className="mr-2 text-gray-400">&gt;</span>
                <span className="mr-2 text-gray-400">수강관리</span>
                <span className="mr-2 text-gray-400">&gt;</span>
                <span className="font-bold text-gray-800">예비수강신청</span>
                <span className="ml-1 text-yellow-500">★</span>
            </div>
        </header>
    );
}
