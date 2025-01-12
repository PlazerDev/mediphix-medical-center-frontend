function MCADoctorSearchBar() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-4 bg-mediphix_card_background rounded-s-lg flex-1 ">
        <input
          type="text"
          placeholder="Enter Doctor Name"
          className="outline-none w-full"
        />
      </div>
      <div className="h-full bg-mediphix_accent py-4 px-8 rounded-e-lg hover:bg-[#ff7300] hover:cursor-pointer">
        <p className="text-white">Search</p>
      </div>
    </div>
  );
}

export default MCADoctorSearchBar;
