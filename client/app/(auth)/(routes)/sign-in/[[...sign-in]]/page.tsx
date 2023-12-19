import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <SignIn
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: "bg-primary/60 hover:bg-primary/50",
        },
      }}
    />
  );
}
