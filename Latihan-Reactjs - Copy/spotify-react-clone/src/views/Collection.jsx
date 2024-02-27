import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";

export default function Collection() {
  const items = [
    {
      id: 1,
      title: "Photograph",
      artist: "Ed Sheeran",
      image:
        "https://image.iheart.com/ihr-ingestion-pipeline-production-wmg/new_release/20170311061110968/825646974450/resources/825646974450.jpg",
    },

    {
      id: 2,
      title: "Bunga Hati",
      artist: "Salma Salsabil",
      image: "https://image.iheart.com/ihr-ingestion-pipeline-production-wmg/new_release/20170311061110968/825646974450/resources/825646974450.jpg",
    },

    {
      id: 3,
      title: "Anything Goes",
      artist: "Maki Oguro",
      image: "https://image.iheart.com/ihr-ingestion-pipeline-production-wmg/new_release/20170311061110968/825646974450/resources/825646974450.jpg",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
        Playlist
      </h3>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-[296px] bg-gradient-to-r from-gra3 to-gra4 rounded p-6 group relative">
          <div className="mt-20">
            <span className="text-sm font-semibold">Taylor Swift</span>{" "}
            <span className="opacity-70"> • Ed </span>
            <span className="text-sm font-semibold">Sheeran</span>{" "}
            <span className="opacity-70"> • Rachel </span>
            <span className="text-sm font-semibold">Manroe</span>{" "}
            <span className="opacity-70"> • Selena Gomez </span>
            <span className="text-sm font-semibold">Katy Perry</span>{" "}
            <span className="opacity-70"> • Charlie Puth </span>
            <span className="text-sm font-semibold">Bruno Mars</span>{" "}
            <span className="opacity-70"> • Coldplay </span>
            <span className="text-sm font-semibold">David Guetta</span>{" "}
            <span className="opacity-70"> • Zara Larsson </span>
            <span className="text-sm font-semibold">Maroon 5</span>{" "}
            <span className="opacity-70"> • Salma Salsabil </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6">Liked Songs</h3>
            <p>204 Liked Songs</p>
          </div>
          <button className="w-12 h-12 bg-primary absolute right-4 bottom-4 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
            <Icon name="play" />
          </button>
        </div>

        <div className="grid">
          <div className="flex gap-x-4">
              {items.map((item) => (
                <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
           
            ))}
          </div>
        </div>
        <div  className="grid">
          <div style={{marginTop:"10px"}} className="flex gap-x-4">
              {items.map((item) => (
                <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
           
            ))}
          </div>
        </div>
        <div  className="grid">
          <div style={{marginTop:"10px"}} className="flex gap-x-4">
              {items.map((item) => (
                <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
           
            ))}
          </div>
        </div>
        <div className="grid">
          <div style={{marginTop:"10px"}} className="flex gap-x-4">
              {items.map((item) => (
                <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
           
            ))}
          </div>
        </div>
        <div className="grid">
          <div style={{marginTop:"10px"}} className="flex gap-x-4">
              {items.map((item) => (
                <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
           
            ))}
          </div>
        </div>
        <div className="grid">
          <div style={{marginTop:"10px"}} className="flex gap-x-4">
              {items.map((item) => (
                <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
           
            ))}
          </div>
        </div>
        <div className="grid">
          <div style={{marginTop:"10px"}} className="flex gap-x-4">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                    alt=""
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
