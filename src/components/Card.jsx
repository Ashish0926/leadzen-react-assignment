import React, { useState } from "react";

const Card = (data) => {
  console.log(data);
  const [isExpanded, setIsExpanded] = useState(false);
  const [btnText, setBtnText] = useState("View Details");
  return (
    <div>
      <div className="p-4 bg-white my-2 mx-4 rounded-2xl group relative shadow-card hover:shadow-cardhover card">
        <div className={`flex flex-col mb-5 md:flex-row p-5 flex-wrap`}>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center">
              <h3 className="text-center font-inter font-medium">
                {data.company.name}
              </h3>
            </div>

            <div className="hidden sm:flex flex-col items-center">
              <h3 className="font-bold font-inter text-sm mb-2">CONTACT</h3>
              <p className="font-inter">{data.name}</p>
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <h3 className="font-bold font-inter text-sm mb-2">STREET</h3>
              <p className="font-inter">{data.address.street}</p>
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <h3 className="font-bold font-inter text-sm mb-2">CITY</h3>
              <p className="font-inter">{data.address.city}</p>
            </div>
            <div>
              <button
                type="button"
                className="bg-red-600 rounded-full p-3 font-inter text-white text-xs font-semibold w-36 md:text-sm md:w-40"
                onClick={() => {
                  if (isExpanded) {
                    setIsExpanded(false);
                    setBtnText("View Details");
                  } else {
                    setIsExpanded(true);
                    setBtnText("Hide Details");
                  }
                }}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="p-10 rounded-2xl border-2">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold font-inter">Description</h2>
              <p>
                {`${data.company.bs}` + " " + `${data.company.catchPhrase}`}
              </p>
            </div>

            <div className="md:flex-row md:gap-16 mt-6 flex flex-col">
              <ul className="flex flex-col gap-2 mb-5">
                <li>
                  <h2 className="font-semibold font-inter">Contact Person</h2>
                  <p>{data.name}</p>
                </li>
                <li>
                  <h2 className="font-semibold font-inter">Website</h2>
                  <p>{data.website}</p>
                </li>
                <li>
                  <h2 className="font-semibold font-inter">Email</h2>
                  <p>{data.email}</p>
                </li>
                <li>
                  <h2 className="font-semibold font-inter">Phones</h2>
                  <p>{data.phone}</p>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>
                  <h2 className="font-semibold font-inter">Address</h2>
                  <p>{`${data.address.suite}, ${data.address.street}, ${data.address.city}, ${data.address.zipcode}`}</p>
                </li>
                <li>
                  <h2 className="font-semibold font-inter">Street</h2>
                  <p>{data.address.street}</p>
                </li>
                <li>
                  <h2 className="font-semibold font-inter">City</h2>
                  <p>{data.address.city}</p>
                </li>
                <li>
                  <h2 className="font-semibold font-inter">Zipcode</h2>
                  <p>{data.address.zipcode}</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
