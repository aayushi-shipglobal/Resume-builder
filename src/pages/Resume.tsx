import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const OPTIONS: Option[] = [
  { label: "nextjs", value: "Nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "Ember", value: "ember" },
  { label: "Gatsby", value: "gatsby" },
  { label: "Astro", value: "astro" },
];
const formSchema = z.object({
  personalDetails: z.object({
    name: z.string().min(3, "Name is required"),
    summary: z.string().optional(),
    workProfile: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().min(10, "Phone number is required"),
    email: z.string().email("Invalid email address").min(5, "Email is required"),
  }),
  technicalSkills: z.array(z.object({ label: z.string(), value: z.string() })).min(1, "At least one skill is required"),
  education: z.string().min(5, "Education is required"),
  projects: z.string().min(5, "Projects are required"),
  workExperience: z.string().min(5, "Work experience is required"),
  awardsAchievements: z.string().min(5, "Awards/achievements are required"),
});

export default function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personalDetails: {
        name: "",
        summary: "",
        workProfile: "",
        address: "",
        phone: "",
        email: "",
      },
      technicalSkills: [],
      education: "",
      projects: "",
      workExperience: "",
      awardsAchievements: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-8 pt-5 dark:bg-gray-900 grid lg:grid-cols-2">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <FormComponent
                label="Personal Details"
                name="personalDetails.name"
                control={form.control}
                placeholder={"Your Name"}
              />
              <FormComponent name="personalDetails.summary" control={form.control} placeholder={"Your Summary"} />

              <FormComponent name="personalDetails.workProfile" control={form.control} placeholder={"Work Profile"} />

              <FormComponent name="personalDetails.address" control={form.control} placeholder={"Address"} />

              <FormComponent name="personalDetails.phone" control={form.control} placeholder={"Phone number"} />

              <FormComponent name="personalDetails.email" control={form.control} placeholder={"Email id"} />
            </div>

            <FormField
              control={form.control}
              name="technicalSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black text-xl font-bold dark:text-white">Technical Skills</FormLabel>
                  <hr />
                  <FormControl>
                    <MultipleSelector
                      placeholder={field.value.length === 0 ? "Select skills..." : "..."}
                      value={field.value || []}
                      onChange={(newValue) => field.onChange(newValue)}
                      defaultOptions={OPTIONS}
                      className="mt-5 shadow-lg focus-visible:ring-1 focus-visible:ring-blue-500"
                      emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                          no results found.
                        </p>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormComponent
              className="mt-6"
              label="Education"
              name="education"
              control={form.control}
              placeholder={"Add Education"}
            />

            <FormComponent
              className="mt-6"
              label="Projects"
              name="projects"
              control={form.control}
              placeholder={"Add Projects"}
            />

            <FormComponent
              className="mt-6"
              label="Work Experience"
              name="workExperience"
              control={form.control}
              placeholder={"Add Experience"}
            />
            <div className="grid grid-cols-12 space-x-4 items-start justify-end ">
              <FormField
                control={form.control}
                name="awardsAchievements"
                render={({ field }) => (
                  <FormItem className={`mt-6 col-span-11`}>
                    <FormLabel className=" text-md md:text-xl font-bold dark:text-white">
                      Awards and Achievements
                    </FormLabel>
                    <hr />
                    <FormControl>
                      <div>
                        <Input
                          placeholder="Use comma to separate Achievement"
                          {...field}
                          disabled={isOpen ? true : false}
                          className="mt-5 shadow-lg focus-visible:ring-1 focus-visible:ring-blue-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Switch className="mt-8 col-span-1" onClick={() => handleToggle()} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div></div>
    </div>
  );
}

type FormComponentProps = {
  label?: string;
  name: string;
  placeholder: string;
  className?: string;
  control: any;
};

const FormComponent = ({ className, label, name, placeholder, control }: FormComponentProps) => {
  return (
    <div className={className}>
      <FormLabel className=" text-md md:text-xl font-bold dark:text-white">{label}</FormLabel>
      {label && <hr />}
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className={`mt-5 shadow-lg focus-visible:ring-1 focus-visible:ring-blue-500`}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
