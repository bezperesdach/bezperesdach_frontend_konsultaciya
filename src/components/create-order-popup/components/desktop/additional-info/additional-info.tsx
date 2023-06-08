import { Button } from "@/components/button/button";
import { VolumeMemo } from "@/components/ui/prices/price-calculator/components/volume";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setAdditionalInfo,
  setAntiplagiatType,
  setExpectedPrice,
  setOriginality,
  setStage,
  setVolume,
} from "@/store/reducers/orderPopupReducer";
import { useEffect, useMemo, useRef, useState } from "react";
import { getNoun } from "@/utils/utils";
import { useDebounce } from "usehooks-ts";
import {
  additionalInfoParams,
  AntiplagiatField,
  antiplagiatOptions,
  AntiplagiatTypes,
  getVolumeDataUnitNouns,
  VolumeField,
} from "@/utils/popupOrder/utils";
import { ReactSelector } from "../../react-selector/react-selector";

import styles from "./additional-info.module.css";

const OriginalityCalculator = ({ antiplagiatField }: { antiplagiatField: AntiplagiatField }) => {
  const originality = useAppSelector((state) => state.orderPopup.originality);
  const dispatch = useAppDispatch();
  const [originalityLocal, setOriginalityLocal] = useState(originality ?? antiplagiatField.originality);
  const debouncedOriginality = useDebounce(originalityLocal, 150);

  useEffect(() => {
    dispatch(setOriginality(debouncedOriginality));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedOriginality]);

  return (
    <div style={{ width: "50%" }}>
      <VolumeMemo name="Оригинальность" min={10} max={94} value={originalityLocal} setValue={setOriginalityLocal} nameOfStep="%" />
    </div>
  );
};

const TypeOfOriginalityCheck = ({ antiplagiatField }: { antiplagiatField: AntiplagiatField }) => {
  const antiplagiatType = useAppSelector((state) => state.orderPopup.antiplagiatType);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (antiplagiatType === null) {
      dispatch(setAntiplagiatType(antiplagiatField.type));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container} style={{ width: "50%" }}>
      <p>Система проверки</p>

      <div className={styles.controls_container}>
        <ReactSelector
          isSearchable={false}
          options={antiplagiatOptions}
          item={antiplagiatType ?? antiplagiatField.type}
          onItemSelected={(val: string) => dispatch(setAntiplagiatType(val as AntiplagiatTypes))}
        />
      </div>
    </div>
  );
};

const Volume = ({ volumeData }: { volumeData: VolumeField }) => {
  const volume = useAppSelector((state) => state.orderPopup.volume);
  const nouns = getVolumeDataUnitNouns(volumeData.unit);
  const dispatch = useAppDispatch();
  const [volumeLocal, setLocalVolume] = useState(volume ?? volumeData.default);
  const debouncedVolume = useDebounce(volumeLocal, 150);

  useEffect(() => {
    dispatch(setVolume(debouncedVolume));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedVolume]);

  return (
    <div style={{ width: "100%" }}>
      <VolumeMemo
        name="Объем"
        min={volumeData.min}
        max={volumeData.max}
        value={volumeLocal}
        setValue={setLocalVolume}
        nameOfStep={" " + getNoun(volumeLocal, nouns.one, nouns.two, nouns.five)}
      />
    </div>
  );
};

const AdditionalMessage = () => {
  const additionalInfo = useAppSelector((state) => state.orderPopup.additionalInfo);
  const dispatch = useAppDispatch();
  const [textArea, setTextArea] = useState(additionalInfo);
  const debouncedTextArea = useDebounce(textArea, 80);

  useEffect(() => {
    dispatch(setAdditionalInfo(debouncedTextArea));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTextArea]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textArea !== "" && e.currentTarget.value.length === 1001) {
      return;
    }

    if (e.currentTarget.value.length > 1001) {
      return setTextArea(e.currentTarget.value.slice(0, 1000));
    }

    setTextArea(e.currentTarget.value);
  };

  return (
    <div className={styles.container} style={{ flex: "1" }}>
      <p>Комментарий</p>
      <div className={styles.text_area_container}>
        <textarea
          className={styles.text_area}
          value={textArea}
          placeholder="Здесь вы можете указать пожелания к выполнению или дополнительные требования"
          onChange={onChange}
        />
        <label className={styles.text_area_label}>{textArea.length}/1000</label>
      </div>
    </div>
  );
};

const ExpectedPrice = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const expectedPrice = useAppSelector((state) => state.orderPopup.expectedPrice);
  const dispatch = useAppDispatch();
  const [inputPrice, setInputPrice] = useState(expectedPrice ? expectedPrice.toString() : "");
  const debouncedInputPrice = useDebounce(inputPrice, 80);

  useEffect(() => {
    if (Number(debouncedInputPrice) === 0) {
      dispatch(setExpectedPrice(null));
    } else {
      dispatch(setExpectedPrice(Number(debouncedInputPrice)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInputPrice]);

  return (
    <div className={styles.expected_price_container}>
      <p style={{ flexShrink: 0 }}>Желаемая стоимость</p>
      <div className={styles.expected_price} onClick={() => inputRef.current?.focus()}>
        <label className={styles.expandable_input}>
          <span style={{ whiteSpace: "pre" }}>{inputPrice.length === 0 ? "Пожелания числом" : inputPrice}</span>
          <input
            ref={inputRef}
            className={styles.expected_price_input}
            placeholder="Пожелания числом"
            type="number"
            value={inputPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length < 8) {
                setInputPrice(e.target.value.replace(/[^0-9.]/g, ""));
              }
            }}
          />
        </label>
        {inputPrice.length > 0 && <span style={{ fontWeight: "500", color: "#1070EE" }}>₽</span>}
      </div>
    </div>
  );
};

export const AdditionalInfo = () => {
  const projectType = useAppSelector((state) => state.orderPopup.projectType);
  const dispatch = useAppDispatch();

  const additionalData = useMemo(() => {
    if (projectType) {
      if (additionalInfoParams[projectType]) {
        return additionalInfoParams[projectType];
      } else {
        return null;
      }
    }
  }, [projectType]);

  return (
    <div className={styles.additional_info}>
      <div className={styles.originality_container}>
        {additionalData?.antiplagiat && <OriginalityCalculator antiplagiatField={additionalData.antiplagiat} />}
        {additionalData?.antiplagiat && <TypeOfOriginalityCheck antiplagiatField={additionalData.antiplagiat} />}
      </div>

      {additionalData?.volumeData && <Volume volumeData={additionalData.volumeData} />}
      <AdditionalMessage />

      <div className={styles.bottom_buttons}>
        <ExpectedPrice />
        <Button color="#fff" style={{ height: "48px", margin: "unset", minWidth: "80px" }} onClick={() => dispatch(setStage("final"))}>
          ДАЛЕЕ
        </Button>
      </div>
    </div>
  );
};
