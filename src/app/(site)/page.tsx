import TitleSection from "@/components/landingPage/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "../../../public/appBanner.png";
import Diamond from "../../../public/icons/diamond.svg";
import checkIcon from "../../../public/icons/check.svg";
import cal from "../../../public/cal.png";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landingPage/CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section
        className=" overflow-hidden
        px-4
        sm:px-6
        mt-10
        sm:flex
        sm:flex-col
        gap-4 
        md:justify-center
        md:items-center
        "
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and 
          Productivity Platform"
        />
        <div
          className="bg-white
        p-[2px]
        mt-6
        rounded-xl
        bg-gradient-to-r
        from-primary
        to-brand-primaryBlue
        sm:w-[300px]"
        >
          <Button
            variant={"secondary"}
            className="w-full
           rounded-[10px]
           p-6
           text-2xl
           bg-background"
          >
            {" "}
            Get Cypress Free
          </Button>
        </div>
        <div
          className="md:mt-[- 90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]"
        >
          <Image src={Banner} alt="App Banner" />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10"
          />
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
            flex
            after:content['']
            after:dark:from-brand-dark
            after:to-transparent
            after:from-backgroud
            after:bg-gradient-to-l
            after:right-0
            after:top-0
            after:bottom-0
            after:z-10
            after:w-20
            after:absolute

            before:content['']
            before:dark:from-brand-dark
            before:to-transparent
            before:from-backgroud
            before:bg-gradient-to-r
            before:left-0
            before:bottom-0
            before:top-0
            before:z-10
            before:absolute
            before:w-20"
        >
          {[...Array(2)].map((arr, i) => (
            <div
              key={arr}
              className="flex
              flex-nowrap
              animate-slide"
            >
              {CLIENTS.map((cli) => (
                <div
                  key={cli.alt}
                  className="relative
                  w-[200px]
                  m-20
                  shrink-0
                  flex
                  items-center"
                >
                  <Image
                    src={cli.logo}
                    alt={cli.alt}
                    width={200}
                    className={"object-contain max-w-none"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        flex-col
        relative
        justify-center
        items-center
      "
      >
        <div
          className="w-[30%]
        blur-[120px]
        rounded-full
        h-32
        absolute
        bg-brand-primaryPurple/50
        top-22"
        />
        <TitleSection
          pill="Feature"
          title="Keep track of your meetings 
          all in one place"
          subHeading="Capture your ideas, thoughts, and meeting notes in a 
          structured and organized manner."
        />
        <div
          className="mt-10
        max-w-[450px]
        flex
        justify-center
        items-center
        relative
        sm:ml-0
        rounded-2xl
        border-8
        border-washed-purple-300
        border-opacity-10"
        >
          <Image
            src={cal}
            alt="Integrated Calender Banner"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section
        className="
        relative
      "
      >
        <div
          className="w-full
        blur-[120px]
        rounded-full
        h-32
        absolute
        bg-brand-primaryPurple/50
        top-56"
        />
        <div
          className=" mt-20
        px-4
        sm:px-6
        flex
        flex-col
        overflow-x-hidden
        overflow-visible"
        >
          <TitleSection
            pill="Testimonils "
            title="Trusted by all"
            subHeading="Join thousands of satisfied users who rely on our platform for their 
          personal and professional productivity needs."
          />
          {[...Array(2)].map((arr, idx) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": idx === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": idx === 1,
                  "ml-[100vw]": idx === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((el, idx) => (
                <CustomCard
                  key={el.name}
                  className="w-[500px]
                shrink-0
                rounded-xl
                dark:bg-gradient-to-t
                dark:from-border dark:to-background"
                  cardHeader={
                    <div
                      className="
                flex
                items-center
                gap-4"
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${idx}.png`} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {el.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {el.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">{el.message}</p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="mt-20
      px-4
      sm:px-6"
      >
        <TitleSection
          title="The Perfect Plan For You"
          subHeading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="flex
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10"
        >
          {PRICING_CARDS.map((el, idx) => (
            <CustomCard
              key={el.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/40 brackground-blur-3xl relative",
                {
                  "border-brand-primaryPurple/70":
                    el.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle className="text-2xl font-semibold">
                  {el.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="
                      hidden dark:block w-full blur-[120px] rounded-full h-32
                      absolute
                      bg-brand-primaryPurple/80
                      top-0
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {el.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal
                  text-2xl
                  "
                  >
                    ${el.price}
                  </span>
                  {+el.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {el.description}
                  </p>
                  <Button
                    variant={"secondary"}
                    className="whitespace-nowrap w-full mt-4 text-xl"
                  >
                    {el.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                flex
                mb-2
                flex-col
                gap-4
                "
                >
                  <small>{el.highlightFeature}</small>
                  {el.freatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex
                    items-center
                    gap-2
                    "
                    >
                      <Image src={checkIcon} alt="Check Icon" />
                      {feat}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
