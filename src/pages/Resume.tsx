import { z } from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { Plus, X, Mail, Phone, MapPin } from "lucide-react";
import { addSkill, deleteSkill, Skill } from "../reducer/action";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const skillSuggestions = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Python",
  "Java",
  "Go",
  "Docker",
  "AWS",
  "Git",
  "SQL",
  "GraphQL",
  "Redux",
  "Jest",
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
  category: z.string().optional(),

  technicalSkills: z.string().min(1, "At least one skill is required"),
  education: z.object({
    school: z.string().min(5, "School Name is required"),
    year: z
      .string()
      .min(4, "Year is required")
      .regex(/^\d{4}$/, "Invalid Year format"),
  }),
  projects: z.string().min(5, "Projects are required"),
  workExperience: z.object({
    companyName: z.string().min(5, "Company Name is required"),
    year: z
      .string()
      .min(4, "Year is required")
      .regex(/^\d{4}$/, "Invalid Year format"),
    designation: z.string().min(3, "Designation is required"),
  }),
  awardsAchievements: z.string().optional(),
});

export default function Resume() {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const skills = useSelector((state: any) => state.tasks.tasks);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [inputSkill, setInputSkill] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(skillSuggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSkill(value);

    if (value.length > 0) {
      setFilteredSuggestions(skillSuggestions.filter((skill) => skill.toLowerCase().includes(value.toLowerCase())));
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(skillSuggestions);
    }
  };

  const handleFocus = () => {
    setShowSuggestions(!showSuggestions);
    setFilteredSuggestions(skillSuggestions);
  };

  const handleAddSkill = () => {
    if (inputSkill.trim() !== "") {
      dispatch(addSkill(inputSkill));
      setInputSkill("");
    }
  };

  const handleDeleteSkill = (skillId: number) => {
    dispatch(deleteSkill(skillId));
  };

  const handleSelectSuggestion = (suggestion: string) => {
    dispatch(addSkill(suggestion));
    setShowSuggestions(!showSuggestions);
    setInputSkill("");
    setFilteredSuggestions([]);
  };

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
      education: {
        school: "",
        year: "",
      },
      projects: "",
      workExperience: {
        companyName: "",
        year: "",
        designation: "",
      },
      awardsAchievements: "",
    },
  });

  const { watch } = form;

  const name = watch("personalDetails.name");
  const summary = watch("personalDetails.summary");
  const workProfile = watch("personalDetails.workProfile");
  const address = watch("personalDetails.address");
  const phone = watch("personalDetails.phone");
  const email = watch("personalDetails.email");
  // const technicalSkills = watch("technicalSkills");
  const school = watch("education.school");
  const year = watch("education.year");
  const projects = watch("projects");
  const companyName = watch("workExperience.companyName");
  const yearWork = watch("workExperience.year");
  const designation = watch("workExperience.designation");
  const awardsAchievements = watch("awardsAchievements");

  useEffect(() => {
    console.log("Form Values Updated:");
    console.log({
      name,
      summary,
      workProfile,
      address,
      phone,
      email,
      // technicalSkills,
      school,
      year,
      projects,
      companyName,
      yearWork,
      designation,
      awardsAchievements,
    });
  }, [
    name,
    summary,
    workProfile,
    address,
    phone,
    email,
    // technicalSkills,
    school,
    year,
    projects,
    companyName,
    yearWork,
    designation,
    awardsAchievements,
  ]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="px-8 py-5 dark:bg-gray-900 grid lg:grid-cols-2 space-x-6 bg-teal-700 ">
      <div className="col-span-1 rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <div className="border border-gray-100 rounded-md p-6 bg-white">
              <FormComponent
                label="Personal Details"
                name="personalDetails.name"
                control={form.control}
                placeholder={"Your Name"}
              />
              <FormComponent
                name="personalDetails.summary"
                control={form.control}
                placeholder={"Your Summary  (optional)"}
              />

              <FormComponent
                name="personalDetails.workProfile"
                control={form.control}
                placeholder={"Work Profile  (optional)"}
              />

              <FormComponent
                name="personalDetails.address"
                control={form.control}
                placeholder={"Address  (optional)"}
              />

              <FormComponent name="personalDetails.phone" control={form.control} placeholder={"Phone number"} />

              <FormComponent name="personalDetails.email" control={form.control} placeholder={"Email id"} />
            </div>

            <div className="border border-gray-100 rounded-md p-6 bg-white">
              <div>
                <div className="cursor-pointer">
                  <FormLabel className=" text-md md:text-xl font-bold dark:text-white">Technical Skills</FormLabel>
                  <hr />
                  <div className="">
                    <input
                      value={inputSkill}
                      onChange={handleInputChange}
                      onClick={handleFocus}
                      placeholder="Add Skills ..."
                      className={`flex h-9 w-full rounded-md border border-input px-3 py-1 text-base shadow-sm  focus-visible:outline-none focus-visible:ring-blue-500  md:text-sm mt-5  focus-visible:ring-1 `}
                    />

                    <div className="flex justify-end">
                      <Plus onClick={handleAddSkill} className="pt-5 size-9 -ml-9 font-bold -my-12" type="button" />
                    </div>
                  </div>
                </div>

                {filteredSuggestions.length > 0 && showSuggestions && (
                  <ul className="mt-1 w-full bg-white border border-gray-300 rounded-md shadow-sm max-h-60 overflow-y-auto z-10">
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectSuggestion(suggestion)}
                        className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="flex flex-row gap-x-2 cursor-pointer">
                  {skills.map((skill: Skill) => (
                    <li
                      key={skill.id}
                      className="inline-flex gap-x-1 items-center justify-center text-sm px-1 pb-0.5 text-white bg-teal-500 rounded-3xl text-center mt-2 max-w-max"
                    >
                      <span className="pl-2">{skill.text}</span>
                      <X className="size-4 pt-0.5" onClick={() => handleDeleteSkill(skill.id)} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <div className="grid grid-cols-12">
                  <FormLabel className="col-span-11 mt-6 text-md md:text-xl font-bold dark:text-white">
                    Education
                  </FormLabel>
                  <Switch className="mt-8 col-span-1 mb-1" onClick={() => handleToggle1()} />
                </div>
                <hr />
                <div className="grid grid-cols-2 items-center space-x-4 justify-center">
                  <FormField
                    control={form.control}
                    name="education.school"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormControl>
                          {isOpen1 && (
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

                  <FormField
                    control={form.control}
                    name="education.year"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormControl>
                          {isOpen1 && (
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
              </div>

              <FormComponent
                className="mt-6"
                label="Projects"
                name="projects"
                control={form.control}
                placeholder={"Add Projects"}
              />

              <div className="mt-5">
                <div className="grid grid-cols-12">
                  <FormLabel className="col-span-11 mt-6 text-md md:text-xl font-bold dark:text-white">
                    Work Experience
                  </FormLabel>
                  <Switch className="mt-8 col-span-1 mb-1" onClick={() => handleToggle2()} />
                </div>

                <hr />
                <div className="grid grid-cols-2 items-center space-x-4 justify-center">
                  <FormField
                    control={form.control}
                    name="workExperience.companyName"
                    render={({ field }) => (
                      <FormItem className={`mt-6`}>
                        <FormControl>
                          {isOpen2 && (
                            <span className="flex items-center gap-1">
                              <Input
                                placeholder="Company Name"
                                {...field}
                                className={`shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500`}
                              />
                            </span>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="workExperience.year"
                    render={({ field }) => (
                      <FormItem className={`mt-6`}>
                        <FormControl>
                          {isOpen2 && (
                            <span className="flex items-center gap-1">
                              <Input
                                placeholder="Year"
                                {...field}
                                className={`shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500`}
                              />
                            </span>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 items-center space-x-4 justify-center">
                  <FormField
                    control={form.control}
                    name="workExperience.designation"
                    render={({ field }) => (
                      <FormItem className={`mt-6`}>
                        <FormControl>
                          {isOpen2 && (
                            <span className="flex items-center gap-1">
                              <Input
                                placeholder="Designation"
                                {...field}
                                className={`shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500`}
                              />
                            </span>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

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
                              className="mt-5 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
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
              <Button type="submit" className="mt-2 bg-teal-600 text-white">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="bg-white border border-gray-100 rounded-md w-full max-h-max py-6">
        <p className="font-bold text-3xl text-center mb-2"> {name && name.length > 0 ? name : "Your Name"} </p>
        <div className="flex space-x-4 items-center justify-center text-gray-500 text-sm mb-2">
          <p className="flex items-center gap-1">
            {address && address.length > 0 ? <MapPin className="size-4" /> : ""}
            {address && address.length > 0 ? address : ""}
          </p>
          <p className="flex items-center gap-1">
            <Mail className="size-4" />
            {email && email.length > 0 ? email : "Email Address"}
          </p>
          <p className="flex items-center gap-1">
            <Phone className="size-4" />
            {phone && phone.length > 0 ? phone : "Phone Number"}
          </p>
        </div>
        <div className="text-center font-bold text-lg my-1">
        {workProfile && workProfile.length > 0 ? workProfile : "Work Profile"}
        </div>
        <div>
          <div className="font-bold text-lg pl-9 p-2 bg-custom-gray ">Technical Skills</div>
          <ul className="m-6 cursor-pointer list-disc">
            {skills.map((skill: Skill) => (
              <li key={skill.id}>
                <span className="pl-2">{skill.text}</span>
              </li>
            ))}
          </ul>
          </div>
          
        <div>
          <div className="font-bold text-lg pl-9 p-2 bg-custom-gray ">Projects</div>
          <p className="pl-6">{projects && projects.length > 0 ? projects : "Project Title"}</p>
        </div>

       
        {isOpen1 && (
          <div>
            <div className="font-bold text-lg pl-9 p-2 bg-custom-gray ">Education</div>
            <div className="flex justify-between py-6">
              <p className="pl-6 py-1">{school && school.length > 0 ? school : "Education Title"}</p>
              <p className="px-6 py-1">{year && year.length > 0 ? year : ""}</p>
            </div>
          </div>
        )}
        {isOpen2 && (
          <div>
            <div className="font-bold text-lg pl-9 p-2 bg-custom-gray ">Work Experience</div>
            <div className="flex justify-between pt-6">
              <p className="pl-6">{companyName && companyName.length > 0 ? companyName : "Work Experience"}</p>
              <p className="px-6">{yearWork && yearWork.length > 0 ? yearWork : ""}</p>
            </div>{" "}
            <p className="pl-6">{designation && designation.length > 0 ? designation : ""}</p>
          </div>
        )}
      </div>
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
                className={`mt-5 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500`}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
