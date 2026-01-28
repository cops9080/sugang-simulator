"use client";

import { Course } from "@/lib/mockData";

interface RegistrationStatusProps {
    enrolledCourses: Course[];
    onRemove: (courseId: string) => void;
}

export default function RegistrationStatus({ enrolledCourses, onRemove }: RegistrationStatusProps) {
    const totalCredits = enrolledCourses.reduce((sum, c) => sum + c.credits, 0);

    return (
        <div className="border-t-4 border-double border-gray-400 mt-1 flex-1 flex flex-col min-h-0">
            <div className="p-2 bg-blue-50 border-b border-gray-200 text-sm font-bold flex justify-between items-center shrink-0">
                <div className="flex items-center space-x-2">
                    <span className="text-cnu-blue">● 예비수강신청 신청내역</span>
                </div>
                <div className="flex space-x-4 text-xs font-normal text-gray-600">
                    <div className="bg-white border border-gray-300 px-2 py-0.5 rounded">
                        <span className="font-bold mr-1">수강신청학점</span>
                        <span className="text-blue-600 font-bold">{totalCredits.toFixed(1)}</span>
                    </div>
                    <div className="bg-white border border-gray-300 px-2 py-0.5 rounded">
                        <span className="font-bold mr-1">신청과목수</span>
                        <span className="text-blue-600 font-bold">{enrolledCourses.length}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white flex-1 overflow-auto">
                {enrolledCourses.length === 0 ? (
                    <div className="h-20 flex items-center justify-center text-gray-400 text-sm">
                        신청된 강좌가 없습니다.
                    </div>
                ) : (
                    <table className="w-full text-center text-xs border-collapse">
                        <thead className="bg-[#f2f2f2] text-gray-700 font-bold whitespace-nowrap sticky top-0">
                            <tr>
                                <th className="border border-gray-300 px-2 py-1.5 w-[50px]">삭제</th>
                                <th className="border border-gray-300 px-2 py-1.5">과목번호</th>
                                <th className="border border-gray-300 px-2 py-1.5">분반</th>
                                <th className="border border-gray-300 px-2 py-1.5 min-w-[150px]">과목명</th>
                                <th className="border border-gray-300 px-2 py-1.5">이수구분</th>
                                <th className="border border-gray-300 px-2 py-1.5">학점</th>
                                <th className="border border-gray-300 px-2 py-1.5">담당교수</th>
                                <th className="border border-gray-300 px-2 py-1.5 min-w-[150px]">강의시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledCourses.map((course) => (
                                <tr key={course.id} className="hover:bg-red-50 transition-colors h-8">
                                    <td className="border border-gray-300 px-1 py-1">
                                        <button
                                            onClick={() => onRemove(course.id)}
                                            className="bg-gray-100 border border-gray-400 rounded px-2 py-0.5 hover:bg-red-600 hover:text-white hover:border-red-800 transition-colors"
                                        >
                                            삭제
                                        </button>
                                    </td>
                                    <td className="border border-gray-300 px-1">{course.courseNumber}</td>
                                    <td className="border border-gray-300 px-1">{course.classNumber}</td>
                                    <td className="border border-gray-300 px-2 text-left">{course.name}</td>
                                    <td className="border border-gray-300 px-1">{course.type}</td>
                                    <td className="border border-gray-300 px-1">{course.credits}</td>
                                    <td className="border border-gray-300 px-1">{course.professor}</td>
                                    <td className="border border-gray-300 px-1 text-left">{course.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
