import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/1234/Home" id="wd-course-home-link">
        Home
      </Link>
      <br />
      <Link href="Modules" id="wd-course-modules-link">
        Modules
      </Link>
      <br />
      <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link">
        Piazza
      </Link>
      <br />
      <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link">
        Zoom
      </Link>
      <br />
      <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link">
        Assignments
      </Link>
      <br />
      <Link href="/Courses/1234/Quizzes" id="wd-course-assignments-link">
        Quizzes
      </Link>
      <br />
      <Link href="/Courses/1234/Grades" id="wd-course-grades-link">
        Grades
      </Link>
      <br />
      <Link href="/Courses/1234/People" id="wd-course-people-link">
        People
      </Link>
      <br />
    </div>
  );
}
