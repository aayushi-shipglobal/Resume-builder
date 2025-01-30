import { Plus } from "lucide-react";
import { Input } from "../ui/input";
import { useFieldArray } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ProjectDetailsProps = {

  control: any;
};

export const ProjectDetails = ({ control }: ProjectDetailsProps) => {
  const { fields, append } = useFieldArray({
    control, 
    name: "projects", 
  });
  const addNewProject = () => {
    append({ project: "", link: "", description: "" }); 
  };

  
  return (
    <div>
      <div className="mt-6">
        <FormLabel className="text-md md:text-xl font-bold dark:text-white">Projects</FormLabel>
        <hr />
      </div>
      {fields.map((project, index) => (
        <div key={project.id} className="mb-4">
          <div className="grid grid-cols-2 items-center space-x-2">
            <FormField
              control={control}
              name={`projects[${index}].project`}
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

            <FormField
              control={control}
              name={`projects[${index}].link`}
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormControl>
                    <Input
                      placeholder="Add Link..."
                      
                      {...field}
                      className="shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name={`projects[${index}].description`}
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
      ))}

      <div
        className="text-sm underline text-teal-700 font-bold mt-3 flex items-center cursor-pointer"
        onClick={addNewProject}
      >
        <Plus className="size-4" />
        Add Projects
      </div>
    </div>
  );
};
