import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import { tw } from "twind";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());


    const {monthIndex} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx]);

    useEffect(() => {
         setCurrentMonthIdx(monthIndex)
    }, [monthIndex]);

    return (
      <div className={tw`mt-9`}>
        <header className={tw`flex justify-between`}>
          <p className={tw`text-gray-500 font-bold`}>
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
              "MMMM YYYY"
            )}
          </p>

          <button onClick={() => setCurrentMonthIdx(currentMonthIdx - 1)}>
            <span
              className={tw`material-icons-outlined cursor-pointer text-gray-600 mx-2`}
            >
              chevron_left
            </span>
          </button>
          <button onClick={() => setCurrentMonthIdx(currentMonthIdx + 1)}>
            <span
              className={tw`material-icons-outlined cursor-pointer text-gray-600 mx-2`}
            >
              chevron_right
            </span>
          </button>
        </header>
      </div>
    );
}

export default SmallCalendar
