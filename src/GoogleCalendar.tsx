import App from "./App";
import GlobalProvider from "./context/GlobalProvider";

const GoogleCalendar = () => {
    return (
      <div>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </div>
    );
}

export default GoogleCalendar
