export interface Course {
    id: string;
    year: number;
    term: number;
    department: string;
    courseNumber: string; // 과목번호
    classNumber: string; // 분반
    name: string; // 교과목명
    type: string; // 이수구분 (전선, 전필, 교양, etc.)
    credits: number; // 학점
    professor: string; // 담당교수
    time: string; // 강의시간
    room: string; // 강의실
    capacity: number; // 제한인원
    enrolled: number; // 수강인원 (mocking current enrollment)
}

export const MOCK_COURSES: Course[] = [
    {
        id: "1000-9002-00",
        year: 2026,
        term: 1,
        department: "사범대학 교육학과",
        courseNumber: "1000-9002",
        classNumber: "00",
        name: "교육철학및교육사",
        type: "교직",
        credits: 2,
        professor: "장지원",
        time: "목10:00~12:00",
        room: "교109",
        capacity: 20,
        enrolled: 18,
    },
    {
        id: "1000-9002-01",
        year: 2026,
        term: 1,
        department: "사범대학 교육학과",
        courseNumber: "1000-9002",
        classNumber: "01",
        name: "교육철학및교육사",
        type: "교직",
        credits: 2,
        professor: "박영미",
        time: "월15:00~17:00",
        room: "교201",
        capacity: 23,
        enrolled: 23,
    },
    {
        id: "1004-7005-00",
        year: 2026,
        term: 1,
        department: "공과대학 컴퓨터융합학부",
        courseNumber: "1004-7005",
        classNumber: "00",
        name: "파이썬프로그래밍",
        type: "교양(균형)",
        credits: 3,
        professor: "김대엽",
        time: "목14:00~16:00, 금10:00~11:00",
        room: "교408",
        capacity: 40,
        enrolled: 35,
    },
    {
        id: "1214-2018-00",
        year: 2026,
        term: 1,
        department: "공과대학 컴퓨터융합학부",
        courseNumber: "1214-2018",
        classNumber: "00",
        name: "컴퓨터프로그래밍3",
        type: "전공(핵심)",
        credits: 3,
        professor: "조은선",
        time: "화13:00~15:00",
        room: "공54-201",
        capacity: 50,
        enrolled: 12,
    },
    {
        id: "1215-2004-01",
        year: 2026,
        term: 1,
        department: "공과대학 컴퓨터융합학부",
        courseNumber: "1215-2004",
        classNumber: "01",
        name: "기초프로젝트랩",
        type: "전공(핵심)",
        credits: 3,
        professor: "김도현",
        time: "수15:00~18:00",
        room: "공54-203",
        capacity: 30,
        enrolled: 28,
    },
    {
        id: "1101-7019-08",
        year: 2026,
        term: 1,
        department: "인문대학 국어국문학과",
        courseNumber: "1101-7019",
        classNumber: "08",
        name: "대학글쓰기",
        type: "교양(기초)",
        credits: 2,
        professor: "유정미",
        time: "수09:00~11:00",
        room: "교306",
        capacity: 25,
        enrolled: 25,
    },
    {
        id: "1214-2009-03",
        year: 2026,
        term: 1,
        department: "자연과학대학 수학과",
        courseNumber: "1214-2009",
        classNumber: "03",
        name: "확률 및 통계",
        type: "전공(기초)",
        credits: 3,
        professor: "김상욱",
        time: "목09:00~12:00",
        room: "공54-101",
        capacity: 60,
        enrolled: 55,
    },
];
