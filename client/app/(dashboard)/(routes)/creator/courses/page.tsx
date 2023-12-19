import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  // const courses = await db.course.findMany({
  //   where: {
  //     userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  return (
    <div className="p-6 flex items-center justify-start">
      {/* <DataTable columns={columns} data={courses} /> */}

      <Link
        className={cn(buttonVariants({ variant: "default", size: "sm" }))}
        href={"/creator/create"}
      >
        Create a Course
      </Link>

      <ThemeToggle />
    </div>
  );
};

export default CoursesPage;
