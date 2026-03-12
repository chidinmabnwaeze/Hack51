type CompletedProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
    // button ?: {
    //     text: string;
    //     onClick: () => void;
    // };
};

const Completion = ({ icon, title, text }: CompletedProps) => {
    return (
        <div className = "bg-overlay ">
        <div className=" bg-white p-8 rounded-xl shadow-md w-full mt-8 md:w-3/4 mx-auto text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-6">{text}</p>
            {/* {button && (
                <button
                    onClick={button.onClick}
                    className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    
                </button>
            )} */}
        </div>
        </div>
    );
};

export default Completion;
