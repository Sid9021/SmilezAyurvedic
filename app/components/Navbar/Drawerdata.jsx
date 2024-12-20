import React, { useState } from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

const navigation = [
  { name: "Home", href: "", current: false },
  { name: "Services", href: "/services-all", current: false },
  { name: "Contact", href: "/Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Data = ({isOpen}) => {
  // State to control the visibility of the Contactusform
  const [showForm, setShowForm] = useState(false);

;

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
<div className="flex justify-start">
<Contactusform isOpenForm={isOpen} type="MenuMobile"/>

</div>
            {/* Book Now Button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
