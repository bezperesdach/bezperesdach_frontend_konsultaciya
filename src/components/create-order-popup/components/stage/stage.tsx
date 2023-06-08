import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

type Props = {
  theme: React.ReactElement;
  date: React.ReactElement;
  additional: React.ReactElement;
  final: React.ReactElement;
};

export const Stage = ({ theme, date, additional, final }: Props) => {
  const stage = useAppSelector((state) => state.orderPopup.stage);

  const displayedStage = useMemo(() => {
    switch (stage) {
      case "theme":
        return theme;
      case "date":
        return date;
      case "additional":
        return additional;
      case "final":
        return final;
      default:
        return null;
    }
  }, [additional, date, final, stage, theme]);

  return displayedStage;
};
