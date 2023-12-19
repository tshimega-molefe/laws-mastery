import { ThemeProvider } from "@/components/theme-provider";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="h-full flex items-center justify-center">{children}</div>
    </ThemeProvider>
  );
};

export default AuthLayout;
