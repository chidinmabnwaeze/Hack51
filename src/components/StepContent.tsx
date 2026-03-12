import SelectRole from "./steps/SelectRole";
import SkillLevel from "./steps/SkillLevel";
import RoleDetails from "./steps/RoleDetails";
import ReviewSubmit from "./steps/ReviewSubmit";
import Challenge from "./steps/Challenge";
import ChallengeEditor from "./steps/ChallengeEditor";
import RubricEditor from "./steps/RubricEditor";
import RequestPreview from "./steps/RequestPreview";
import Checkout from "./steps/Checkout";

const StepContent = ({ step }: { step: number }) => {
  const steps = [
    <SelectRole />,
    <SkillLevel />,
    <RoleDetails />,
    <Challenge />,
    <ChallengeEditor
      deliverables={[]}
      scenario=""
      title=""
      rules=""
      submission_requirements=""
    />,
    <RubricEditor />,
    <RequestPreview />,
    <Checkout />,
    <ReviewSubmit />,
  ];

  return steps[step - 1];
};

export default StepContent;
