import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  personalDetails: z.object({
    name: z.string().min(3, "Name is required"),
    summary: z.string().min(10, "Summary is too short"),
    workProfile: z.string().min(5, "Work profile is too short"),
    address: z.string().min(10, "Address is required"),
    phone: z.string().min(10, "Phone number is required"),
    email: z.string().email("Invalid email address").min(5, "Email is required"),
  }),
  technicalSkills: z.string().min(5, "Technical skills are required"),
  education: z.string().min(5, "Education is required"),
  projects: z.string().min(5, "Projects are required"),
  workExperience: z.string().min(5, "Work experience is required"),
  awardsAchievements: z.string().min(5, "Awards/achievements are required"),
});

export default function Resume() {
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
      technicalSkills: "",
      education: "",
      projects: "",
      workExperience: "",
      awardsAchievements: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="px-3 pt-5 dark:bg-gray-900 grid lg:grid-cols-2">
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

            <FormComponent
              className="mt-6"
              label="Technical Skills"
              name="technicalSkills"
              control={form.control}
              placeholder={"Separate skills by comma"}
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

            <FormComponent
              className="mt-6"
              label="Awards and Achievements"
              name="awardsAchievements"
              control={form.control}
              placeholder={"Use comma to separate Achievement"}
            />

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
      <FormLabel className="text-xl font-bold dark:text-white">{label}</FormLabel>
      <hr />
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
