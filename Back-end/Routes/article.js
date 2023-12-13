import express from "express"
import { addArticle ,getArticles, getArticleById, deleteArticle} from "../Controllers/Article.js"

const articleRouter= express.Router()

articleRouter.post("/addArticle", addArticle)
articleRouter.get("/getArticle", getArticles)
articleRouter.get("/getArticleById", getArticleById)
articleRouter.delete("/deleteArticle", deleteArticle)


export default articleRouter