import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
interface EllipsButtonProps {
  id: string;
}

export default function EllipsButton({ id }: EllipsButtonProps) {
  const [off, setOff] = useState(true);
  return (
    <div className="ellipse__button" onClick={() => setOff((prev) => !prev)}>
      <FaEllipsisV />{" "}
      {!off && (
        <div className="actions">
          <button className="blacklist">Blacklist</button>
          <button className="activate">Activate</button>
          <Link to={`/details/:${id}`} className="view__details">
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}
