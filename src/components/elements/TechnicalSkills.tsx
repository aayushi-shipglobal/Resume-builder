import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill, Skill } from "../../reducer/action";
import { Input } from "../ui/input";

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

const TechnicalSkills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state: any) => state.tasks.tasks);

  const [inputSkill, setInputSkill] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(skillSuggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSkill(value);

    if (value.length > 0) {
      setFilteredSuggestions(skillSuggestions.filter((skill) => skill.toLowerCase().includes(value.toLowerCase())));
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

  return (
    <div>
      <p className=" text-md md:text-xl font-bold dark:text-white">Technical Skills</p>
      <hr />

      <div className="flex items-center justify-center cursor-pointer">
        <Input
          type="text"
          value={inputSkill}
          onChange={handleInputChange}
          onClick={handleFocus}
          placeholder="Add skills"
          className={`mt-5 shadow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors rounded-md px-3 py-1 text-sm`}
        />
        <Plus onClick={handleAddSkill} className="pt-5 size-9 -ml-9 font-bold" type="button" />
      </div>

      {filteredSuggestions.length > 0 && showSuggestions && (
        <ul className="mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
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
  );
};

export default TechnicalSkills;
