import { memo } from "react";
import { useHistory } from "react-router";
import { Button, Input, Text, Toolbar } from "components";
import { ICPlus, ICSearch } from "icons";

export const PatientListToolbar = memo(() => {
  const { push } = useHistory();
  return (
    <Toolbar>
      <Text
        size="header"
        className="w-3/4 flex flex-col items-start "
        slot="start"
      >
        Patients
      </Text>
      <div className="flex items-center w-1/4 " slot="end">
        <Input
          className="mr-4"
          placeholder="Search content here ..."
          icon={() => <ICSearch className="w-5 h-5 text-gray-600 " />}
        />
        <Button icon onClick={() => push("/admin/patients/add")}>
          <ICPlus className="w-8 h-8 text-secondary" />
        </Button>
      </div>
    </Toolbar>
  );
});
