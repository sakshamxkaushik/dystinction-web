import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-glass py-8 flex flex-col items-center justify-center mt-12">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-md mx-auto h-20 flex items-center justify-center">
          <TextHoverEffect text="DYSTINCTION" />
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Dystinction Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 