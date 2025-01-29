import { FormComponent } from "./FormComponent";

export const PersonalDetailsForm = ({ control }: { control: any }) => {
  return (
    <div className="border border-gray-100 rounded-md p-6 mb-4 bg-white">
      <FormComponent label="Personal Details" name="personalDetails.name" control={control} placeholder={"Your Name"} />
      <FormComponent name="personalDetails.summary" control={control} placeholder={"Your Summary  (optional)"} />

      <FormComponent name="personalDetails.workProfile" control={control} placeholder={"Work Profile  (optional)"} />

      <FormComponent name="personalDetails.address" control={control} placeholder={"Address  (optional)"} />

      <FormComponent name="personalDetails.phone" control={control} placeholder={"Phone number"} />

      <FormComponent name="personalDetails.email" control={control} placeholder={"Email id"} />
    </div>
  );
};
