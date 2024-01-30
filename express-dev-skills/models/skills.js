const skills = [
    {id: 152164 , name: "JavaScript" ,description: "A versatile scripting language used for web development and beyond.",note : "the funniest programming language" },
    {id: 154946, name: 'Node.js' ,
    description: "A runtime environment for executing JavaScript code server-side." , note : "you will git a headech learning this language , but still funny  "},
    {id: 635974, name: 'HTML',description: "The standard markup language for creating web pages and applications."
     ,note : "the simplest "}
  ];
 
 
  const getAll = () => {
    return skills;
  }
 
  const getOne = (id) => {
    return skills.find((skill) => skill.id === parseInt(id))
  }
    
  const creat = (skill) => {
    skill.id=Date.now() % 100000
     skill.name=skill.skill
    skill.description =""
    skill.note =" new one "
    
    skills.push(skill)
   }
   const delet = (id) => {
    const indx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(indx, 1);
   }

   const updateOne = (id, updatedSkill) => {
    const skillTOUpdate = skills.find(skill => skill.id === parseInt(id));
    skillTOUpdate.name = updatedSkill; 
  }
  module.exports = {
    getAll,
    getOne,
    creat,
    delet,
    updateOne
  };
  