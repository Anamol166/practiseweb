import React, { useState, useEffect } from "react";

const Note = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("data"));

        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    const formhandler = (e) => {
        e.preventDefault();

        if (title.length === 0 && details.length === 0) {
            return;
        }

        const newTask = {
            title,
            details
        };

        const updatedTasks = [...tasks, newTask];

        setTasks(updatedTasks);

        localStorage.setItem("data", JSON.stringify(updatedTasks));

        setTitle('');
        setDetails('');
    };

    return (
        <>
            <div className="flex h-screen w-screen bg-gray-800 text-white overflow-hidden">

                <form
                    className="w-[30%] h-full flex flex-col p-10 gap-6 border-r border-gray-800 bg-gray-900/70 backdrop-blur-xl"
                    onSubmit={formhandler}
                >

                    <div>
                        <h1 className="text-5xl font-bold mb-2 text-blue-400">
                            Notes
                        </h1>

                        <p className="text-gray-400 text-lg">
                            Write your thoughts and ideas.
                        </p>
                    </div>

                    <input
                        className="text-2xl border border-gray-700 bg-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 transition-all"
                        type="text"
                        placeholder="Heading..."
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <textarea
                        className="text-xl border border-gray-700 bg-gray-800 p-4 rounded-2xl h-72 resize-none outline-none focus:border-blue-500 transition-all"
                        placeholder="Write Details..."
                        value={details}
                        onChange={(e) => {
                            setDetails(e.target.value);
                        }}
                    />

                    <button
                        type="submit"
                        className="text-2xl bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all rounded-2xl p-4 font-semibold shadow-lg shadow-blue-500/20"
                    >
                        Add Note
                    </button>

                </form>

                <div className="h-full w-full flex flex-col">

                    <div className="text-4xl font-bold w-full h-24 flex justify-center items-center border-b border-gray-800 bg-gray-900/40 backdrop-blur-xl">
                        Recent Notes
                    </div>

                    <div className="flex flex-wrap gap-8 p-10 overflow-auto">

                        {tasks.map((elem, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-800 border border-gray-700 w-80 min-h-72 rounded-3xl p-6 shadow-xl hover:scale-105 hover:border-blue-500 transition-all duration-300"
                                >

                                    <h1 className="text-3xl font-bold text-blue-400 mb-4">
                                        {elem.title}
                                    </h1>

                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {elem.details}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </>
    );
};

export default Note;