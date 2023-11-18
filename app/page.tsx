// page.tsx
"use client"
import { mainStore } from "../components/mst/mainStore";
import { observer } from "mobx-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import page from "./home/page";
import { SearchPopover } from "@/components/ui/searchPopover";
import { Icon } from "@iconify/react/dist/iconify.js";

const Home = observer(() => {
  const mStore = mainStore;

  // useEffect(() => {
  //   const searchResults = async () => {
  //     try {
  //       if (mainStore.searchTerm === '' || mainStore.searchTerm !== undefined || mainStore.searchTerm !== null) {
  //         var response = await fetch(`/api/main?term=${""}&page=2`);
  //       }
  //       else {
  //         var response = await fetch(`/api/main?term=${mainStore.searchTerm}&page=2`);
  //       }
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       mStore.setTableData(data.results);
  //       console.log("mdata", mStore.tableData);
  //       // setPosts(data.posts || []);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   searchResults();
  // }, [mainStore.searchTerm, page]);
  const [inputTxt, setinputTxt] = useState("");
  const [resultData, setresultData] = useState([]);

  // Remove duplicates from the array
  function onlyUnique(value: string, index: number, array: string[]) {
    return array.indexOf(value) === index;
  }
  useEffect(() => {
    const searchResults = async () => {

      try {
        // if (mainStore.searchTerm === '' || mainStore.searchTerm !== undefined || mainStore.searchTerm !== null) {
        var response = await fetch(`/api/search?term=${inputTxt}&limit=5`);
        // }
        // else {
        // var response = await fetch(`/api/main?term=${mainStore.searchTerm}&page=2`);
        // }
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // setPosts(data.posts || []);
        console.log("d", data);
        setresultData(data);
        // mStore.setTableData(data.resp);
        console.log("m");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    searchResults();
  }, [inputTxt]);
  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className="text-3xl font-semibold text-center mt-16">Cities</h1>
      <div className="max-w-md mx-auto flex flex-row justify-center">
        <div className="absolute">
          <div className="flex flex-col justify-center items-center w-full">
            <Button size={"icon"} className="absolute top-0 right-0 m-1 rounded-full shadow-lg"> <Icon fontSize={20} icon="flowbite:search-solid" style={{}} /></Button>
            <input type="search"  value={inputTxt} name="search" id="" onChange={(e) => { setinputTxt(e.target.value); }} className="w-60 p-3 rounded-full outline-2 peer outline-gray-400 shadow-xl text-md" placeholder="Enter city name..." />
            <ul className="pt-1 peer-focus:visible invisible">
              {/* <li className="bg-gray-200 text-sm w-60 px-2 py-1 border-b-2 border-gray-300 hover:bg-blue-50 rounded-t-lg">1</li> */}
              {resultData.filter(onlyUnique).slice(0, 5).map((item, index) => {
                return (
                  <li onMouseDown={() => {setinputTxt(`${item}`);}} key={index} className={`cursor-pointer bg-gray-200 text-sm w-60 px-2 py-1 border-b-2 border-gray-300 hover:bg-blue-50 ${index == 0 ? "rounded-t-lg" : index >= 4 ? "rounded-b-lg" : ""}`}>{item}</li>
                );
              })}
              {/* <li className="bg-gray-200 text-sm w-60 px-2 py-1 border-b-2 border-gray-300 hover:bg-blue-50  rounded-b-lg">3</li> */}
            </ul>
          </div>
        </div>
      </div>
      <p>Count is {mStore.count}</p>
      <p>Count is {mStore.tableData.length}</p>
      <Button onClick={() => mStore.incrementBy(5)}>Increment</Button>
    </div>
  );
});

export default Home;