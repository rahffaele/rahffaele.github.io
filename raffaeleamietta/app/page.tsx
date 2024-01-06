"use client";

import * as React from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import { ChevronDown, Wand } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

import Header from "@/components/ui/Header";
import ButtonDownload from "@/components/ui/ButtonDownloadFile";
import ButtonCopyEmail from "@/components/ui/ButtonCopyEmail";
import Contacts from "@/components/ui/Contacts";
import ExperienceSection from "@/components/ui/ExperienceSection";
import EducationSection from "@/components/ui/EducationSection";
import ButtonChangeText from "@/components/ui/ButtonChangeText";

//---projects
import Watchanalytics from "@/components/watchanalytics";
import InteractiveCxMap from "@/components/interactive-cx-map";
import Rahdio from "@/components/rahdio";
import Wanderlust from "@/components/wanderlust";

// Now you can use the `description` variable wherever you need it in your TSX file.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between lg:px-96 md:px-24 px-6 pb-16 bg-background">
      <div className="my-12">
        <Header />
        <div className="py-4 flex">
          <ButtonDownload />
          <ButtonCopyEmail />
        </div>
        <Contacts />
        <div className="my-6 border-t border-b border-t-muted border-b-muted">
          <ExperienceSection />
          <hr />
          <EducationSection />
        </div>
        <div className="py-16">
          <h5 className="font-medium py-4">Selected projects</h5>
          <Watchanalytics />
          <InteractiveCxMap />
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionContent>
                  <Rahdio />
                  <Wanderlust />
                </AccordionContent>
                <AccordionTrigger className="flex justify-center">
                  <ButtonChangeText />
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div>
        <h5 className="py-4">Main skills</h5>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1 border border-muted p-4 rounded-[16px]">
            <h5 className="p-3">Design thinking</h5>
          </div>
          <div className="col-span-1 border border-muted p-4 rounded-[16px]">
            <h5 className="p-3">User research</h5>
          </div>
          <div className="col-span-1 border border-muted p-4 rounded-[16px]">
            <h5 className="p-3">Wireframe & Prototyping</h5>
          </div>
          <div className="col-span-1 border border-muted p-4 rounded-[16px]">
            <h5 className="p-3">UX/UI Design</h5>
          </div>
          <div className="col-span-1 border border-muted p-4 rounded-[16px]">
            <h5 className="p-3">Visual Design</h5>
          </div>
          <div className="col-span-1 border border-muted p-4 rounded-[16px]">
            <h5 className="p-3">Interaction Design</h5>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <p className="text-center p-0">Thanks for the visit!</p>
        <p className="text-center text-accent p-0">Made by Raffaele Amietta</p>
        <p className="text-center text-accent p-0">2024</p>
      </div>
    </main>
  );
}
