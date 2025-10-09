import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Switch({ darkMode, toggleDarkMode }) {
  return (
    <div id='dark-mode' className='h-20 mt-20 flex flex-row items-center justify-center'>
            <div className="h-full flex items-center justify-center w-1/3 px-6">
              <button
                onClick={toggleDarkMode}
                className={`relative w-16 h-8 rounded-full border transition-all duration-300 overflow-hidden
      ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-400"}`}
              >
                {/* Icons */}
                <div
                  className={`absolute inset-0 flex items-center justify-between px-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-600"
                    }`}
                >
                  <MdLightMode size={16} />
                  <MdDarkMode size={16} />
                </div>

                {/* Knob */}
                <span
                  className={`absolute top-1/2 left-1 h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 -translate-y-1/2
        ${darkMode ? "translate-x-8" : "translate-x-0"}`}
                ></span>
              </button>
            </div>
          </div>
  )
}