import { Router } from "express";
import { deleteProject,addProject, getProjectById, editProject, getAllProjects, getMyProjects } from "../controllers/projectController";

const project_router = Router();


project_router.post('/add', addProject);

project_router.put("/editProject/:project_id", editProject);
project_router.delete("/deleteProject/:project_id", deleteProject);
project_router.delete("/getProject/:project_id", getProjectById);


project_router.get("/allProjects", getAllProjects);
project_router.get("/my_projects/:id", getMyProjects);



export default project_router;
