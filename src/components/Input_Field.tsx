function Input_Field({ value, placeH, onChangeText, onClickAdd }) {
  return (
    <div className="flex justify-center items-center h-32">
      <input
        className="p-2 border-2 border-gray-300 rounded-lg text-lg w-1/3
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                   transition duration-200 shadow-sm"
        type="text"
        placeholder={placeH}
        value={value}
        onChange={onChangeText}
      />
      <button
        onClick={onClickAdd}
        className="bg-green-500 h-10 ml-2 rounded-lg px-6 flex items-center text-white font-semibold
                   hover:bg-green-600 hover:scale-105 transition duration-200 shadow-md"
      >
        Add
      </button>
    </div>
  );
}


export default Input_Field;
