import { KursovayaUslugaIcon } from "./kursovaya-usluga-icon";
import { DiplomnayaUslugaIcon } from "./diplomnaya-usluga-icon";
import { MagisterskayaUslugaIcon } from "./magisterskaya-usluga-icon";
import { ReferatUslugaIcon } from "./referat-usluga-icon";
import { DokladUslugaIcon } from "./doklad-usluga-icon";
import { OtchetPoPraktikeUslugaIcon } from "./otchet-po-praktike-usluga-icon";
import { PrezentaciyaUslugaIcon } from "./prezentaciya-usluga-icon";
import { KonsultaciyaUslugaIcon } from "./konsultaciya-usluga-icon";
import { ProjectTypes } from "@/utils/popupOrder/utils";
import { NauchnayaStatyaIcon } from "./nauchnaya-statya-usluga-icon";
import { BiznesPlanUslugaIcon } from "./biznes-plan-usluga-icon";
import { ReshenieZadachUslugaIcon } from "./reshenie-zadach-usluga-icon";
import { PovyshenieOriginalnostiUslugaIcon } from "./povyshenie-originalnosti-usluga-icon";

interface Props extends IconProps {
  iconName: ProjectTypes;
}

export const GetIconFromName = ({ iconName, ...props }: Props) => {
  switch (iconName) {
    case "kursovaya-rabota":
      return <KursovayaUslugaIcon {...props} />;
    case "diplomnaya-rabota":
      return <DiplomnayaUslugaIcon {...props} />;
    case "magisterskaya-dissertaciya":
      return <MagisterskayaUslugaIcon {...props} />;
    case "referat":
      return <ReferatUslugaIcon {...props} />;
    case "doklad":
      return <DokladUslugaIcon {...props} />;
    case "otchet-po-praktike":
      return <OtchetPoPraktikeUslugaIcon {...props} />;
    case "prezentaciya":
      return <PrezentaciyaUslugaIcon {...props} />;
    case "konsultaciya":
      return <KonsultaciyaUslugaIcon {...props} />;
    case "nauchnaya-statya":
      return <NauchnayaStatyaIcon {...props} />;
    case "biznes-plan":
      return <BiznesPlanUslugaIcon {...props} />;
    case "reshenie-zadach":
      return <ReshenieZadachUslugaIcon {...props} />;
    case "povyshenie-originalnosti":
      return <PovyshenieOriginalnostiUslugaIcon {...props} />;
    default:
      return <></>;
  }
};
