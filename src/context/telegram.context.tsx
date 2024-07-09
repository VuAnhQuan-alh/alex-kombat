import { ITelegramUser, IWebApp } from "@/types/i.telegram";
import { createContext, useEffect, useMemo, useState } from "react";

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export const TelegramContextValue = createContext<ITelegramContext>({});

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    const isWindow = typeof window !== "undefined";
    if (isWindow) {
      // @ts-ignore
      const app = (window as unknown).Telegram?.WebApp;
      if (app) {
        app.ready();
        app.expand();
        setWebApp(app);
      }
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContextValue.Provider value={value}>
      {children}
    </TelegramContextValue.Provider>
  );
};
