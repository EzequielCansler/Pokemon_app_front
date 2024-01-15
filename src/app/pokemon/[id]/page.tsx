import { GetPokemonData } from "@/app/lib/pokemonAPI";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import NavBar from "@/app/components/navBar";

const poke = {
  rating: 3.9,
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default async function Details({ params }: Pokemon) {
  const { id } = params;
  const res: Pokemon = await GetPokemonData(id);

  return (
    <div className="bg-white">
      <NavBar />
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {res.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  LVL:{res.base_experience}
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {poke.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          poke.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                  src={res.sprites.other.dream_world.front_default}
                  alt={res.name}
                />
                <img src={res.sprites.front_default} alt={res.name} />
                <img src={res.sprites.back_default} alt={res.name} />
                <img src={res.sprites.front_shiny} alt={res.name} />
              </div>
              <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ol role="list" className="flex items-center space-x-4">
                  {res.types.map((poke, index) => (
                    <li key={index}>
                      <div className="flex items-center">
                        <a className="mr-4 text-sm font-medium text-gray-900">
                          {poke.type.name}
                        </a>
                        <svg
                          viewBox="0 0 6 20"
                          aria-hidden="true"
                          className="h-5 w-auto text-gray-300"
                        >
                          <path
                            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <button
                  type="submit"
                  className="mt-8 flex w-6/12 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to team
                </button>
              </form>

              {/* pokemon details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Stats</h2>

                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    {res.stats.map((poke: Pokemon, index: number) => (
                      <li key={index}>
                        {poke.stat.name}: {poke.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {res.abilities.map((poke, index: number) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {poke.ability.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {poke.ability.name}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
