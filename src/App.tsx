import React, { useState , useContext, useEffect} from 'react';
import { tw } from 'twind';
import { CalendarHeader, Month, Sidebar } from './components';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';


function App() {
  console.log(getMonth());

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  
  return (
    <React.Fragment>
      <div className={tw`flex flex-col h-screen`}>
        <CalendarHeader />
        <div className={tw`flex flex-1`}>
          <Sidebar />
          <Month currentMonth={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
