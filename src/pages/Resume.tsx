import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import TechnicalSkills from "@/components/elements/TechnicalSkills";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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
  awardsAchievements: z.string().optional(),
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

            <TechnicalSkills />

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
                    <FormLabel className=" text-md md:text-xl font-bold dark:text-white text-black">
                      Awards and Achievements
                    </FormLabel>
                    <hr />
                    <FormControl>
                      <div>
                        {isOpen && (
                          <Input
                            placeholder="Use comma to separate Achievement"
                            {...field}
                            disabled={isOpen ? false : true}
                            className="mt-5 shadow-lg focus-visible:ring-1 focus-visible:ring-blue-500"
                          />
                        )}
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
