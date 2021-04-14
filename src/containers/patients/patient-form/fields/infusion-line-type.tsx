import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const InfusionLineType: FC<IPatientField> = memo(
  ({ control, state, error }) => {
    return (
      <Select
        label="Infusion Line Type"
        name="InfusionLineType"
        control={control}
        value={state}
        error={error}
      >
        <SelectOption value=" 90 Degree" selected={state === " 90 Degree"}>
          90 Degree
        </SelectOption>
        <SelectOption value="45 Degree" selected={state === "45 Degree"}>
          45 Degree
        </SelectOption>
        <SelectOption value="Metal" selected={state === "Metal"}>
          Metal
        </SelectOption>
        <SelectOption value="Null" selected={state === "Null"}>
          Null
        </SelectOption>
      </Select>
    );
  }
);
