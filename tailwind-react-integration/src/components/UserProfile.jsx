function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 
                    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                    mx-auto my-4 sm:my-6 md:my-10 lg:my-20 
                    rounded-lg shadow-lg hover:shadow-xl
                    transition-all duration-300 ease-in-out">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto
                  hover:scale-110 transition-transform duration-300 ease-in-out
                  border-2 border-gray-200 hover:border-blue-400"
      />
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl 
                     text-blue-800 hover:text-blue-500 my-2 sm:my-3 md:my-4 lg:my-5
                     transition-colors duration-300">
        John Doe
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600
                    hover:text-gray-800 transition-colors duration-300">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;