import { useForm, useWatch } from "react-hook-form";
import { Input, Form, Select, SelectOption, Switch } from "components";

export const AddPatientForm = () => {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = handleSubmit((state) => console.log(state));

  const state = useWatch({ control });

  return (
    <Form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-12 border-t border-gray-400 pt-12"
      onSubmit={onSubmit}
    >
      <Input label="Patient Id" name="PatientId" register={register} />

      <Input label="Surname" name="Surname" register={register} />

      <Input label="Christian Name" name="ChristianName" register={register} />

      <Input label="Current Study" name="CurrentStudy" register={register} />

      <Input
        label="Previous Study 1"
        name="PreviousStudy1"
        register={register}
      />

      <Input
        label="Previous Study 2"
        name="PreviousStudy2"
        register={register}
      />

      <Input
        label="Previous Study 3"
        name="PreviousStudy3"
        register={register}
      />

      <Input label="Date Of Birth" name="DateOfBirth" register={register} />

      <Select
        control={control}
        label="Gender"
        name="Gender"
        value={state["Gender"]}
      >
        <SelectOption value="Male">Male</SelectOption>
        <SelectOption value="Female">Female</SelectOption>
        <SelectOption value="Other">Other</SelectOption>
      </Select>

      <Input label="Phone Number" name="PhoneNumber" register={register} />

      <Input
        label="Prefered Contact Time"
        name="PreferedContactTime"
        register={register}
      />

      <Input
        label="Prefered Contact Method"
        name="PreferedContactMethod"
        register={register}
      />

      <Input
        label="Date Details Updated"
        name="DateDetailsUpdated"
        register={register}
      />

      <Input label="Email Address" name="EmailAddress" register={register} />

      <Input label="Subrub" name="Subrub" register={register} />

      <Input label="State" name="State" register={register} />

      <Input
        label="Date Of Diagnosis Of T1D"
        name="DateOfDiagnosisOfT1D"
        register={register}
      />

      <Select
        label="CHO Counting"
        name="CHOCounting"
        control={control}
        value={state["CHOCounting"]}
      >
        <SelectOption value="No" selected={state["CHOCounting"] === "No"}>
          No
        </SelectOption>
        <SelectOption
          value="Beginner"
          selected={state["CHOCounting"] === "Beginner"}
        >
          Beginner
        </SelectOption>
        <SelectOption
          value="Intermediate"
          selected={state["CHOCounting"] === "Intermediate"}
        >
          Intermediate
        </SelectOption>
        <SelectOption
          value="Proficient"
          selected={state["CHOCounting"] === "Proficient"}
        >
          Proficient
        </SelectOption>
        <SelectOption value="Other" selected={state["CHOCounting"] === "Other"}>
          Other
        </SelectOption>
      </Select>

      <Input label="Exercise" name="Exercise" register={register} />

      <Select
        label="Diabetes Management"
        name="DiabetesManagement"
        control={control}
        value={state["DiabetesManagement"]}
      >
        <SelectOption
          value="640G"
          selected={state["DiabetesManagement"] === "640G"}
        >
          640G
        </SelectOption>
        <SelectOption
          value="670G"
          selected={state["DiabetesManagement"] === "670G"}
        >
          670G
        </SelectOption>
        <SelectOption
          value="770G"
          selected={state["DiabetesManagement"] === "770G"}
        >
          770G
        </SelectOption>
        <SelectOption
          value="MDT AHCL"
          selected={state["DiabetesManagement"] === "MDT AHCL"}
        >
          MDT AHCL
        </SelectOption>
        <SelectOption
          value="Tslim X2"
          selected={state["DiabetesManagement"] === "Tslim X2"}
        >
          Tslim X2
        </SelectOption>
        <SelectOption
          value="Tslim BasallQ"
          selected={state["DiabetesManagement"] === "Tslim BasallQ"}
        >
          Tslim BasallQ
        </SelectOption>
        <SelectOption
          value="Ypsomed"
          selected={state["DiabetesManagement"] === "Ypsomed"}
        >
          Ypsomed
        </SelectOption>
        <SelectOption
          value="Looping"
          selected={state["DiabetesManagement"] === "Looping"}
        >
          Looping
        </SelectOption>
        <SelectOption
          value="MDI"
          selected={state["DiabetesManagement"] === "MDI"}
        >
          MDI
        </SelectOption>
      </Select>

      <Input label="Insulin" name="Insulin" register={register} />

      <Select
        label="Current CGM Wear"
        name="CurrentCGMWear"
        register={register}
        control={control}
        value={state["CurrentCGMWear"]}
      >
        <SelectOption value="MDT" selected={state["CurrentCGMWear"] === "MDT"}>
          MDT
        </SelectOption>
        <SelectOption
          value="Dexcom"
          selected={state["CurrentCGMWear"] === "Dexcom"}
        >
          Dexcom
        </SelectOption>
        <SelectOption
          value="Libre"
          selected={state["CurrentCGMWear"] === "Libre"}
        >
          Libre
        </SelectOption>
      </Select>

      <Select
        label="Past CGM Wear"
        name="PastCGMWear"
        register={register}
        control={control}
        value={state["PastCGMWear"]}
      >
        <SelectOption value="MDT" selected={state["PastCGMWear"] === "MDT"}>
          MDT
        </SelectOption>
        <SelectOption
          value="Dexcom"
          selected={state["PastCGMWear"] === "Dexcom"}
        >
          Dexcom
        </SelectOption>
        <SelectOption value="Libre" selected={state["PastCGMWear"] === "Libre"}>
          Libre
        </SelectOption>
      </Select>

      <Input
        label="Frequency Of SBGM"
        name="FrequencyOfSBGM"
        register={register}
      />

      <Input
        label="Endocrinologist"
        name="Endocrinologist"
        register={register}
      />

      <Input
        label="Diabetes Educator"
        name="DiabetesEducator"
        register={register}
      />

      <Input label="DKA Expreience" name="DKAExpreience" register={register} />

      <Input label="Exercise" name="Exercise" register={register} />

      <Input label="Subrub" name="third" register={register} />

      <Input label="Subrub" name="third" register={register} />

      <Input label="Exercise" name="Exercise" register={register} />

      <Input label="Subrub" name="third" register={register} />

      <Input label="Subrub" name="third" register={register} />

      <Input label="Exercise" name="Exercise" register={register} />

      <Input label="Subrub" name="third" register={register} />

      <Input label="Subrub" name="third" register={register} />

      <Switch
        label="Will Come To St Vincent"
        name="WillComeToStVincent"
        control={control}
        checked={state["WillComeToStVincent"]}
      />

      <button type="submit">Sub</button>
    </Form>
  );
};
