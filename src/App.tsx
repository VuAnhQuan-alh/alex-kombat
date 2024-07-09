import "./App.css";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PageTheme from "./component/page.theme";
import { formatter } from "./utils/function";
import { Progress } from "@chakra-ui/react";
import { useTelegram } from "./hooks/use-telegram";

function App() {
  const pointRef = useRef<null | number>(null);
  const logoRef = useRef(null);
  const [point, setPoint] = useState(0);

  const { user } = useTelegram();

  useEffect(() => {
    pointRef.current = 0;
  }, []);
  const plusPoint = () => {
    console.log("plus point");

    setPoint((p) => p + 1);
  };
  useEffect(() => {
    document.querySelector("#tap-point")?.addEventListener("click", plusPoint);
    return () =>
      document
        .querySelector("#tap-point")
        ?.removeEventListener("click", plusPoint);
  }, []);

  useGSAP(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotation: "+=360",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <PageTheme>
      <section className="w-full flex items-center justify-between gap-x-3">
        <img src="/avatar.png" className="w-[78px] h-[78px]" />

        <section className="flex-1 flex-col flex gap-y-1">
          <section className="uppercase text-xs font-semibold flex gap-x-1 -mb-2">
            <section className="text-[#A9A9A9]">top</section>
            <section className="text-[#FDC237]">server</section>
          </section>
          <section className="text-[20px] font-semibold font-chakra">
            {user?.username || "ahihi do ngoc"}
          </section>
          <Progress
            value={20}
            sx={{
              width: 150,
              height: 1.5,
              borderRadius: 4,
              backgroundColor: "#FFFFFF26",
            }}
          />
          <section className="text-xs text-[#A9A9A9]">
            120 coin to rankup
          </section>
        </section>

        <section className="flex flex-col items-center">
          <img src="/rank-8.png" className="w-[60px] h-[60px]" />
          <section className="text-xs text-[#A9A9A9]">Gold 3</section>
        </section>
      </section>

      <section className="my-3"></section>

      <section className="flex items-center gap-x-3 pt-4">
        <img ref={logoRef} src="/coin.md.png" className="w-10 h-10" />
        <section className="font-bold text-3xl font-chakra">
          {formatter.format(point)}
        </section>
      </section>

      <section id="tap-point" className="w-full flex justify-center">
        <img src="/tap-click.png" className="w-[274px] h-[274px]" />
      </section>
    </PageTheme>
  );
}

export default App;
