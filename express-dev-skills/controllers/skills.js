const Skill =require('../models/skills');

const index = (req,res) => {
    const skills =Skill.getAll()
    res.render ('skills/index' ,{skills })
}

const show = (req,res) => {
    const skill=Skill.getOne(req.params.id)
    res.render('skills/show',{skill})

}
const newSkill = (req,res) => {
    res.render('skills/new')
}

const createSkill = (req,res) => {
    console.log(req.body)
    Skill.creat(req.body)
    res.redirect('/skills')
}

const deleteSkill = (req,res) => {
console.log(req.params.id)
    Skill.delet(req.params.id)
    res.redirect('/skills')
}

const editSkill = (req,res) => {
    console.log("in editSkill controller ")
    const skill =Skill.getOne(req.params.id)
    res.render('skills/edit' ,{skill})
    console.log(skill)
}

const update = (req, res) => {
    skillId = req.params.id;
    updatedSkill = req.body.name;
    Skill.updateOne(skillId, updatedSkill);
    res.redirect('/skills');
  }

module.exports = {
    index,
    show,
    newSkill,
    createSkill,
    deleteSkill,
    editSkill,
    update
  };