const Users = require('../models/users')

class UserController{
    show(req,res,next){
        Users.find({})
        .then(users =>{
            res.json(users)
        })
        .catch(next)
    }
    index(req,res,next){
        Users.findOne({userName: req.query.username,passWord:req.query.password})
         .then(user =>{
             res.json(user)
         })
         .catch(next)
     }
     insert(req,res,next){
        const formData = req.body;
        const user =  new User(formData);
        user.save()
        .then(() => res.redirect('https://todo-reactjs-six.vercel.app/'))
        .catch(next)
     }
     update(req,res,next){
        Users.updateOne({_id: req.params._id},req.body)
            .then(()=> res.redirect('/users'))
            .catch(next)
     }
     delete(req,res,next){
        Users.deleteOne({_id:req.params._id})
            .then(()=>res.redirect('/users'))
            .catch(next)
     }

}

module.exports = new UserController()