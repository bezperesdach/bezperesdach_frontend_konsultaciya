import React, { useEffect, useState } from "react";
import { projectTypeOptions, ProjectTypes, subjects } from "@/utils/popupOrder/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetAdditionalData, setProjectType, setStage, setSubject, setWorkTheme } from "@/store/reducers/orderPopupReducer";
import { useDebounce } from "usehooks-ts";
import { Button } from "@/components/button/button";
import { ReactSelector } from "../../react-selector/react-selector";
import { Options } from "react-select";

import styles from "./project-type-selection.module.css";

const ReactSelectorWrapper = ({
  options,
  projectType,
  selectItem,
}: {
  options: Options<ReactSelectOption>;
  projectType: ProjectTypes | null;
  selectItem: (e: string) => void;
}) => {
  const [typeOptions, setTypeOptions] = useState(options);

  const filterAllOptions = (rawInput: string) => {
    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(rawInput.toLowerCase()));

    if (filteredOptions.length === 0) {
      filteredOptions.push({
        value: "konsultaciya",
        label: "Консультация (Опишите свое задание ниже или на этапе дополнительные требования)",
      });
    }

    setTypeOptions(filteredOptions);
  };

  return (
    <ReactSelector
      item={projectType}
      options={typeOptions}
      filterOption={() => true}
      onItemSelected={selectItem}
      onInputChange={filterAllOptions}
      name="Выберите тип"
      placeholder="Начните набирать..."
    />
  );
};

const TextArea = ({ workTheme }: { workTheme: string }) => {
  const dispatch = useAppDispatch();
  const [textArea, setTextArea] = useState(workTheme);
  const debouncedTextArea = useDebounce(textArea, 160);

  useEffect(() => {
    dispatch(setWorkTheme(debouncedTextArea));
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
    <div className={styles.text_area_container}>
      <textarea className={styles.text_area} value={textArea} onChange={onChange} />
      <label className={styles.text_area_label}>{textArea.length}/1000</label>
    </div>
  );
};

const WorkThemeSubject = ({
  workTheme,
  subject,
  projectType,
}: {
  workTheme: string;
  subject: string;
  projectType: ProjectTypes | null;
}) => {
  const [choosingTheme, setChoosingTheme] = useState(workTheme !== "" ? true : subject !== "" ? false : true);
  const dispatch = useAppDispatch();

  const chooseSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (subject === event.currentTarget.name) {
      dispatch(setSubject(""));
    } else {
      dispatch(setSubject(event.currentTarget.name));
    }
  };

  const nextStage = () => {
    dispatch(setStage("date"));
  };

  return (
    <>
      <div className={styles.project_type_container} style={{ flex: "1" }}>
        <label className={styles.project_type_label}>{choosingTheme ? "Тема работы:" : "Направление:"}</label>
        {choosingTheme ? (
          <TextArea workTheme={workTheme} />
        ) : (
          <div className={styles.subjects_container}>
            {subjects.map((item, i) => (
              <button key={i} className={item === subject ? styles.selected_object : ""} onClick={chooseSubject} name={item}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.project_theme_not_set}>
        <div style={{ width: "80px" }} />
        <button className={`${styles.button_container} ${styles.work_theme_button}`} onClick={() => setChoosingTheme(!choosingTheme)}>
          {choosingTheme ? "ТЕМА ЕЩЕ НЕ УТВЕРЖДЕНА" : "УКАЗАТЬ ТЕМУ"}
        </button>
        {projectType != null && (workTheme !== "" || subject !== "") ? (
          <Button color="#fff" style={{ height: "48px", margin: "unset", minWidth: "80px" }} onClick={nextStage}>
            ДАЛЕЕ
          </Button>
        ) : (
          <div style={{ width: "80px" }} />
        )}
      </div>
    </>
  );
};

export const ProjectTypeSelection = () => {
  const { projectType, workTheme, subject } = useAppSelector((state) => state.orderPopup);
  const dispatch = useAppDispatch();

  const selectItem = (type: string) => {
    if (projectType !== type) {
      dispatch(setProjectType(type as ProjectTypes));
      dispatch(resetAdditionalData());
    }
  };

  return (
    <div className={styles.project_type}>
      <div className={styles.project_type_container}>
        <label className={styles.project_type_label}>Тип работы:</label>
        <ReactSelectorWrapper options={projectTypeOptions} selectItem={selectItem} projectType={projectType} />
      </div>
      <WorkThemeSubject workTheme={workTheme} subject={subject} projectType={projectType} />
    </div>
  );
};
