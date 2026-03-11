import SelectRole from "./steps/selectRole";
import SkillLevel from "./steps/SkillLevel";
import RoleDetails from "./steps/RoleDetails";
import ReviewSubmit from "./steps/ReviewSubmit";
import Challenge from "./steps/Challenge";
import ChallengeEditor from "./steps/ChallengeEditor";

const StepContent = ({ step }: { step: number }) => {
  const steps = [
    <SelectRole />,
    <SkillLevel />,
    <RoleDetails />,
    <Challenge />,
    <ChallengeEditor />,
    <ReviewSubmit />,
  ];

  return steps[step - 1];
};

export default StepContent;
