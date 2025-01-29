import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ProjectDetailsProps = {
  value: string;
  onChange: any;
  control: any;
};

export const ProjectDetails = ({ control, value, onChange }: ProjectDetailsProps) => {
  return (
    <div>
      <div className="mt-6">
        <FormLabel className="text-md md:text-xl font-bold dark:text-white">Projects</FormLabel>
        <hr />
      </div>

      <div className="grid grid-cols-2 items-center space-x-2">
        <FormField
          control={control}
          name="projects.project"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormControl>
                
                  <Input
                    placeholder="Add Projects"
                    {...field}
                    className="shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                  />
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Input value={value} placeholder="Add Link..." onChange={onChange} className="mt-6 w-30" />
      </div>

      <FormField
        control={control}
        name="projects.description"
        render={({ field }) => (
          <FormItem className={`mt-2`}>
            <FormControl>
              <Textarea
                placeholder="Description"
                {...field}
                className={`shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500`}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};
