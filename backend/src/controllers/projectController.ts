import { Request, Response } from 'express'
import mssql from 'mssql'
import { sqlConfig } from '../config/sqlConfig'
import Connection from '../dbhelpers/dbhelpers'
import { Project } from '../interfaces/project'
import { v4 as uuidv4 } from 'uuid';
import {v4} from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const dbhelper = new Connection



export const addProject = async(req:Request, res: Response) =>{
    try {
        let {project_name, project_description, dueDate, project_status } = req.body

        let project_id = v4()


        let result = dbhelper.execute('addProject', {
            project_id, project_name, project_description,dueDate, project_status
        })
        

        return res.status(200).json({
            message: 'project added successfully'
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const getAllProjects = async(req:Request, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        let projects = (await pool.request().execute('fetchAllProjects')).recordset

        return res.status(200).json({
            projects: projects
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}


export const getProjectById = async (req: Request, res: Response) => {
    try {
        const project_id = req.params.project_id;

        const pool = await mssql.connect(sqlConfig);

        let note = (await pool.request().input('project_id', project_id).execute('getProjectById')).recordset[0];

        return res.status(200).json({
            note: note,
        })
    } catch (error) {
        return res.json({
            error: error,
        })
    }
}

export const editProject = async (req: Request, res: Response) => {
    try {
        const project_id = req.params.project_id;
        let {project_name, project_description, dueDate, project_status } = req.body

        const pool = await mssql.connect(sqlConfig);

        await pool
            .request()
            .input('projectID', project_id)
            .input('project_name', project_name)
            .input('project_description', project_description)
            .input('project_status', project_status)
            .input('isDeleted', 0)
            .input('dueDate', dueDate)
            .execute('editProject');

        return res.status(200).json({
            message:'project updated successfully '
        });
    } catch (error) {
        return res.json({
            error: error,
        })
    }
}

export const deleteProject = async (req: Request, res: Response) => {
    try {
        const project_id = req.params.project_id;

        const pool = await mssql.connect(sqlConfig);

        await pool.request().input('project_id', project_id).execute('deleteProject');

        return res.status(200).json({
            message: 'Project deleted successfully',
        });
    } catch (error) {
        return res.json({
            error: error,
        })
    }
};




export const getMyProjects = async(req:Request, res:Response)=>{
    try {

        const user_id = req.params.id;
        
        let projects = dbhelper.execute('fetchMyProjects', {
                        user_id
        })


        return res.status(200).json({
          projects: projects
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}



