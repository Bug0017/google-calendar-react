import React, { useState } from 'react';
import { tw } from 'twind';
import { CalendarHeader, Month, Sidebar } from './components';
import { getMonth } from './util';

function App() {
  console.log(getMonth());

  const [currentMonth, setCurrentMonth] = useState(getMonth())
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
