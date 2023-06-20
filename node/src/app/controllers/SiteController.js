
const Task = require('../models/tasks')
class SiteController{
   show(req,res,next){
    res.send('Trang nhiệm vụ')
   }

    tasks(req,res,next){
        Task.find({})
            .then(task =>{
                res.json(task)
            })
            .catch(next)
    }
    insert(req,res,next){
        const formData = req.body;
        const task =  new Task(formData)
        const date = new Date()
        
        task.save()
        .then(() => res.redirect('http://localhost:3001/home'))
        .catch(next)
    }
    update(req,res,next){
        Task.updateOne({_id: req.body._id},req.body)
            .then(()=>res.redirect('http://localhost:3001/home'))
            .catch(next);
        
    }
    delete(req,res,next){
        Task.deleteOne({_id: req.body._id})
            .then(() => res.redirect('http://localhost:3001/home'))
            .catch(next)
    }

}
module.exports = new SiteController();