import React from "react";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { id: string } }>) {
  return (
    <div>
      <h1>Courses {params.id}</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
