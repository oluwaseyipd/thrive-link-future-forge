
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormContext } from "./forms/FormProvider";

const PreviewEmailButton: React.FC = () => {
  const { openWelcomeEmailPreview } = useFormContext();
  
  return (
    <Button 
      onClick={openWelcomeEmailPreview}
      className="mt-4 bg-thrive-blue hover:bg-thrive-darkBlue"
    >
      Preview Welcome Email
    </Button>
  );
};

export default PreviewEmailButton;
