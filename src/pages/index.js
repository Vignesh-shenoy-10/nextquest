import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Lexend_Deca } from "@next/font/google";
import Form from "./Form";
import Footer from "./Footer"

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
 
});

const navigation = [
  { name: "WELLNESS", href: "#" },
  { name: "WORKSHOPS", href: "#" },
  { name: "ENTERTAINMENT", href: "#" },
  { name: "MASTERCLASS", href: "#" },
  { name: "VIRTUAL", href: "#" },
  { name: "BUNDLES", href: "#" },
  { name: "ABOUT US", href: "#" },
  { name: "BLOG", href: "#" },
];

const activities = [
  {
    name: 'Duration',
    time: '1 hrs 30 min',
    imageUrl:
      'https://cdn-icons-png.flaticon.com/512/4305/4305432.png',
  },
  {
    name: 'Team Size',
    time: 'Min 10 Max 40',
    imageUrl:
      'https://cdn-icons-png.flaticon.com/512/5238/5238538.png',
  },
  {
    name: 'Language',
    time: 'English, Dutch',
    imageUrl:
      'https://cdn-icons-png.flaticon.com/512/3898/3898082.png',
  },
  {
    name: 'Activity option',
    time: 'Outside the office',
    imageUrl:
      'https://cdn-icons-png.flaticon.com/512/2622/2622224.png',
  },
  {
    name: 'Goals',
    time: 'Inspiration, Creativity, Mental & physical wellbeing, gratitude',
    imageUrl:
      'https://cdn-icons-png.flaticon.com/512/1211/1211795.png',
  },
 
 
]

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
 
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",

  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className={lexend_deca.className}>
      <div className="header_upper">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Next Quest</span>
                <img
                  src="https://nextquest.nl/wp-content/uploads/2023/08/Group-3.png"
                  alt=""
                />
              </a>
              
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              ></a>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">NextQuest</span>
                  <img
                    className="h-8 w-auto"
                    src="https://nextquest.nl/wp-content/uploads/2023/08/Group-3.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <hr
          style={{
            color: "white",
            height: 5,
            marginTop: 80,
          }}
        />
        <nav
          className="flex items-center justify-center p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto  py-5 sm:py-48 lg:py-5">
            <div className="text-center">
              <h1
                className="text-4xl font-bold tracking-tight text-white-900 sm:text-5xl"
                style={{ color: "white", fontWeight: 800, fontSize: "50px" }}
              >
                Boat Tour-Extended Dutch Bar
              </h1>
              <p className="mt-6 text-lg leading-8 text-white-600" style={{fontWeight:'700',fontSize:'26px'}}>
                From €45 / person
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600"
                  style={{ color: "#ff5c3a", backgroundColor: "white" }}
                >
                  Get a Quick Qoute
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Feature section */}
      <div className="overflow-hidden bg-white py-3 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  style={{ fontWeight: "700", fontSize: "44px" }}
                >
                  Boat Tour Adventure!
                </p>
                <div
                  className="mt-6 text-sm leading-6 text-gray-600"
                  style={{ fontWeight: "400", fontSize: "17px" }}
                >
                  Experience unforgettable private Amsterdam boat tours with an
                  open international bar, perfect for team building and
                  corporate excursions. Enjoy the scenic views, indulge in
                  refreshing drinks, and create lasting memories aboard our
                  exclusive city canal cruise in Amsterdam. Book your team’s
                  ultimate voyage today and set sail for an extraordinary
                  experience that will leave everyone impressed and inspired!
                </div>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                       
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src={
                "https://rottnestexpress.imgix.net/2019/08/REX-Adventure-Boat-Tour-Couple-with-arms-up-on-boat-JWyld_1920.jpg?fit=crop&w=500&h=334&dpr=2.625&q=25&auto=format"
              }
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
   {/* feature sub */}
   <div className="overflow-hidden bg-white py-3 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  style={{ fontWeight: "700", fontSize: "26px" }}
                >
                  What to Expect?
                </p>
                <p
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  style={{ fontWeight: "500", fontSize: "32px" }}
                >
                  Boat tours Amsterdam
                </p>
                <div
                  className="mt-6 text-sm leading-6 text-gray-600"
                  style={{ fontWeight: "400", fontSize: "15px" }}
                >
                  Embark on a delightful Amsterdam city canal cruise. To cruise the Amsterdam canal is the ultimate teambuilding activity. NextQuest offers
                  the best Amsterdam boat adventures, fostering team bonds and enjoying a fantastic time together!
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* activities */}
      <div className="bg-white py-2 sm:py-3">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {activities.map((activity) => (
            <li key={activity.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={activity.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{activity.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{activity.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* CTA know more */}
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        style={{backgroundColor:"#ff5c3a"}}>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to know more?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white-300">
            Let us know and we will customize the experience specifically
            for your Team needs!
            </p>
      
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{fontWeight:'400',fontSize:'16px',color:'#ff5c3a'}}
              >
                Get A Quick Quote
              </a>
            </div>
           
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.webp?b=1&s=170667a&w=0&k=20&c=CTuv0GsOQhhXBx7nhCghIaadrbJS9bpTdIn7zHi8xOo="
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
    {/* Companies */}
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-lg font-semibold leading-8 text-gray-900"
        style={{fontWeight:'700',fontSize:'26px'}}>
          Trusted by the world’s most innovative teams
        </h1>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
           <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
           <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
    {/* Form component */}
    <Form />
    <Footer />
      
    </main>
  );
}
