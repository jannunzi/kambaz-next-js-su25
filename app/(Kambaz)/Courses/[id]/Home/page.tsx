import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div>
      <table id="wd-home">
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <Modules />
            </td>
            <td valign="top">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
