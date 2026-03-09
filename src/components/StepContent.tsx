import SelectRole from "./steps/SelectRole";
import SkillLevel from "./steps/SkillLevel";
import ReviewSubmit from "./steps/ReviewSubmit";

const StepContent = ({ step }: { step: number }) => {
  const steps = [<SelectRole />, <SkillLevel />, <ReviewSubmit />];

  return steps[step - 1];
};

export default StepContent;
