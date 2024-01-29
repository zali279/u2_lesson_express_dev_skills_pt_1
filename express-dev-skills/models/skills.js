const skills = [
    {id: "java", name: "JavaScript" ,description: "A versatile scripting language used for web development and beyond.",note : "the funniest programming language" },
    {id: "node", name: 'Node.js' ,
    description: "A runtime environment for executing JavaScript code server-side." , note : "you will git a headech learning this language , but still funny  "},
    {id: "html", name: 'HTML',description: "The standard markup language for creating web pages and applications."
     ,note : "the simplest "}
  ];
 
 
  const getAll = () => {
    return skills;
  }
 
  const getOne = (id) => {
    return skills.find((skill) => skill.id === (id))
  }
  module.exports = {
    getAll,
    getOne
  };
  