import { isCreator } from "@/lib/creator";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CreatorLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isCreator(userId)) {
    return redirect("/welcome");
  }

  return <>{children}</>;
};

export default CreatorLayout;
