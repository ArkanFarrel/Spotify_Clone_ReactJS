import React, { useState, useEffect } from "react";
import PlayBox from "components/PlayBox";
// import ArtistBox from 'components/ArtistBox';

import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";
import Song from "components/Song";

export default function Home() {
  const [jam, setJam] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 12) {
      setJam("Good Morning");
    } else if (hour >= 12 && hour < 15) {
      setJam("Good Afternoon");
    } else if (hour >= 15 && hour < 19) {
      setJam("Good Evening");
    } else {
      setJam("Good Night");
    }
  }, []);

  const items = [
    {
      id: 1,
      title: "Patience",
      artist: "Take That",
      image: "https://i.scdn.co/image/790543f8f020742180fb128f596948dde173bbc2",
      src: "https://freesound.org/data/previews/617/617382_7037-lq.mp3",
    },
    {
      id: 2,
      title: "Photograph",
      artist: "Ed Sheeran",
      image:
        "https://image.iheart.com/ihr-ingestion-pipeline-production-wmg/new_release/20170311061110968/825646974450/resources/825646974450.jpg",
      src: "https://archive.org/details/taylor-swift-style",
    },
    {
      id: 3,
      title: "Style (Taylor Version)",
      artist: "Taylor Swift",
      image:
        "https://www.designscene.net/wp-content/uploads/2023/08/1989-TAYLORS-VERSION-album-artwork.jpg",
      src: "https://archive.org/details/taylor-swift-style",
    },

    {
      id: 4,
      title: "Anything Goes",
      artist: "Maki Oguro",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music/ea/46/25/mzi.xrmoocpi.jpg/400x400cc.jpg",
      src: "https://freesound.org/data/previews/617/617305_11861866-lq.mp3",
    },

    {
      id: 5,
      title: "Bunga Hati",
      artist: "Salma Salsabil",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/2f/5c/d52f5cc5-65a9-9ba0-1c48-1ca5ed671359/23UM1IM21038.rgb.jpg/1200x1200bf-60.jpg",
      src: "file:///C:/Users/USER/Documents/Salma%20Salsabil%20-%20Bunga%20Hati%20(Official%20Music%20Video).mp3",
    },
  ];

  const items1 = [
    {
      id: 1,
      title: "Emotional Control",
      artist: "Feb 9 • 21 Min",
      image: "https://i.scdn.co/image/228acd9108368347547c88c2509acaef222ae875",
      src: "https://freesound.org/data/previews/617/617382_7037-lq.mp3",
    },
    {
      id: 2,
      title: "Ada Hantu Di Sekolah",
      artist: "May 2023 • 27 Min",
      image:
        "https://i.scdn.co/image/ab6765630000ba8a79af094973790edd2120cba2",
      src: "https://archive.org/details/taylor-swift-style",
    },
    {
      id: 3,
      title: "AGAK LAEN!",
      artist: "Agak Laen",
      image:
        "https://i.scdn.co/image/ab6765630000ba8acf0db18c6d7c131611638c7b",
      src: "https://archive.org/details/taylor-swift-style",
    },

    {
      id: 4,
      title: "Ada Hantu Di Sekolah",
      artist: "Spotify Studios & Kukila",
      image:
        "https://i.scdn.co/image/ab6765630000ba8ad2a225e310e0b0634794a243",
      src: "https://freesound.org/data/previews/617/617305_11861866-lq.mp3",
    },

    {
      id: 5,
      title: "Podcast Raditya Dika",
      artist: "Raditya Dika",
      image:
        "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1612031/1612031-1662955092489-96d193e76ce29.jpg",
      src: "file:///C:/Users/USER/Documents/Salma%20Salsabil%20-%20Bunga%20Hati%20(Official%20Music%20Video).mp3",
    },
  ];

  const items2 = [
    {
      id: 1,
      title: "New Music Every Friday",
      artist: "Every Friday",
      image: "https://i.scdn.co/image/ab67706f0000000327eea0e87cbb31abf1083998",
      src: "https://freesound.org/data/previews/617/617382_7037-lq.mp3",
    },
    {
      id: 2,
      title: "Fresh Finds Indonesia",
      artist: "Temukan Beragam Music",
      image:
        "https://newsupdatetimes.com/wp-content/uploads/2021/08/Fresh-figy.jpg",
      src: "https://archive.org/details/taylor-swift-style",
    },
    {
      id: 3,
      title: "Puncak Klasemen",
      artist: "Deretan Music Indonesia",
      image:
        "https://i.scdn.co/image/ab67706f0000000360fcce74e4c18dfe3fc18689",
      src: "https://archive.org/details/taylor-swift-style",
    },

    {
      id: 4,
      title: "Naik Daun",
      artist: "Lagu Lagu Terkini",
      image:
        "https://i.scdn.co/image/ab67706f0000000223f6cdd82cb194034046628a",
      src: "https://freesound.org/data/previews/617/617305_11861866-lq.mp3",
    },

    {
      id: 5,
      title: "Barisan Depan",
      artist: "Kumpulan Lagu",
      image:
        "https://i.scdn.co/image/ab67706f000000022e0bf290806818caea74fff1",
      src: "file:///C:/Users/USER/Documents/Salma%20Salsabil%20-%20Bunga%20Hati%20(Official%20Music%20Video).mp3",
    },
  ];



  const singer = [
    {
      id: 1,
      position: "Style",
      name: "Taylor Swift",
      image:
        "https://www.designscene.net/wp-content/uploads/2023/08/1989-TAYLORS-VERSION-album-artwork.jpg",
    },
    {
      id: 2,
      position: "Daylight",
      name: "Maroon 5",
      image:
        "https://4.bp.blogspot.com/-iNvxOC3-7SU/UV1zLCNxsjI/AAAAAAAAAJ0/MLTqqWG4zKA/s1600/maroon-5.jpg",
    },
    {
      id: 3,
      position: "Firework",
      name: "Katy Perry",
      image: "https://i.scdn.co/image/ab67616d0000b273937af329667311f4b2831616",
    },
    {
      id: 4,
      position: "Kimi Dake Wo Mamoritai",
      name: "Takeshi Tsuruno",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.9V5uJebTj90NXtc2dQb7fwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      position: "Happier",
      name: "Ed Sheeran",
      image:
        "https://images.genius.com/0542fc5575e15a897aa45f0293f93d8a.1000x1000x1.jpg",
    },
  ];

  const mixer = [
    {
      id: 1,
      position: "Coldplay, Ed Sheeran",
      name: "Daily Mix 1",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default",
    },
    {
      id: 2,
      position: "Bruno Mars, Rachel Manroe, Taylor Swift",
      name: "Daily Mix 2",
      image:
        "https://dailymix-images.scdn.co/v2/img/aa32d6d4ca2467974403518dd3ebfe8831c5ced1/2/en/large",
    },
    {
      id: 3,
      position: "Bruno Mars, Rachel Manroe, Taylor Swift",
      name: "Daily Mix 5",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2e83342b0f36ba888c77be62/5/tr/default",
    },
    {
      id: 4,
      position: "Bruno Mars, Rachel Manroe, Taylor Swift",
      name: "Daily Mix 6",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcfc63410e20f29a28a05c37c/6/tr/default",
    },
    {
      id: 5,
      position: "Bruno Mars, Rachel Manroe, Taylor Swift",
      name: "Daily Mix 1",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="text-3xl text-white font-bold tracking-tight mb-6">
          {jam}
        </h3>
        <div className="grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all">
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
              alt=""
            />
            <h4 className="text-[16px] font-bold p-4">Liked Songs</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://yt3.googleusercontent.com/8qtIZWBT0qQ9T66fVWei9Pe1sKA_cKjBjuT1TzOr3Ns2MTr3s4uVKWtOuKkrQASRrQ0ph7pm=s176-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <h4 className="text-[16px] font-bold p-4">Rachel Manroe</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://www.designscene.net/wp-content/uploads/2023/08/1989-TAYLORS-VERSION-album-artwork.jpg"
              alt=""
            />
            <h4 className="text-[16px] font-bold p-4">Taylor Swift</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://i.scdn.co/image/ab6761610000e5ebf8349dfb619a7f842242de77"
              alt=""
            />
            <h4 className="text-[16px] font-bold p-4">Maroon 5</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb93401d3b2f26a99277bbcda0/1/en/large"
              alt=""
            />
            <h4 className="text-[16px] font-bold p-4">Daily Mix 1</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27365a248c766e18522893d44c5/2/tr/default"
              alt=""
            />
            <h4 className="text-[16px] font-bold p-4">Daily Mix 2</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>
        </div>
      </div>



    {/* Recently played */}
      <div style={{fontFamily:"sans-serif"}}  className="flex justify-between items-end mb-4">
        <PlayBox title={"Recently Played"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <Song item={item} key={item.id} />
        ))}
      </div>



{/* Your Favorite Artisz */}

      <div style={{fontFamily:"sans-serif"}}  className="flex justify-between items-end mb-4 mt-6">
        <PlayBox title={"Your Favorite Artist"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6 mb-8">
        {singer.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            className={
              "bg-footer rounded p-4 transition-all hover:bg-menubg group"
            }
          >
            <div className="relative ">
              <img
                className="w-auto h-auto inset-0 object-cover mb-4 rounded-full"
                src={item.image}
                alt=""
              />
              <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                <Icon name="play" />
              </button>
            </div>
            <span className="font-semibold text-white text-[16px] whitespace-nowrap">
              {item.name}
            </span>{" "}
            <br />
            <span className="mt-1 text-[14px] text-link">{item.position}</span>
          </NavLink>
        ))}
      </div>

            {/* Episode For You */}

            <div style={{fontFamily:"sans-serif"}} className="flex justify-between items-end mb-4">
        <PlayBox title={"Episode For You"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        {items1.map((item) => (
          <Song item={item} key={item.id} />
        ))}
      </div>


      {/* Telah Diperbarui */}
            <div style={{marginTop:"25px", fontFamily:"sans-serif"}} className="flex justify-between items-end mb-4">
        <PlayBox  title={"Telah Di Perbarui"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        {items2.map((item) => (
          <Song item={item} key={item.id} />
        ))}
      </div>

 





      <div className="flex justify-between items-end mb-4 mt-6">
        <PlayBox title={"Your Top Mixed"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6 mb-8">
        {mixer.map((item) => (
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
              {item.name}
            </span>{" "}
            <br />
            <span className="mt-1 text-[14px] text-link">{item.position}</span>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-between items-end mb-4 mt-6">
        <PlayBox title={"Your Favorite Artist"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6 mb-8">
        {singer.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            className={
              "bg-footer rounded p-4 transition-all hover:bg-menubg group"
            }
          >
            <div className="relative ">
              <img
                className="w-auto h-auto inset-0 object-cover mb-4 rounded-full"
                src={item.image}
                alt=""
              />
              <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                <Icon name="play" />
              </button>
            </div>
            <span className="font-semibold text-white text-[16px] whitespace-nowrap">
              {item.name}
            </span>{" "}
            <br />
            <span className="mt-1 text-[14px] text-link">{item.position}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
