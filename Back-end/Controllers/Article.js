import db from "../models/index.js"

const {ArticleModel, UserModel}=db

export const addArticle=async(req,res)=>{
    const {image, title,category, body, author}=req.body
    try {
        const article= await ArticleModel.create({image, title,category, body, author})
        res.status(200).json(article)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const getArticles= async(req,res)=>{
    try {
        const articles= await ArticleModel.findAll()
        return res.status(200).json(articles)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
}

export const getArticleById= async(req,res)=>{
    const {id}= req.query;
    try {
        const articleById= await ArticleModel.findAll({
            where:{
                id:id
            }
            
        })
        return res.status(200).json(articleById)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
}


export const deleteArticle = async (req, res) => {
    const { id } = req.query;
    try {
       const deletedRows = await ArticleModel.destroy({
          where: { 
            id:id
        },
       });
       if(deleteArticle){
          res.json({ message: 'article deleted successfully' });
       }
    } catch (error) {
       res.status(500).json({ error:error.message });
    }
 };

