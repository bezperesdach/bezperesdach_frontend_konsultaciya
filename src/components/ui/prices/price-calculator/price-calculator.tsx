import { AntiplagiatTypeMemo } from "@/components/ui/prices/price-calculator/components/antiplagiat-type";
import { OriginalityMemo } from "@/components/ui/prices/price-calculator/components/originality";
import { VolumeMemo } from "@/components/ui/prices/price-calculator/components/volume";
import { CheckMark } from "@/icons/generic/check_mark";
import React, { useEffect, useState } from "react";

import styles from "./price-calculator.module.css";

type Props = {
  basePrice: number;
  title?: string;
  showOriginalityControls?: boolean;
  volumeData: {
    name?: string;
    default?: number;
    min: number;
    max: number;
  };
};

export const PriceCalculator = ({ title, basePrice, volumeData, showOriginalityControls = true }: Props) => {
  const [price, setPrice] = useState(basePrice);
  const [volume, setVolume] = useState(volumeData.default ?? volumeData.min);
  const [antiplagiat, setAntiplagiat] = useState<0 | 1>(0);
  const [originality, setOriginality] = useState<0 | 1 | 2>(1);

  useEffect(() => {
    const antiplagiatMultiplier = antiplagiat === 0 ? 50 : 80;
    const originalityMultiplier = originality === 0 ? 0.9 : originality === 1 ? 1 : 1.4;
    setPrice(basePrice + volume * antiplagiatMultiplier * originalityMultiplier);
  }, [volume, antiplagiat, originality, basePrice]);

  return (
    <section className={styles.price_calculator_container}>
      <div className={`${styles.price_calculator} dynamic_container`}>
        <h2>{title ?? "Калькулятор цены"}</h2>
        <p className={`${styles.price_calculator_text} "font_h4"`}>
          Воспользуйся нашим калькулятором, чтобы узнать <span style={{ fontWeight: 600, color: "#1170EE" }}>примерную стоимость</span>{" "}
          написания работы онлайн
        </p>
        <div className={styles.price_container}>
          <h3 className="font_h1">
            от <span className={styles.price_value}>{price}</span> рублей<span className={styles.asterisk}>*</span>
          </h3>
          <div className={styles.discount_container}>
            <div className={styles.check_mark}>
              <CheckMark title="Включено в стоимость" accentColor="#00BE57" />
            </div>
            <p>Скидка на первый заказ</p>
          </div>
          <div className={styles.calculator_modules}>
            {showOriginalityControls && (
              <OriginalityMemo className={styles.originality_container} option={originality} setOption={setOriginality} />
            )}
            {showOriginalityControls && (
              <AntiplagiatTypeMemo className={styles.antiplagiat_container} option={antiplagiat} setOption={setAntiplagiat} />
            )}

            <VolumeMemo
              className={styles.volume_container}
              name={volumeData.name}
              min={volumeData.min}
              max={volumeData.max}
              value={volume}
              setValue={setVolume}
            />
          </div>
          <p className={styles.asterisk_text}>*Финальная стоимость работы будет предложена вам индивидуально</p>
        </div>
      </div>
    </section>
  );
};
