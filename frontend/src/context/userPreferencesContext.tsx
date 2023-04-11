import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserPreferences {
  chuva: "mm" | "inch";
  setChuva: (chuva: "mm" | "inch") => void;
  temperatura: "°C" | "°F";
  setTemperatura: (temperatura: "°C" | "°F") => void;
}

const UserPreferencesContext = createContext<UserPreferences>(
  {} as UserPreferences
);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedChuva = localStorage.getItem("chuva") as "mm" | "inch" | null;
  const storedTemperatura = localStorage.getItem("temperatura") as
    | "°C"
    | "°F"
    | null;

  const [chuva, setChuva] = useState<"mm" | "inch">(storedChuva || "mm");
  const [temperatura, setTemperatura] = useState<"°C" | "°F">(
    storedTemperatura || "°C"
  );

  useEffect(() => {
    localStorage.setItem("chuva", chuva);
  }, [chuva]);

  useEffect(() => {
    localStorage.setItem("temperatura", temperatura);
  }, [temperatura]);

  return (
    <UserPreferencesContext.Provider
      value={{ chuva, setChuva, temperatura, setTemperatura }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  return context;
};
