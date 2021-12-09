import { useState } from "react"
import dayjs from "dayjs"
import GlobalContext from "./GlobalContext"

const GlobalProvider = ({children}:any) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const contextValue = { monthIndex, setMonthIndex };
    return (
      <GlobalContext.Provider value={contextValue}>
          {children}
      </GlobalContext.Provider>
    );
}

export default GlobalProvider
