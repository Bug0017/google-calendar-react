import { tw } from "twind"

function CreateEventButton() {
    return (
      <button
        className={tw`flex border p-2 rounded-full items-center shadow-md hover:shadow-2xl`}
      >
        <span className={tw`text-gray-700 font-semibold`}>+</span> Create
      </button>
    );
}

export default CreateEventButton
