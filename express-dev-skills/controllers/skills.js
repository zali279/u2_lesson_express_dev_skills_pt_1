const Skill =require('../models/skills');

const index = (req,res) => {
    const skills =Skill.getAll()
    res.render ('skills/index' ,{skills , title})
}



module.exports = {
    index
  };