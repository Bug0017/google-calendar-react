import React from "react";
import { tw } from "twind";
import { Day } from ".";

const Month = ({currentMonth}:any) => {
    return <div className={tw`flex-1 grid grid-cols-7 grid-rows-5`}>
        {currentMonth.map((week:any,weekIdx:any)=>{

            return (
                <React.Fragment key={weekIdx}>
                    {week.map((day:any, dayIdx:any)=>{
                        return (<Day key={dayIdx} day={day}/>)
                    })}
                </React.Fragment>
            )
        })}
    </div>;
}

export default Month
