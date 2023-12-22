import { SearchInput } from "@/components/search-input";
import { db } from "@/lib/db";

import { getWelcomeCourses } from "@/actions/get-welcome-courses";
import { WelcomeCoursesList } from "@/components/welcome-course-list";
import { Categories } from "./_components/categories";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const WelcomePage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth();

  if (userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getWelcomeCourses({
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <WelcomeCoursesList items={courses} />
      </div>
    </>
  );
};

export default WelcomePage;
