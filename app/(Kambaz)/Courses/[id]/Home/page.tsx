import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <table id="wd-home">
        <tr>
          <td valign="top" width="70%">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </table>
    </div>
  );
}
