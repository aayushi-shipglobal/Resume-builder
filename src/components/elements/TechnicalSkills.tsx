import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill,Skill } from "../../reducer/action";

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSkill(value);

    if (value.length > 0) {
      setFilteredSuggestions(skillSuggestions.filter((skill) => skill.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredSuggestions(skillSuggestions);
    }
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
    setInputSkill(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <h2>Technical Skills</h2>

      <div>
        <input type="text" value={inputSkill} onChange={handleInputChange} placeholder="Add a technical skill" />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>

      {inputSkill && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <h3>Added Skills</h3>
      <ul>
        {skills.map((skill:Skill) => (
          <li key={skill.id}>
            {skill.text} <button onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSkills;
