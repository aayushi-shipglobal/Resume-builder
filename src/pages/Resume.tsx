import { z } from "zod";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin } from "lucide-react";
import { Skill } from "../reducer/action";
import { Form } from "@/components/ui/form";
import { ResumeComponent } from "@/components/elements/ResumeComponent";
import { PersonalDetailsForm } from "@/components/elements/PersonalDetailsForm";
import { ProjectDetails } from "@/components/elements/ProjectDetails";
import { EducationDetails } from "@/components/elements/EducationDetails";
import { WorkExperience } from "@/components/elements/WorkExperience";
import { AwardsAchievements } from "@/components/elements/AwardsAchievements";
import { TechnicalSkills } from "@/components/elements/TechnicalSkills";

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
  const skills = useSelector((state: any) => state.tasks.tasks);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

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
            <PersonalDetailsForm control={form.control} />

            <div className="border border-gray-100 rounded-md p-6 bg-white">
              <TechnicalSkills />
              <EducationDetails control={form.control} onClick={handleToggle1} Open1={isOpen1} />
              <ProjectDetails control={form.control} value={link} onChange={handleLinkChange} />
              <WorkExperience control={form.control} onClick={handleToggle2} Open2={isOpen2} />
              <AwardsAchievements control={form.control} onClick={handleToggle} Open={isOpen} />
              <Button type="submit" className="mt-2 bg-teal-600 text-white">
                Submit
              </Button>
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
