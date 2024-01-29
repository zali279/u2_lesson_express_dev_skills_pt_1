const Skill =require('../models/skills');

const index = (req,res) => {
    const skills =Skill.getAll()
    res.render ('skills/index' ,{skills })
}

const show = (req,res) => {
    const skill=Skill.getOne(req.params.id)
    res.render('skills/show',{skill})

}

module.exports = {
    index,
    show
  };