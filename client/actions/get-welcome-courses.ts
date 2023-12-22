import { db } from "@/lib/db";

type GetWelcomeCourses = {
  title?: string;
  categoryId?: string;
};

export const getWelcomeCourses = async ({
  title,
  categoryId,
}: GetWelcomeCourses) => {
  try {
    const welcomeCourses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return welcomeCourses;
  } catch (error) {
    console.log("[GET_WELCOME_COURSES]", error);
    return [];
  }
};
