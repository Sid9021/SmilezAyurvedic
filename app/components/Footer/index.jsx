import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "Services", "Contact"]
  },
  // Additional sections can be added here
]

const footer = () => {
  return (
    <div className="bg-black mt-10" id="first-section">
      <div className="mx-auto pt-24 pb-16 px-4 sm:px-6 w-full justify-center lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
              Smilez Wellness Centre
            </h3>
            <div className="flex gap-4 mb-6">
              <div className="footer-icons">
                <Link href="https://www.facebook.com/profile.php?id=61558441632426">
                  <Image
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://www.instagram.com/smilezawc?igsh=cW8xODk2azI2bDR4">
                  <Image
                    src={"/images/footer/instagram.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="col-span-2">
            <h3 className="text-white text-2xl font-extrabold mb-9">
              Menu
            </h3>
            <ul>
              {products[0].link.map((link, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href="/"
                    className="text-white text-xl font-normal mb-6 space-links"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-3 */}
          <div className="col-span-2">
            <h3 className="text-white text-2xl font-extrabold mb-9">
              Follow Us
            </h3>
            <ul className="text-white">
              <li className="mb-5">
                <Link href="https://www.facebook.com/profile.php?id=61558441632426" className="text-xl font-normal">
                  Facebook
                </Link>
              </li>
              <li className="mb-5">
                <Link href="https://www.instagram.com/smilezawc?igsh=cW8xODk2azI2bDR4" className="text-xl font-normal">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN-4: Address */}
          <div className="col-span-4">
            <h3 className="text-white text-2xl font-extrabold mb-4">
              Our Address
            </h3>
            <p className="text-white text-2xl">
              Smilez Ayurvedic Wellness Centre<br />
              New Lane Road, Near Asset Periyar Scape<br />
              Thottakkattukara, Aluva,
              Kerala 683108
            </p>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="mx-auto w-full">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-xl">
                @2024 - All Rights Reserved by{" "}
                <Link href="#" target="_blank">
                  Smilez Wellness Centre
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
