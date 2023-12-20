"use client";

import { toast } from "@/components/ui/use-toast";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      className="md:py-12 ut-button:bg-muted-foreground hover:ut-button:bg-muted-foreground/60 border-muted-foreground ut-allowed-content:ut-uploading:text-destructive ut-allowed-content:text-emerald-600 ut-label:text-primary hover:ut-label:text-muted-foreground"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        toast({
          title: "Uh Oh! Something went wrong.",
          description: `${error?.message}`,
          variant: "destructive",
        });
      }}
    />
  );
};
