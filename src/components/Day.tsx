import { tw } from "twind"
import dayjs from "dayjs";

const Day = ({day , weekIdx}:any) => {

    const isToday = () => day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    return (
      <div className={tw`flex flex-col border border-gray-200`}>
        <header className={tw`flex flex-col items-center`}>
          {weekIdx === 0 && (
            <p className={tw`text-sm p-1`}>{day.format("ddd").toUpperCase()}</p>
          )}
          <p
            className={
              isToday()
                ? tw`text-sm p-1 my-1 text-center bg-purple-600 text-white rounded-full w-7`
                : tw`text-sm p-1 my-1 text-center`
            }
          >
            {day.format("DD")}
          </p>
        </header>
      </div>
    );
}

export default Day
