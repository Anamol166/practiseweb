import React, { useEffect, useState } from "react";
import { Images } from 'lucide-react';
import axios from "axios";
/*https://picsum.photos/v2/list?page=2&limit=100*/

const gallery = () => {

    const [index, setIndex] = useState(1)

    const [loading, setloading] = useState(false)

    const [info, setInfo] = useState([])

    const next = () => {
        setIndex(index + 1)
    }

    const prev = () => {
        setIndex(index - 1)
    }
    const GetData = async () => {
        setloading(true)
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
        setInfo(response.data)
        setloading(false)
    }

    useEffect(() => {
        GetData();
    }, [index])

    return (
        <>
            <div className="px-14 pt-5 pb-4 shadow-2xl shadow-gray-300 leading-16 w-full h-full bg-[#f4f7fc]">
                <div className="flex flex-row gap-3 font-medium text-3xl"> <Images size={36} /> Welcome to the Gallery</div>
                <div className="text-2xl opacity-50">This site provide photos.</div>
            </div>
            <div className="flex flex-col h-full w-screen justify-center items-center p-10">
                <div className="flex flex-row gap-2 flex-wrap justify-center">
                    {
                        loading ? (
                            <h1 className="text-4xl flex justify-center items-center"> Loading...</h1>
                        ) : (
                            info.map((elem) => {
                                return (
                                    <div className="bg-white w-120 shadow-2xl shadow-gray-30 h-95 rounded-b-2xl flex flex-col justify-start border-2 border-gray-200 mt-2 hover:bg-gray-200 ">
                                        <img src={elem.download_url} className="w-120 h-80 object-cover"></img>
                                        <div className="flex flex-row justify-between text-2xl p-2">
                                            <h1 className="font-medium ">{elem.author}</h1>
                                            <button className="bg-[#edf2f7] w-15 h-10 rounded-2xl text-center">#{Number(elem.id) + 1}</button>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div >
            <div className="flex flex-row justify-center items-center mb-20">
                <button className={`text-1xl p-2 w-15 h-10 rounded-l-2xl  ${index <= 1 ? "cursor-not-allowed bg-gray-100" : "cursor-pointe hover:bg-gray-400 active:scale-90"}`}
                    onClick={() => {
                        if (index > 1) {
                            prev();
                        }
                    }}>Prev</button>
                <button className="text-1xl bg-[#edf2f7] p-2 w-15 h-10 rounded-r-2xl hover:bg-gray-400 cursor-pointer active:scale-90"
                    onClick={() => {
                        if (index > 0) {
                            next();
                        }
                    }}>Next</button>
            </div>

        </>
    )
}

export default gallery;