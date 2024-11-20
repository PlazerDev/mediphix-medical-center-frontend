import { useState, useEffect } from "react";

function MCSDateTimeTitle() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  // Format the time as hh:mm AM/PM
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours >= 12 ? "PM" : "AM"}`;

  // Format the date as yyyy MMMM dd
  const year = currentTime.getFullYear();
  const month = currentTime.toLocaleString("default", { month: "long" });
  const day = currentTime.getDate();
  const formattedDate = `${year} ${month} ${day}`;

  return (
    <div>
      <p className="text-xl text-mediphix_text_a font-bold text-center">
        {formattedTime}
      </p>
      <p className="text-mediphix_text_b text-center">{formattedDate}</p>
    </div>
  );
}

export default MCSDateTimeTitle;
