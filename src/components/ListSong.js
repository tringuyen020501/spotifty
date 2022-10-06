import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
   const { DataSongs, handelSetSong } = useContext(Songs);
   const [idSong, setIdSong] = useState(0);
   const handelPlaySong = (idSong) => {
      setIdSong(idSong);
      handelSetSong(idSong);
   };
   
   useEffect(()=> {
        setIdSong(idSong)
   }) 

   return (
      <div className="col-span-2 overflow-y-scroll">
         <table className="table-auto w-full ">
            <thead className="text-white h-12">
               <tr>
                  <th className="w-[10%]">#</th>
                  <th className="text-left">Title</th>
                  <th className="w-[10%]">Author</th>
                  <th className="w-[10%]">
                     <i className="fa fa-download"></i>
                  </th>
               </tr>
            </thead>
            <tbody>
               {DataSongs.map((song, index) => (
                  <tr
                     key={index}
                     className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600  ${
                        idSong === song.id &&
                        "bg-slate-600 text-teal-600 text-teal-400"
                     }`}
                     onClick={() => handelPlaySong(song.id)}
                  >
                     <td className=" text-center">{index + 1}</td>
                     <td>{song.name}</td>
                     <td className=" text-center">{song.author}</td>
                     <td className=" text-center">
                        <a href={song.url}>
                           <i className="fa fa-download"></i>
                        </a>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
