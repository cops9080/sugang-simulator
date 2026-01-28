"use client";

import { useState } from "react";

export default function CourseSearch() {
    const [department, setDepartment] = useState("");

    return (
        <div className="bg-[#f8f9fa] p-4 border-b border-gray-200 text-sm">
            <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="flex items-center space-x-2">
                    <label className="font-bold text-gray-700">조직분류</label>
                    <select className="border border-gray-300 p-1 bg-white w-40">
                        <option>--전체--</option>
                        <option>공과대학</option>
                        <option>인문대학</option>
                    </select>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                    <label className="font-bold text-gray-700">년도/학기</label>
                    <div className="bg-gray-200 border border-gray-300 px-2 py-0.5 text-gray-600">
                        2026/1학기
                    </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                    <label className="font-bold text-gray-700">학번/성명</label>
                    <div className="bg-gray-200 border border-gray-300 px-2 py-0.5 text-gray-600">
                        202500929
                    </div>

                    <div className="bg-gray-200 border border-gray-300 px-2 py-0.5 text-gray-600">
                        이재준
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-300 my-3"></div>

            {/* Detailed Search Filters */}
            <div className="flex flex-wrap items-center gap-4 bg-yellow-50/50 p-2 rounded border border-yellow-100">
                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">검색구분</label>
                    <select className="border border-gray-300 p-1 bg-white">
                        <option>과목번호-분반</option>
                        <option>교과목명</option>
                    </select>
                </div>

                <div className="flex items-center space-x-2">
                    <label className="text-gray-700">과목번호-분반</label>
                    <input type="text" className="border border-gray-300 p-1 w-24" placeholder="학부" />
                    <span>-</span>
                    <input type="text" className="border border-gray-300 p-1 w-20" />
                    <span>-</span>
                    <input type="text" className="border border-gray-300 p-1 w-16" />
                </div>

                <button className="bg-cnu-blue text-white px-6 py-1 rounded hover:bg-blue-800 transition-colors font-medium">
                    신청
                </button>
            </div>
        </div>
    );
}
