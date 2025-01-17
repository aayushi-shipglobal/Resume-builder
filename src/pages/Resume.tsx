// import { z } from "zod";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormData = {
  personalDetails: {
    name: string;
    summary: string;
    workProfile: string;
    address: string;
    phone: string;
    email: string;
  };
  technicalSkills: {
    skills: string;
  };
  education: string;
  projects: string;
  workExperience: string;
  awardsAchievements: string;
};

export default function Resume() {
  const form = useForm<FormData>({
    defaultValues: {
      personalDetails: {
        name: "",
        summary: "",
        workProfile: "",
        address: "",
        phone: "",
        email: "",
      },
      technicalSkills: { skills: "" },
      education: "",
      projects: "",
      workExperience: "",
      awardsAchievements: "",
    },
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
  };
  return (
    <div className="px-3 pt-5 dark:bg-gray-900">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <FormField
                control={form.control}
                name="personalDetails.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold dark:text-white">Personal Details</FormLabel>
                    <hr />
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="personalDetails.summary"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Summary" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="personalDetails.workProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Work Profile" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="personalDetails.address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="personalDetails.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="personalDetails.email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email id" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormLabel className="text-xl font-bold dark:text-white">Technical Skills</FormLabel>
              <hr />
              <FormField
                control={form.control}
                name="technicalSkills.skills"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Separate skills by comma" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormLabel className="text-xl font-bold dark:text-white">Education</FormLabel>
              <hr />
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Add Education" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormLabel className="text-xl font-bold dark:text-white">Projects</FormLabel>
              <hr />
              <FormField
                control={form.control}
                name="projects"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Add Projects" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormLabel className="text-xl font-bold dark:text-white">Work Experience</FormLabel>
              <hr />
              <FormField
                control={form.control}
                name="workExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Add Experience" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormLabel className="text-xl font-bold dark:text-white">Awards and Achievements</FormLabel>
              <hr />
              <FormField
                control={form.control}
                name="awardsAchievements"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Use comma to separate Achievement" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormMessage />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
