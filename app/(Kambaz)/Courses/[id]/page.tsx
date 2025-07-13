import { redirect } from "next/dist/client/components/navigation";

export default function CoursesPage({ params }: { params: { id: string } }) {
  redirect(`/Courses/${params.id}/Home`);
}
