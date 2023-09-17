import { ArrowSquareOut } from "@phosphor-icons/react";

import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";

const InfoTabs: React.FC = () => {
  interface ICodeWars {
    codeChallenges: {
      totalCompleted: number
    }
    honor: number,
    leaderboardPosition: number,
    ranks: {
      overall: {
        name: string
      }
    }
  }
  const [codewars, setCodewars] = useState<ICodeWars | undefined>(undefined);
  useEffect(()=> {
    fetch('https://www.codewars.com/api/v1/users/erkanaltinors').then((response) => response.json()).then((data) => setCodewars(data));
  },[]);
  return (
    <Tabs defaultValue="career">
      <TabsList className="mb-5 flex">
        <TabsTrigger value="career">Career</TabsTrigger>
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="personal">Personal</TabsTrigger>
      </TabsList>
      <TabsContent value="career" className="focus:outline-none">
        <ScrollArea className="mx-auto h-[calc(100vh-300px)] w-full text-white focus:outline-none md:w-2/3">
          <div className="grid grid-cols-1 gap-2 rounded-md p-4">
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Doping Technology</p>
                <p className="text-sm font-light italic md:text-base">Sep 2022 - Still Working</p>
              </div>
              <div>
                <ul>
                  <li>Implementing user interface components and layouts,</li>
                  <li>Cross-browser compatible styling,</li>
                  <li>Adding Interactions to the client-side,</li>
                  <li>Optimizing projects according to needs,</li>
                  <li>Building strategies to improve web site speed,</li>
                  <li>Unit tests,</li>
                  <li>Mentorship to junior colleagues,</li>
                  <li>Documenting project details and how-to guides for development team.</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">Used Technologies: React, Next, Tailwind, Jest</p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Clockwork Digital Agency</p>
                <p className="text-sm font-light italic md:text-base">Jun 2020 - Sep 2022</p>
              </div>
              <div>
                <ul>
                  <li>Implementing user interface components and layouts,</li>
                  <li>Cross-browser compatible styling,</li>
                  <li>Adding Interactions to the client-side,</li>
                  <li>Building strategies to improve web site speed,</li>
                  <li>Made collaboration with back-end team and management to decrease project publish date.</li>
                  <li>20+ finished projects & 50+ maintained projects.</li>
                  <li>Won 5 awards from different committees such as Altin Orumcek and Horizon Interactive Awards.</li>
                </ul>
                <p className="mt-2">I've taught 4 interns in 2021. 3 of them started as Junior Front-end Developer in this company.</p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">Used Technologies: Jquery, Javascript, LESS, SASS, UIKit, Bootstrap</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Roboair Inc.</p>
                <p className="text-sm font-light italic md:text-base">Dec 2019 - Jun 2020</p>
              </div>
              <div>
                <p>Implement, style and add interactions to web pages for e-commercial website which designed by creative team.</p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">Used Technologies: Angular8, SASS, Typescript</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Related Digital</p>
                <p className="text-sm font-light italic md:text-base">Jun 2019 - Nov 2019</p>
              </div>
              <div>
                <ul>
                  <li>
                    Implementing custom scripts according to customers' request,
                  </li>
                  <li>Apply solutions for problems in product(Visilabs),</li>
                  <li>Integrations between customers' website and product,</li>
                  <li>Monitoring product integration health,</li>
                  <li>GTM Integrations.</li>
                </ul>
                <p className="mt-2">
                  Product mentioned{" "}
                  <span className="font-semibold">Visilabs</span> is similar to
                  Google Analytics.
                </p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">
                  Used Technologies: HTML, CSS, Javascript
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
      <TabsContent value="portfolio" className="focus:outline-none">
        <ScrollArea className="mx-auto h-[calc(100vh-300px)] w-full text-white focus:outline-none md:w-2/3">
          <p>Awarded projects are listed as below.</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="col-span-1">
              <div className="rounded-sm bg-slate-700 px-5 py-8 text-white">
                <p className="font-semibold text-xl">Regnum Carya Hotels</p>
                <p className="italic">Corporate Website</p>
                <p>Awards:</p>
                <ul>
                  <li>
                    20th Altin Orumcek Web Awards - 1st in Tourism and Travel
                    Category,
                    <i className="font-semibold"> 2022</i>
                  </li>
                  <li>
                    Horizon Interactive Awards - Gold Winner in Tourism and
                    Travel Category,
                    <i className="font-semibold"> 2022</i>
                  </li>
                </ul>
                <a
                  href="https://www.regnumhotels.com/en/"
                  target="_blank"
                  rel="noonepener noreferrer"
                  className="mt-3 inline-block rounded-sm bg-gradient-to-t from-yellow-600 to-yellow-500 px-2 py-3 text-white"
                >
                  <div className="flex items-center gap-2">
                    Website
                    <span>
                      <ArrowSquareOut size={20} />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-sm bg-slate-700 px-5 py-8 text-white">
                <p className="font-semibold text-xl">Calista Luxury Resort</p>
                <p className="italic">Corporate Website</p>
                <p>Awards:</p>
                <ul>
                  <li>Horizon Interactive Awards - Gold Winner in Tourism and Travel Category,<i className="font-semibold"> 2022</i></li>
                  <li>Altin Orumcek Awards - 3rd in Tourism and Travel Category, <i className="font-semibold"> 2023</i></li>
                </ul>
                <a
                  href="https://calista.com.tr/en/"
                  target="_blank"
                  rel="noonepener noreferrer"
                  className="mt-3 inline-block rounded-sm bg-gradient-to-t from-yellow-600 to-yellow-500 px-2 py-3 text-white"
                >
                  <div className="flex items-center gap-2">
                    Website
                    <span>
                      <ArrowSquareOut size={20} />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-sm bg-slate-700 px-5 py-8 text-white">
                <p className="font-semibold text-xl">Sirene Hotels</p>
                <p className="italic">Corporate Website</p>
                <p>Awards:</p>
                <ul>
                  <li>Horizon Interactive Awards - Gold Winner in Tourism and Travel Category,<i className="font-semibold"> 2023</i></li>
                </ul>
                <a
                  href="https://www.sirene.com.tr/en/"
                  target="_blank"
                  rel="noonepener noreferrer"
                  className="mt-3 inline-block rounded-sm bg-gradient-to-t from-yellow-600 to-yellow-500 px-2 py-3 text-white"
                >
                  <div className="flex items-center gap-2">
                    Website
                    <span>
                      <ArrowSquareOut size={20} />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
      <TabsContent value="personal">
        <ScrollArea className="mx-auto h-[calc(100vh-300px)] w-full text-white focus:outline-none md:w-2/3">
          <div className="rounded-sm px-5 py-8">
            <p className="text-2xl font-bold">Codewars Stats</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="col-span-1 rounded-md bg-gray-900 bg-opacity-50 p-3">
                <p className="font-semibold text-xl">Completed Challenges</p>
                <p className="text-lg font-semibold">{codewars?.codeChallenges.totalCompleted}</p>
              </div>
              <div className="col-span-1 rounded-md bg-gray-900 bg-opacity-50 p-3">
                <p className="text-xl font-semibold">Honor</p>
                <p className="text-lg font-semibold">{codewars?.honor}</p>
              </div>
              <div className="col-span-1 rounded-md bg-gray-900 bg-opacity-50 p-3">
                <p className="text-xl font-semibold">Leaderboard Position</p>
                <p className="text-lg font-semibold">{codewars?.leaderboardPosition}</p>
              </div>
              <div className="col-span-1 rounded-md bg-gray-900 bg-opacity-50 p-3">
                <p className="text-xl font-semibold">Rank</p>
                <p className="text-lg font-semibold">{codewars?.ranks.overall.name}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}

export default InfoTabs;
