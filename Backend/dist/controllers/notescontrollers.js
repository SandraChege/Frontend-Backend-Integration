"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotes = exports.addTask = void 0;
const uuid_1 = require("uuid");
const sqlconfig_1 = require("../config/sqlconfig");
const mssql_1 = __importDefault(require("mssql"));
const dbhelpers_1 = __importDefault(require("../dbhelpers/dbhelpers"));
const dbhelpers = new dbhelpers_1.default;
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = (0, uuid_1.v4)();
        const { content, createdAt } = req.body;
        let pool = yield mssql_1.default.connect(sqlconfig_1.sqlConfig);
        yield pool
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
    }
    catch (error) {
        return res.json({
            error: error,
        });
    }
});
exports.addTask = addTask;
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(sqlconfig_1.sqlConfig);
        let notes = (yield pool.request().execute("fetchAllNotes")).recordset;
        return res.status(200).json({
            message: "Notes fetched successfully",
        });
    }
    catch (error) {
        return res.json({
            error: error,
        });
    }
});
exports.getAllNotes = getAllNotes;
