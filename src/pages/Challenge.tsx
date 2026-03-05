import ChallengeCard from "../components/ChallengeCard";

const Challenge = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Challenge Details</h1>
        <div>
          <button>Go Back</button>
          <button className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">
            Use Challenge
          </button>
        </div>
      </div>

      {/* content */}
      <section className="mt-8 grid grid-cols-3">
      <ChallengeCard />

      </section>
    </div>
  );
};

export default Challenge;
