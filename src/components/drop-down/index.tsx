import { FC, memo } from "react";
import { useToggle } from "hooks";
import { ICChevronDown, ICChevronRight } from "icons";

export const DropDown: FC<IDropdown> = memo(
  ({ className, label, children, active = false, icon }) => {
    const { open, toggle } = useToggle(active);

    return (
      <div className={`w-full  flex flex-col p-4  `} id="drop-down">
        <button
          className={`w-full flex justify-between items-center cursor-pointer text-white focus:outline-none ${className}`}
          onClick={() => toggle()}
          role="button"
        >
          <div className="flex items-center">
            {icon && icon()}
            <span className=" text-lg text-gray-400">{label}</span>
          </div>

          {open ? (
            <ICChevronDown className="w-3 h-3" role="close" id="close" />
          ) : (
            <ICChevronRight className="w-3 h-3 " />
          )}
        </button>
        <div
          className={`w-full  rounded transition-all ease-linear duration-200    ${
            open ? " h-auto min-h-10" : "h-0"
          }`}
        >
          {open && (
            <div className="flex flex-col pt-2 pl-4" slot="children">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);
