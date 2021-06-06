import { TextArea } from "components";
import { FC, memo } from "react";

export const ExerciseDetail: FC<IPatientField> = memo(({ control }) => {
  return (
    <TextArea
      label="Exercise Detail"
      placeholder="Enter Exercise Detail"
      name="exercise_detail"
      control={control}
      max={2000}
      interactive
      required
    />
  );
});
