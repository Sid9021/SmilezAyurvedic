"use client"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/20/solid"

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="lg:mx-auto max-w-7xl lg:py-24 py-8 mx-2 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        

        {/* <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">What types of Ayurvedic treatments do you offer at Smilez Wellness Centre</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                We provide disease based treatments according to the conditions of the patient and also provide treatments for general body wellness.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div> */}

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">Do you provide customized treatment plans based on individual health conditions?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                Treatments plans vary according to patient’s disease condition,generally 5 days or 7 days or maximum 2 weeks.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">How long do Ayurvedic treatments typically last?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                Treatments plans vary according to patient’s disease condition,generally 5 days or 7 days or maximum 2 weeks.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">Can I stay at the clinic during my treatment? What accommodations are provided?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                Yes, accommodation is available.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">Is food included during my stay? Do you offer Ayurvedic meals?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                ⁠Yes, we can arrange food facilities.Preferably light food mostly vegetarian food is offered to the patients.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">Do I need a prior consultation before starting treatment?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                Yes prior consultation is must to know more about patient’s bodily status.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="hidden lg:block">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">Are the treatments safe for people with pre-existing health conditions?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                Yes ,It will not affect the health status of the person besides it will help to reduce the risks.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">How do Ayurvedic treatments at Smilez Wellness Centre differ from conventional medical treatments?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                The treatment we provide is completely based on classical ayurvedic texts hence there will be easy results of the treatments without any adverse effects and consequences.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">How can I schedule a treatment at Smilez Wellness Centre?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                ⁠Consult the clinic for the treatment.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white lg:py-8 lg:px-6 p-3 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left lg:text-2xl text-lg font-medium">
                  <span className="max-w-[255px] lg:max-w-none">Can I schedule a follow-up consultation after completing my treatment?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-5 lg:w-5 h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 lg:text-xl text-md text-black font-normal opacity-50">
                Yes ,follow up appointment is must after taking treatment.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default FAQ
