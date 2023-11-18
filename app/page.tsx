// page.tsx
"use client"
import { mainStore } from "../components/mst/mainStore";
import { observer } from "mobx-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import page from "./home/page";
import {SearchPopover} from "@/components/ui/searchPopover";
import { Icon } from "@iconify/react/dist/iconify.js";

const Home = observer(() => {
  const mStore = mainStore;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (mainStore.searchTerm === '' || mainStore.searchTerm !== undefined || mainStore.searchTerm !== null) {
          var response = await fetch(`/api/main?term=${""}&page=2`);
        }
        else {
          var response = await fetch(`/api/main?term=${mainStore.searchTerm}&page=2`);
        }
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("data", data);
        // setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, [mainStore.searchTerm, page]);
  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className="text-3xl font-semibold text-center mt-16">Cities</h1>
      <div className="max-w-md mx-auto flex flex-row justify-center">
      <div className="absolute">
      {/* <SearchPopover></SearchPopover> */}
<div className="flex flex-col justify-center items-center w-full">
  <Button size={"icon"} className="absolute top-0 right-0 m-1 rounded-full"> <Icon fontSize={20} icon="flowbite:search-solid"  style={{}} /></Button>
  <input type="search" name="search" id="" className="w-60 p-3 rounded-lg outline-1 peer outline-slate-400 text-md"  placeholder="Enter city name..."/>
  <ul className="pt-1 peer-focus:visible invisible">
    <li className="bg-gray-200 text-sm w-60 px-2 py-1 border-b-2 border-gray-300 hover:bg-blue-50 rounded-t-lg">1</li>
    <li className="bg-gray-200 text-sm w-60 px-2 py-1 border-b-2 border-gray-300 hover:bg-blue-50">2</li>
    <li className="bg-gray-200 text-sm w-60 px-2 py-1 border-b-2 border-gray-300 hover:bg-blue-50  rounded-b-lg">3</li>
  </ul>
</div>
      </div>
      </div>
      <p>Count is {mStore.count}</p>
      <p>Count is {mStore.tableData[0].city}</p>
      <Button onClick={() => mStore.incrementBy(5)}>Increment</Button>
    </div>
  );
});

export default Home;