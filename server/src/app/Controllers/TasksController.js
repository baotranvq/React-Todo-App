const { response } = require('../../../app');

modelTask = require('../Models/Tasks.model')

class TaskController {
    getTask = async (req, res) =>{
       const data = await modelTask.find({})
       res.json(data)
    }

    postTask = async (req, res) =>{
        let data = req.body
        // const newTask = new modelTask(data)
        // const task = await newTask.save()
        const task = await modelTask.create(data);
        res.json(task)
    }

    deleteTask = async (req, res) =>{
        let id = req.params.id
        try{

            const deleteTask = await modelTask.findByIdAndDelete(id)
            if(!deleteTask){
                return res.status(404).json({message:'Task not found'})
            }
            res.json(deleteTask);
        }
        catch(error){
            console.error(error)
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    updateTask = async (req, res) => {
        const taskId = req.params.id;
        const updatedData = req.body;

        try {
            const updatedTask = await modelTask.findByIdAndUpdate(taskId, updatedData, { new: true });
    
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
    
            res.json(updatedTask);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    

}

module.exports = new TaskController();