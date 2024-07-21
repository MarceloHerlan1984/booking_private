"use client";

import * as React from "react";

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

import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import SideNavBar from "./SideNavBar";
import { UserRoutes } from "./routes";

export function SideBarDraer() {
  return (
    <Drawer>
      <DrawerTrigger className="rounded-full bg-orange-100 p-2 text-orange-500">
        <TiThMenu size={24} />
      </DrawerTrigger>
      <DrawerContent className="fixed inset-o mt-0 h-screen w-40">
        <DrawerHeader>
          <div className="flex justify-center">
            <Avatar>
              <AvatarImage src="/img/logo.png" alt="demo" />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
          </div>
        </DrawerHeader>
        <SideNavBar items={UserRoutes} className="p-4" />
        <Separator className="my-4" />
        <div className="space-y-3 p-4">
          <p>Dark/Light</p>
          <p>Sign uot</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
