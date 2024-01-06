import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion";
  import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  
  import { Badge } from "@/components/ui/badge";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { defaultConfig } from "next/dist/server/config-shared";
  import Image from "next/image";
  
  const title = "Wanderlust";
  const description = `A personal exercise which aims to transform real-time data from global cities into generative musical compositions.`;
  const cardCover = "/images/project-cover/wanderlust-cover.png"
  const field = "UX/UI";
  
  const client = "@" + "SUPSI";
  const year = "2023";
  
  const coverImage = "/images/project-banners/rahdio.png";
  
  const role = "UI/UX Designer";
  const jobType = "Academic"
  
  const Wanderlust = () => {
    return (
      <div className="py-2">
        <Dialog>
          <DialogTrigger asChild>
            <div className="text-left">
              <Card className="relative cursor-pointer">
                <CardHeader>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <div>
                      <Badge variant={"default"} className="bottom-6 absolute">
                        {field}
                      </Badge>
                    </div>
                    <CardDescription className="span-cols-2 py-6">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <Image
                      src={cardCover}
                      alt="watchanalytics cover image"
                      height={800}
                      width={800}
                      className="rounded-[8px] hidden md:inline"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogTrigger>
          <DialogContent className="text-left h-[100%] w-[100%] md:h-[90vh] md:w-[80vw] lg:h-[90vh] lg:w-[60vw]">
            <DialogHeader className="px-6 pt-2">
              <div className="flex gap-4">
                <DialogTitle>{title}</DialogTitle>
                <Badge variant={"secondary"} className="rounded-full">
                  {year}
                </Badge>
              </div>
            </DialogHeader>
            <DialogDescription>
              <ScrollArea className="h-[80vh] p-6 text-left">
                <div className="md:grid grid-cols-6">
                  <div className="col-span-6 pb-6">
                    <Image 
                    width={800}
                    height={800}
                    style={{ objectFit: "contain" }}
                    src={coverImage}
                    alt="https://previewed.app/template/F79C0435"
                    />
                  </div>
                  <div className="col-span-2 pb-4">
                    <h5>My role</h5>
                    <p>{role}</p>
                    <div>
                      <Badge variant={"default"}>{jobType}</Badge>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <h5>Overview</h5>
                    <p>
                      Watchanalytics is a platform-based service that provides
                      in-depth analyses, insights, and news from the luxury watch
                      market since 2019.{" "}
                    </p>
                    <p>
                      They requested for a comprehensive interface redesign with a
                      mobile-first approach, to be built on top of{" "}
                      <a href="https://nextui.org/" target="_blank">
                        NextUI library
                      </a>
                      , along with a refinement of the interaction models, visual
                      hierarchy, and design definition of some upcoming features.
                    </p>
                  </div>
                  <div className="col-span-6 py-4">
                    <hr />
                  </div>
                  <div className="col-span-2">
                    <div className="sticky top-0 h-[32px]">
                      <h4 className="text-lg text-accent font-semibold">
                        Research
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-4 relative">
                    <p>
                      Since it started as a redesign project, the research was
                      mainly focused on a heuristic evaluation and analysis of the
                      current state. This phase highlighted different challenges
                      with a large margin of improvement, the main of which were:
                    </p>
                    <h5>Aesthetics</h5>
                    <p>
                      From a visual perspective, the website maintains a modern
                      aesthetic with well-managed colors and accents. The overall
                      layout is clear, although not fully optimized. The look and
                      feel could be improved as it feels a little old, clashing
                      with the positioning of the service as a trustworthy, modern
                      platform.
                    </p>
                    <p>
                      Especially as a B2C service, a user-friendly UI, branded and
                      vibrant is key.
                    </p>
                    <Image
                      src={"/images/projects/watchanalytics/homepage.png"}
                      style={{ objectFit: "contain" }}
                      width={800}
                      height={800}
                      alt="old homepage"
                      className="my-4 border border-muted"
                    />
                    <h5>Motion</h5>
                    <p>
                      The absence of a motion component is noted, highlighting its
                      potential to enhance user interaction and navigation.
                      Incorporating motion elements could contribute to an
                      improved user experience and a sense of greater control.{" "}
                    </p>
                    <h5>Consistency</h5>
                    <p>
                      While graphical elements appear consistent, the visual
                      hierarchy is not optimally managed. Calls to action (CTAs)
                      are sometimes hierarchically hidden, impacting their
                      visibility and effectiveness.
                    </p>
                    <p>
                      Considerations were raised regarding the overall information
                      hierarchy: for example, the card component that summarises
                      the watch info needed for clearer prioritization of elements
                      like model, brand, or variation.
                    </p>
                    <Image
                      src={
                        "/images/projects/watchanalytics/old top performer section.png"
                      }
                      style={{ objectFit: "contain" }}
                      width={800}
                      height={800}
                      alt="old top performer section"
                      className="my-4 border border-muted"
                    />
                    <h5>User Control and Freedom</h5>
                    <p>
                      The importance of designing for user control and freedom is
                      never stressed enough. The user should feel in control, able
                      to navigate freely, and the site should feel as their
                      personal tool in their hands.
                    </p>
                    <p>
                      At this stage, the service felt more like a rigid
                      data-platform rather than a tool that adapts to the user&apos;s
                      goal.
                    </p>
                    <h5>Flexibility</h5>
                    <p>
                      Flexibility is linked to user control and freedom,
                      indicating the need for interaction shortcuts to cater to
                      experienced users. No specific concerns were raised, but
                      given the nature of the service, it was noted that investing
                      in flexibility features could be worthwhile as there was a
                      large margin of improvement.
                    </p>
                  </div>
  
                  <div className="col-span-6 py-4">
                    <hr />
                  </div>
                  <div className="col-span-2">
                    <div className="sticky top-0 h-[32px]">
                      <h4 className="text-lg text-accent font-semibold">
                        Design challenges
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <p>
                      During the design phase, I encountered some specific
                      challenges that I deem worthy of notice.
                    </p>
                    <h5>&apos;Compare watches&apos; feature</h5>
                    <p>
                      A key feature of WatchAnalytics is the ability to compare
                      data from various watches. Interaction models for this
                      functionality are always challenging to refine, particularly
                      in this case where the data is complex and comprehensive,
                      including multiple indices and having to follow a
                      mobile-first approach.
                    </p> 
                    <p>
                      It was also crucial that the final
                      solution allowed for swift navigation through the data,
                      ensuring everything remained visible to the user without
                      creating an excessive content clutter.
                    </p>
                  </div>
  
                  <div className="col-span-6 py-4">
                    <hr />
                  </div>
                  <div className="col-span-2">
                    <div className="sticky top-0 h-[32px]">
                      <h4 className="text-lg text-accent font-semibold">
                        Output
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <p>
                      What I delivered
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  export default Wanderlust;