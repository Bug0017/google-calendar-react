import { tw } from "twind"
import { CreateEventButton } from "."
import { SmallCalendar } from "."
const Sidebar = () => {
    return (
        <aside className={tw`border p-5 w-64`}>
            <CreateEventButton/>
            <SmallCalendar/>
        </aside>
    )
}

export default Sidebar
