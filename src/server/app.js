require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import FoldersApi from "./api/Folders";
import FilesApi from "./api/Files";
import PageApi from "./api/Page";

import FoldersModel from "./models/Folders";
import FilesModel from "./models/Files";
import * as ResponseModel from "./models/Response";

import * as PageValidation from "./validation/Page";
import * as FoldersValidation from "./validation/Folders";
import * as FilesValidation from "./validation/Files";

const port = process.env.PORT || 3001;

export default class App {
  constructor() {
    this.init();
  }

  init() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.static("./public"));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.db = this.getDatabase();
    this.models = this.getModels();
    this.validation = this.getValidation();

    this.setApi();
  }

  getValidation() {
    return {
      Page: PageValidation,
      Folders: FoldersValidation,
      Files: FilesValidation
    }
  }

  getModels() {
    return {
        Folders: FoldersModel(),
        Files: FilesModel(),
        Response: ResponseModel
    }
  }

  setApi() {
    this.app.use("/api", FoldersApi(this));
    this.app.use("/api", FilesApi(this));
    this.app.use("/api", PageApi(this));
  }

  getDatabase() {
    return {
      run: () => {
        return new Promise((resolve, reject) => {
          mongoose
            .connect(
              process.env.DB_HOST,
              { useNewUrlParser: true }
            )
            .then(() => {
              console.log("db connected");
              resolve();
            })
            .catch(reject);
        });
      }
    };
  }

  async run() {
    try {
      await this.db.run();
    } catch (err) {
      console.log(err);
    }

    return new Promise(resolve => {
      this.app.listen(port, () => {
          console.log("server start")
        resolve(this);
      });
    });
  }
}
