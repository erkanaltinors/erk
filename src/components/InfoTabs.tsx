import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
export default function InfoTabs() {
  return (
    <Tabs defaultValue="career" className="w-full">
      <TabsList className="flex flex-wrap md:flex-nowrap">
        <TabsTrigger value="career">Career</TabsTrigger>
      </TabsList>
      <TabsContent value="career" className="focus:outline-none">
        <ScrollArea className="h-[calc(100vh-300px)] w-full text-white focus:outline-none">
          <div className="grid grid-cols-1 gap-2 rounded-md p-4">
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Doping Hafıza</p>
                <p className="text-sm font-light italic md:text-base">Sep 2022 - Still Working</p>
              </div>
              <div>
                <ul className="list-none [&>li:before]:content-['‣_'] [&>li:not(:last-child)]:mb-2">
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
              <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">
                Used Technologies: React, Next, Tailwind, Jest
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Clockwork Digital Agency</p>
                <p className="text-sm font-light italic md:text-base">Jun 2020 - Sep 2022</p>
              </div>
              <div>
                <ul className="list-none [&>li:before]:content-['‣_'] [&>li:not(:last-child)]:mb-2">
                  <li>Implementing user interface components and layouts,</li>
                  <li>Cross-browser compatible styling,</li>
                  <li>Adding Interactions to the client-side,</li>
                  <li>Building strategies to improve web site speed,</li>
                  <li>Made collaboration with back-end team and management to decrease project publish date.</li>
                  <li>20+ finished projects & 50+ maintained projects.</li>
                  <li>Won 4 rewards from different committees such as Altın Örümcek and Horizon Interactive Awards.</li>
                </ul>
                <p className="mt-2">
                  I've taught 4 interns in 2021. 3 of them started as Junior Front-end Developer in this company.
                </p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">
                  Used Technologies: Jquery, Javascript, LESS, SASS, UIKit, Bootstrap
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Roboair Inc.</p>
                <p className="text-sm font-light italic md:text-base">Dec 2019 - Jun 2020</p>
              </div>
              <div>
                <p>
                  Implement, style and add interactions to web pages for e-commercial website which designed by creative
                  team.
                </p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">
                  Used Technologies: Angular8, SASS, Typescript
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Related Digital</p>
                <p className="text-sm font-light italic md:text-base">Jun 2019 - Nov 2019</p>
              </div>
              <div>
                <p>
                  Implement, style and add interactions to web pages for e-commercial website which designed by creative
                  team.
                </p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">
                  Used Technologies: Angular8, SASS, Typescript
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="mb-4 items-center gap-2 md:flex md:justify-between">
                <p className="text-lg md:text-2xl">Related Digital</p>
                <p className="text-sm font-light italic md:text-base">Jun 2019 - Nov 2019</p>
              </div>
              <div>
                <ul className="list-none [&>li:before]:content-['‣_'] [&>li:not(:last-child)]:mb-2">
                  <li>Implementing custom scripts according to customers' request,</li>
                  <li>Apply solutions for problems in product(Visilabs),</li>
                  <li>Integrations between customers' website and product,</li>
                  <li>Monitoring product integration health,</li>
                  <li>GTM Integrations.</li>
                </ul>
                <p className="mt-2">
                  Product mentioned <span className="font-semibold">Visilabs</span> is similar to Google Analytics.
                </p>
              </div>
              <div>
                <p className="inline-flex rounded-sm bg-slate-800 p-3 text-sm italic">Used Technologies: Javascript</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
