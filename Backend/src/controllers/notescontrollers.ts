import express, { Request, Response } from "express";
import { v4 as uid } from "uuid";
import { sqlConfig } from "../config/sqlconfig";
import mssql from 'mssql';
import jwt from "jsonwebtoken"
import Connection from "../dbhelpers/dbhelpers";

const dbhelpers = new Connection

export const addTask = async (req: Request, res: Response) => {
    try {
      let id = uid();
      const { content, createdAt } = req.body;

      let pool = await mssql.connect(sqlConfig);
      await pool
        .request()
        .input("id", id)
        .input("content", content)
        .input("createdAt", createdAt)
        .execute("addNote");

    //   let result = dbhelpers.execute("registerEmployee", {
    //     id,
    //     content,
    //     createdAt,
    //   });

      return res.status(200).json({
        message: "Project added successfully",
      });
    } catch (error) {
         return res.json({
           error: error,
         }); 
    }
}

export const getAllNotes = async (req: Request, res: Response) => {
  try {

    let pool = await mssql.connect(sqlConfig);

    let notes = (await pool.request().execute("fetchAllNotes")).recordset;

    return res.status(200).json({
      message: "Notes fetched successfully",
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
