function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 max-w-xs mx-auto my-10 
                    md:p-8 md:max-w-sm md:my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 mx-auto md:w-36 md:h-36"
      />
      <h1 className="text-lg text-blue-800 my-3 md:text-xl md:my-4">
        John Doe
      </h1>
      <p className="text-sm text-gray-600 md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;