"use client";

import { Course, MOCK_COURSES } from "@/lib/mockData";
import { useState } from "react";

interface CourseTableProps {
    onRegister: (course: Course) => void;
}

export default function CourseTable({ onRegister }: CourseTableProps) {
    const [courses, setCourses] = useState<Course[]>(MOCK_COURSES);

    return (
        <div className="flex-1 overflow-auto bg-white border-t border-gray-300">
            {/* Table Metadata */}
            <div className="p-2 bg-yellow-50 border-b border-gray-200 text-sm text-gray-700 font-medium">
                ● 개설강좌 (본 화면은 예비수강신청 화면입니다. 실제 수강신청 확정은 수강신청 화면에서 이루어 집니다.)
                <span className="float-right">총 {courses.length} 건</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-center text-xs border-collapse">
                    <thead className="bg-[#f2f2f2] text-gray-700 font-bold whitespace-nowrap sticky top-0">
                        <tr>
                            <th className="border border-gray-300 px-2 py-1.5 min-w-[50px]">신청</th>
                            <th className="border border-gray-300 px-2 py-1.5">학년</th>
                            <th className="border border-gray-300 px-2 py-1.5">과목번호</th>
                            <th className="border border-gray-300 px-2 py-1.5">분반</th>
                            <th className="border border-gray-300 px-2 py-1.5 min-w-[150px]">과목명</th>
                            <th className="border border-gray-300 px-2 py-1.5">이수구분</th>
                            <th className="border border-gray-300 px-2 py-1.5">학점</th>
                            <th className="border border-gray-300 px-2 py-1.5">제한</th>
                            <th className="border border-gray-300 px-2 py-1.5">수강</th>
                            <th className="border border-gray-300 px-2 py-1.5 min-w-[60px]">담당교수</th>
                            <th className="border border-gray-300 px-2 py-1.5 min-w-[150px]">강의시간/강의실</th>
                            <th className="border border-gray-300 px-2 py-1.5 min-w-[100px]">학과전공</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {courses.map((course) => (
                            <tr key={course.id} className="hover:bg-blue-50 transition-colors h-8">
                                <td className="border border-gray-300 px-1 py-1">
                                    <button
                                        onClick={() => onRegister(course)}
                                        className="bg-gray-100 border border-gray-400 rounded px-2 py-0.5 hover:bg-cnu-blue hover:text-white hover:border-blue-800 transition-colors"
                                    >
                                        신청
                                    </button>
                                </td>
                                <td className="border border-gray-300 px-1">1</td>
                                <td className="border border-gray-300 px-1">{course.courseNumber}</td>
                                <td className="border border-gray-300 px-1">{course.classNumber}</td>
                                <td className="border border-gray-300 px-2 text-left bg-gradient-to-r from-transparent to-transparent hover:to-gray-50">
                                    {course.name}
                                </td>
                                <td className="border border-gray-300 px-1">{course.type}</td>
                                <td className="border border-gray-300 px-1">{course.credits}</td>
                                <td className="border border-gray-300 px-1 text-blue-600 font-medium">{course.capacity}</td>
                                <td className={`border border-gray-300 px-1 font-medium ${course.enrolled >= course.capacity ? 'text-red-500' : 'text-gray-900'}`}>{course.enrolled}</td>
                                <td className="border border-gray-300 px-1">{course.professor}</td>
                                <td className="border border-gray-300 px-1 text-left">
                                    {course.time} ({course.room})
                                </td>
                                <td className="border border-gray-300 px-1 text-left truncate max-w-[150px]" title={course.department}>
                                    {course.department}
                                </td>
                            </tr>
                        ))}
                        {/* Empty Rows Filler */}
                        {Array.from({ length: Math.max(0, 15 - courses.length) }).map((_, i) => (
                            <tr key={`empty-${i}`} className="h-8">
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                                <td className="border border-gray-300"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
