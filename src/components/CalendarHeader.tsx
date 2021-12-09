import { useContext } from "react";
import { tw } from "twind"
import GlobalContext from "../context/GlobalContext";

const CalendarHeader = () => {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)
    return (
      <header className={tw`flex px-4 py-2 items-center`}>
        <h1 className={tw`mr-10 text-xl text-gray-500 font-bold`}>Calendar</h1>
        <button className={tw`border rounded py-2 px-4 mr-5`}>Today</button>
        <button
          onClick={() => {
            setMonthIndex(monthIndex - 1);
          }}
        >
          <span
            className={tw`material-icons-outlined cursor-pointer text-gray-600 mx-2`}
          >
            chevron_left
          </span>
        </button>
        <button
          onClick={() => {
            setMonthIndex(monthIndex + 1);
          }}
        >
          <span
            className={tw`material-icons-outlined cursor-pointer text-gray-600 mx-2`}
          >
            chevron_right
          </span>
        </button>
      </header>
    );
}

export default CalendarHeader

