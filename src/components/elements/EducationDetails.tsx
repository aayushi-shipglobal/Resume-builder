import { Input } from "../ui/input";
import { Switch } from "@/components/ui/switch";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type EducationDetailsProps = {
  control: any;
  onClick: any;
  Open1: boolean;
};

export const EducationDetails = ({ control, onClick, Open1 }: EducationDetailsProps) => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <FormLabel className="mt-6 text-md md:text-xl font-bold dark:text-white">Education</FormLabel>
        <Switch className="mt-8 mb-1" onClick={onClick} />
      </div>
      <hr />
      <div className="grid grid-cols-2 items-center space-x-4 justify-center">
        <FormField
          control={control}
          name="education.degree"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormControl>
                {Open1 && (
                  <Input
                    placeholder="Degree"
                    {...field}
                    className="shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="education.school"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormControl>
                {Open1 && (
                  <Input
                    placeholder="School Name"
                    {...field}
                    className="shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="education.year"
        render={({ field }) => (
          <FormItem className="mt-2 w-1/2">
            <FormControl>
              {Open1 && (
                <Input
                  placeholder="Year"
                  {...field}
                  className="shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
