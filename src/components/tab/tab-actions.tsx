import { FC, memo } from "react";
import { Button } from "components";
import { ICChevronDown, ICChevronRight } from "icons";

export const TabActions: FC<ITab> = memo(({ expandable, open }) => {
  if (expandable) {
    if (open)
      return (
        <Button icon type="button">
          <ICChevronDown className="w-6 h-6 text-gray-200" />
        </Button>
      );
    else
      return (
        <Button icon type="button">
          <ICChevronRight className="w-6 h-6 text-gray-200" />
        </Button>
      );
  } else return null;
});
