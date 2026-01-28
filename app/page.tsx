"use client";

import CourseSearch from "@/components/CourseSearch";
import CourseTable from "@/components/CourseTable";
import RegistrationStatus from "@/components/RegistrationStatus";
import { Course } from "@/lib/mockData";
import { useState } from "react";

export default function Home() {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const MAX_CREDITS = 18;

  const handleRegister = (course: Course) => {
    // 1. Check if already enrolled
    if (enrolledCourses.some((c) => c.id === course.id)) {
      alert("이미 신청된 과목입니다.");
      return;
    }

    // 2. Check time conflict (Simple check for exact string match or overlap if needed, keeping it simple for now as 'time' is a string)
    // For MVP, just checking ID duplication and Credits.

    // 3. Check credits
    const currentCredits = enrolledCourses.reduce((sum, c) => sum + c.credits, 0);
    if (currentCredits + course.credits > MAX_CREDITS) {
      alert(`최대 수강신청 가능 학점(${MAX_CREDITS}학점)을 초과하였습니다.`);
      return;
    }

    // 4. Check capacity (Mock data check)
    if (course.enrolled >= course.capacity) {
      alert("제한인원이 초과되어 신청할 수 없습니다.");
      return;
    }

    // Success
    setEnrolledCourses([...enrolledCourses, course]);
    alert("신청되었습니다.");
  };

  const handleRemove = (courseId: string) => {
    if (window.confirm("신청을 취소하시겠습니까?")) {
      setEnrolledCourses(enrolledCourses.filter((c) => c.id !== courseId));
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-300 box-border shadow-sm">
      <CourseSearch />
      <CourseTable onRegister={handleRegister} />
      <RegistrationStatus enrolledCourses={enrolledCourses} onRemove={handleRemove} />
    </div>
  );
}
