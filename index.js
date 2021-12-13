import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(express.json());

const db= process.env.DB_URL;
const PORT= process.env.PORT || 3000

mongoose.connect(db,
{useUnifiedtopology: true}).then(()=>{console.log
('Connected to MongoDB succesfully')}).catch((err)=>{
    console.log(err)})

    //create a Todo
    app.post('/todo',async(req,res)=>{
        try{
            const newTodo =await TodoModel.create({...req.body})
            res.status(201).json({
                status: true,
                message: 'Todo created successfully',
                data: newTodo
            })}
            catch (error) {
                console.log('something went wrong',error);
                //res.status(400).send('failed to fetch todo',error)
               
            }
        })
        // get all todos
    app.get('/todos', async(req,res)=>{
        try {
         const todos = await TodoModel.find({});
         return res.status(200).json({
             status: true,
             message: 'Todos fetched suvvessfully',
             data:todos
         })
        } catch (error) {
            console.log('SOmething Went Wrong', error);
            res.status(400).send('Failed to Fetch todos',error)
        }
         
 
     })
         //update a todo
    app.patch('/todo/id', async(req,res)=>{ try {
        const{id} = re.params;
        const{status} = req.body;

        const updateTodo = await TodoModel.updateone({status: status}).where({_id:id})
        return res.status(201).json({
            status: true,
            message: 'Todo udated successfully',
            data: updateTodo
        })
            } catch (error) {
                console.log('something went wrong', error)
            }})
   
       

    
            //delete a todo
            app.delete('/todos/:id',async(req,res)=>{
                try{
                    const{id}= re.params;
                    const deleteTodo = await TodoModel.findbyIdAndDelete(id);
                    return res.status(201).json({
                        message:'Todo delte succesfully'
                    })
                    
                } catch (error){
                    console.log('Something Went Wrong', error);
                }
            })


   
   app.listen(PORT)

