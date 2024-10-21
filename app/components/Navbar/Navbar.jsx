"use client"
import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Drawer from "./Drawer"
import Drawerdata from "./Drawerdata"
import Contactusform from "./Contactus"

const navigation = [
  { name: "Home", href: "", current: false },
  { name: "Services", href: "/services-all", current: false },
  { name: "Contact", href: "/Contact", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center border-right">
                <Link
                  href="/"
                  className="text-2xl sm:text-4xl font-semibold text-black"
                >
                  <img src="/images/logo/logo.png" alt="" className="w-[350px]" />
                </Link>
              </div>

              {/* LINKS */}
              <div className="hidden lg:flex flex-1 justify-center items-center">
                <div className="flex space-x-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks hover:text-black",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Contactusform />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  )
}

export default Navbar
