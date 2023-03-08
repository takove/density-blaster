export function SecondaryFeatures() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <p className="text-right mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">Manage contacts and build mailing lists
              </p>
              <p className="text-right mt-6 text-lg leading-8 text-gray-600">
                Easily import and manage contacts, as well as create mailing lists in Mailjoy. Group your contacts into different mailing lists or create smart segments to create precisely targeted campaigns.


              </p>
              <button
                type="button"
                className="float-right rounded-full bg-cyan-500 my-2 py-1 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Mailing list features
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/2432/1442"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
