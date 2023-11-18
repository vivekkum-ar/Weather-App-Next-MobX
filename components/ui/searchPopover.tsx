"use client"

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { set } from "mobx";
import { useState } from "react"

export function SearchPopover() {
const [searchText, setsearchText] = useState("");
const [searchFocus, setsearchFocus] = useState(false);
  return (
    <Command>
  <CommandInput placeholder="Type a city to search..." 
  onValueChange={(value) => {setsearchText(value); console.log("searchText:", searchText);}}
  onFocus={() => {setsearchFocus(true);}}
    onBlur={() => {setsearchFocus(false);}}
  ></CommandInput>
  <CommandList className={`${searchFocus == true ? "" : "hidden"}`}>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup onClick={() => {console.log("first")}} heading="Suggestions" className="">
      <CommandItem className="" onSelect={(value) => {setsearchText(value);console.log("searchText:",searchText)}}>Calendar</CommandItem>
      <CommandItem className="">Search Emoji</CommandItem>
      <CommandItem className="">Calculator</CommandItem>
    </CommandGroup>
    {/* <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup> */}
  </CommandList>
</Command>
  )
}
