import { z } from "zod";
import { Link } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import { ResumeComponent } from "@/components/elements/ResumeComponent";
import { PersonalDetailsForm } from "@/components/elements/PersonalDetailsForm";
import { ProjectDetails } from "@/components/elements/ProjectDetails";

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
    degree: z.string(),
  }),
  projects: z.object({
    project: z.string().min(5, "Projects are required"),
    description: z.string(),
  }),
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
  const [link, setLink] = useState("");
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

  const handleLinkChange = (e: any) => {
    setLink(e.target.value);
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
        degree: "",
      },
      projects: {
        project: "",
        description: "",
      },
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
  const school = watch("education.school");
  const year = watch("education.year");
  const degree = watch("education.degree");
  const project = watch("projects.project");
  const description = watch("projects.description");
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
      school,
      year,
      degree,
      project,
      description,
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
    school,
    year,
    degree,
    project,
    description,
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
    <div className="m-0 px-8 py-5 dark:bg-gray-900 flex flex-col lg:flex lg:flex-row space-x-10 bg-teal-700 max-h-min overflow-clip relative bottom-0">
      <div className="rounded-md w-2/5 h-600 overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="">
              <PersonalDetailsForm control={form.control} />

              <div className="border border-gray-100 rounded-md p-6 bg-white">
                <div>
                  <div className="cursor-pointer">
                    <FormLabel className=" text-md md:text-xl font-bold dark:text-white">Technical Skills</FormLabel>
                    <hr />
                    <div>
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

                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <FormLabel className="mt-6 text-md md:text-xl font-bold dark:text-white">Education</FormLabel>
                    <Switch className="mt-8 mb-1" onClick={() => handleToggle1()} />
                  </div>
                  <hr />
                  <div className="grid grid-cols-2 items-center space-x-4 justify-center">
                    <FormField
                      control={form.control}
                      name="education.degree"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormControl>
                            {isOpen1 && (
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
                  </div>
                  <FormField
                    control={form.control}
                    name="education.year"
                    render={({ field }) => (
                      <FormItem className="mt-2 w-1/2">
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
                <ProjectDetails control={form.control} value={link} onChange={handleLinkChange} Open={isOpen1} />
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-md md:text-xl font-bold dark:text-white text-black">
                      Work Experience
                    </FormLabel>
                    <Switch className="mt-8 mb-1" onClick={() => handleToggle2()} />
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
                  <FormField
                    control={form.control}
                    name="workExperience.designation"
                    render={({ field }) => (
                      <FormItem className={`mt-2`}>
                        <FormControl>
                          {isOpen2 && (
                            <span className="flex items-center gap-1">
                              <Input
                                placeholder="Designation"
                                {...field}
                                className={`w-1/2 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500`}
                              />
                            </span>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <FormLabel className="mt-6 text-md md:text-xl font-bold dark:text-white">
                      Awards and Achievements
                    </FormLabel>
                    <Switch className="mt-8 mb-1" onClick={() => handleToggle()} />
                  </div>
                  <hr />
                  <div className="flex space-x-0 items-start justify-between ">
                    <FormField
                      control={form.control}
                      name="awardsAchievements"
                      render={({ field }) => (
                        <FormItem className={` w-full`}>
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
                  </div>
                </div>
                <Button type="submit" className="mt-2 bg-teal-600 text-white">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-3/5 mx-6 bg-white border border-gray-100 rounded-md py-6 shadow-2xl  shadow-black max-h-max">
        <p className="font-bold text-3xl text-center mb-2"> {name && name.length > 0 ? name : "Your Name"} </p>
        <div className="flex space-x-4 items-center justify-center text-gray-500 text-sm mb-2">
          <p className="flex items-center gap-1">
            {address && address.length > 0 && (
              <span className="flex items-center gap-1">
                <MapPin className="size-4" />
                <span>{address}</span>
              </span>
            )}
          </p>

          <ResumeComponent Icon={Mail} title={email} placeholder="Email Address" />
          <ResumeComponent Icon={Phone} title={phone} placeholder="Phone Number" />
        </div>
        <div className="text-center font-bold text-lg my-1">
          {workProfile && workProfile.length > 0 ? workProfile : "Work Profile"}
        </div>
        <div>
          <div className="font-bold text-lg pl-9 px-2 py-1 bg-custom-gray ">Technical Skills</div>
          <ul className="mx-6 my-3 cursor-pointer list-disc text-base">
            {skills.length == 0 && <span className="pl-6">Add your skills here</span>}
            {skills.map((skill: Skill) => (
              <li key={skill.id}>
                <span className="pl-2">{skill.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-bold text-lg pl-9 px-2 py-1 bg-custom-gray ">Projects</div>
          <div className="flex items-center space-x-4">
            <p className="pl-12 mt-2">{project && project.length > 0 ? project : "Project Title"}</p>
            <Link to={link} className="underline text-indigo-800 pt-1">
              Link
            </Link>
          </div>

          <p className="pl-14 text-sm text-gray-600 mb-4">
            {description && description.length > 0 ? description : "Project Description"}
          </p>
        </div>

        {isOpen1 && (
          <div>
            <div className="font-bold text-lg pl-9 px-2 py-1 bg-custom-gray ">Education</div>
            <div className="flex justify-between py-3">
              <div className="flex space-x-2 items-center">
                <p className="pl-12 py-1">{degree && degree.length > 0 ? degree : "Degree"}</p>
                <span>|</span>
                <p className="py-1">{school && school.length > 0 ? school : "School"}</p>
              </div>
              <i className="px-11 py-1">{year && year.length > 0 ? year : "year"}</i>
            </div>
          </div>
        )}
        {isOpen2 && (
          <div className="mb-3">
            <div className="font-bold text-lg pl-9 px-2 py-1 bg-custom-gray ">Work Experience</div>
            <div className="flex justify-between pt-2 text-base">
              <p className="pl-12">{companyName && companyName.length > 0 ? companyName : "Work Experience"}</p>
              <i className="px-11">{yearWork && yearWork.length > 0 ? yearWork : "year"}</i>
            </div>
            <i className="pl-16 text-sm">{designation && designation.length > 0 ? designation : "Designation"}</i>
          </div>
        )}

        {isOpen && (
          <div>
            <div className="font-bold text-lg pl-9 px-2 py-1 bg-custom-gray ">Awards and Achievements</div>
            <div className="flex justify-between pt-2 text-base">
              <p className="pl-14 text-sm text-gray-500">
                {awardsAchievements && awardsAchievements.length > 0
                  ? awardsAchievements
                  : "Share your key accomplishments and accolades here..."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
