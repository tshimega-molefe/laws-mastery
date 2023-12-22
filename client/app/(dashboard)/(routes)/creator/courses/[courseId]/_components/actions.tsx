"use client";

import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
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
        confetti.onOpen();
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
        {isPublished ? (
          <>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin text-destructive" />
            ) : (
              <span className="text-destructive dark:text-red-600 hover:text-red-500">
                Unpublish
              </span>
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin text-emerald-600 dark:text-success" />
            ) : (
              <span className="text-emerald-600 dark:text-success hover:text-emerald-500">
                Publish
              </span>
            )}
          </>
        )}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading} variant="destructive">
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
