const User = require('../models/users')

class UserController{
    show(req,res,next){
        User.find({})
        .then(user =>{
            res.json(user)
        })
        .catch(next)
    }
    index(req,res,next){
        User.findOne({userName: req.query.username,passWord:req.query.password})
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
        User.updateOne({_id: req.params._id},req.body)
            .then(()=> res.redirect('/users'))
            .catch(next)
     }
     delete(req,res,next){
        User.deleteOne({_id:req.params._id})
            .then(()=>res.redirect('/users'))
            .catch(next)
     }

}

module.exports = new UserController()