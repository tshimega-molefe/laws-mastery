"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
// import { ConfirmModal } from "@/components/modals/confirm-modal";
// import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const router = useRouter();
  //   const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast({
          title: "Success! Course unpublished.",
          description: "If this was accidental, please republish the course.",
          variant: "destructive",
        });
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast({
          title: "Success! Course published.",
          description: "If this was accidental, please unpublish the course.",
          variant: "success",
        });
        // confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast({
        title: "Uh Oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      toast({
        title: "Success! Course deleted.",
        description: "If this was accidental, please recreate the course.",
        variant: "destructive",
      });
      router.refresh();
      router.push(`/creator/courses`);
    } catch {
      toast({
        title: "Uh Oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      {/* <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal> */}
    </div>
  );
};
