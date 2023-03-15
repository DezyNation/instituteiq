import React from "react";
import "flatpickr/dist/themes/light.css";
import styles from "../../../styles/absentCalender.module.css";

import Flatpickr from "react-flatpickr";
import { Box } from "@chakra-ui/react";

const AbsentCalender = () => {
  const absentDates = ["2022-12-12", "2022-12-20"];

  return (
    <Box>
      {/* Styling is done in globals.css as well */}
      <Flatpickr
        options={{
          inline: "true",
          mode: "multiple",
          dateFormat: "Y-m-d",
          defaultDate: [...absentDates],
          enable: [...absentDates],
        }}
        className={styles.absentCalender}
      />
    </Box>
  );
};

export default AbsentCalender;
