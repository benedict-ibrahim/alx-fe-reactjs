function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-3 sm:p-4 md:p-8 lg:p-8 
                    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                    mx-auto my-4 sm:my-6 md:my-10 lg:my-20 
                    rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full sm:p-4 w-20 h-20 sm:w-24 sm:h-24 md:p-8 d:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto"
      />
      <h1 className="text-base sm:text-lg sm:p-4 md:p-8 md:text-xl lg:text-2xl 
                     text-blue-800 my-2 sm:my-3 md:my-4 lg:my-5">
        John Doe
      </h1>
      <p className="text-xs sm:text-sm sm:p-4 md:p-8 md:text-base lg:text-lg text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;