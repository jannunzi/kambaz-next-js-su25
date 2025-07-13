import React from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <table>
      <thead>
        <tr>
          <td valign="top" width="200">
            <KambazNavigation />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </thead>
    </table>
  );
}
