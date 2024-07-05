import { ReactNode } from "react";

const PageTheme = ({ children }: { children: ReactNode }) => {
  return (
    <section className="text-white bg-custom-radial flex w-full min-h-screen justify-center">
      <section className="absolute top-0 left-0 w-full h-[396px] bg-gradient-to-b from-[#010101d4] to-[#00000000] z-0"></section>

      <section className="w-full flex flex-col z-10 p-3 items-center">
        {children}
      </section>

      <section className="absolute bottom-0 left-0 w-full h-[106px] bg-gradient-to-t from-[#010101b4] to-[#00000000] z-0"></section>
    </section>
  );
};
export default PageTheme;
