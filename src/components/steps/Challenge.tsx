import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChallengeCard from "../ChallengeCard";

const Challenge = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  const cardIds = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSelect = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleUse = () => {
    if (selectedId !== null) {
      navigate("/shortlists", { state: { selectedChallengeId: selectedId } });
    }
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Challenge Details</h1>

        {/* <div className="">
          <button className="mx-8 pointer-cursor">Go Back</button>
          <button
            onClick={handleUse}
            className={`${selectedId !== null ? "bg-[#FF0046] hover:bg-red-700" : "bg-gray-300"} text-white font-bold py-2 px-6 rounded-lg pointer-cursor`}
          >
            Use Challenge
          </button>
        </div> */}
      </div>

      {/* content */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardIds.map((id) => (
          <ChallengeCard
            key={id}
            id={id}
            isSelected={selectedId === id}
            onSelect={handleSelect}
          />
        ))}
      </section>
    </div>
  );
};

export default Challenge;
