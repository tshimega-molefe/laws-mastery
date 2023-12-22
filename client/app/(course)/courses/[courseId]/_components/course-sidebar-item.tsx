"use client";

import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/courses/${courseId}/chapters/${id}`);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-muted-foreground text-sm font-[500] pl-6 transition-all ease-out hover:text-muted-foreground hover:bg-muted rounded-md",
        isActive &&
          "text-primary-foreground dark:text-secondary-foreground bg-primary/60 hover:bg-primary/50 hover:text-primary-foreground",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isCompleted && isActive && "bg-muted"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={18}
          className={cn(
            "text-muted-foreground",
            isActive &&
              "text-primary-foreground dark:text-secondary-foreground",
            isCompleted && "text-emerald-700"
          )}
        />
        {label}
      </div>
      {/* <div
        className={cn(
          "ml-auto opacity-0 border-2 border-primary h-full transition-all",
          isActive && "opacity-100",
          isCompleted && "border-emerald-700"
        )}
      /> */}
    </button>
  );
};
