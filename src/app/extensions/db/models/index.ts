
import { configs } from './../config/configs';
// import { FolderAttributes, FolderInstance } from './../../../interfaces/folder-interface';
// import { logger } from './../../../utils/logger';

// import { ProductInstance } from "./var../src../app../interfaces/product-interface";
// var fs = require('fs');
// var path = require('path');
// var Sequelize = require('sequelize');
// if (module.filename !== undefined) {
//     var basename = path.basename(module.filename);
// }
// var env = process.env.NODE_ENV || 'development';
// var config = require(__dirname + '/../config/config.json')[env];
// var db = {};
// if (config.use_env_variable) {
//     var sequelize = new Sequelize(process.env[config.use_env_variable]);
// }
// else {
//     var sequelize = new Sequelize(config.database, '', ''); 
// }
// fs
//     .readdirSync(__dirname)
//     .filter(function (file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
// })
//     .forEach(function (file) {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
// });
// Object.keys(db).forEach(function (modelName) {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;
// require('continuation-local-storage');
// import * as cls from 'continuation-local-storage';
var cls = require('continuation-local-storage');

import * as fs from 'fs';
import * as path from 'path';
import * as SequelizeStatic from 'sequelize';
// var SequelizeStatic = require('sequelize');
import { Sequelize } from 'sequelize';
export interface SequelizeModels {
  Folder: SequelizeStatic.Model<FolderInstance, FolderAttributes>;
}

class Database {
  private _basename: string;
  private _models: SequelizeModels;
  private _sequelize: Sequelize;

  constructor() {
    this._basename = path.basename('name');
    let dbConfig = configs.getDatabaseConfig();

    if (dbConfig.logging) {
      dbConfig.logging = logger.info;

    }


    (SequelizeStatic as any).cls = cls.createNamespace('sequelize-transaction');
    this._sequelize = new SequelizeStatic(dbConfig.database, '',
      '', dbConfig);
    this._models = ({} as any);

    fs.readdirSync(__dirname).filter((file: string) => {
      return (file !== this._basename) && (file !== 'interfaces');
    }).forEach((file: string) => {
      let model = this._sequelize.import(__dirname + '/' + file);
      this._models[(model as any).name] = model;
    });

    Object.keys(this._models).forEach((modelName: string) => {
      if (typeof this._models[modelName].associate === 'function') {
        this._models[modelName].associate(this._models);
      }
    });
  }

  getModels() {
    return this._models;
  }

  getSequelize() {
    return this._sequelize;
  }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();



//use of this in service 
// import {logger} from '../utils/logger';
// import {models, sequelize} from '../models/index';
// import {ProductAttributes, ProductInstance} from '../models/interfaces/product-interface';
// import {Transaction} from 'sequelize';

// export class ProductService {
//   createProduct(productAttributes: ProductAttributes): Promise<ProductInstance> {
//     let promise = new Promise<ProductInstance>((resolve: Function, reject: Function) => {
//       sequelize.transaction((t: Transaction) => {
//         return models.Product.create(productAttributes).then((product: ProductInstance) => {
//           logger.info(`Created product with name ${productAttributes.name}.`);
//           resolve(product);
//         }).catch((error: Error) => {
//           logger.error(error.message);
//           reject(error);
//         });
//       });
//     });

// import * as cls from 'continuation-local-storage';
// import { configs } from './../config/configs';
// import { FolderAttributes, FolderInstance } from './../../../interfaces/folder-interface';
// // import { logger } from './../../../utils/logger';
// // import { Model } from '~sequelize/lib/model';
// import * as fs from 'fs';
// import * as path from 'path';
// import * as SequelizeStatic from 'sequelize';



// import { Sequelize } from 'sequelize';
// export interface SequelizeModels {
//   Folder: SequelizeStatic.Model;

// }

// class Database {
//   private _basename: string;
//   private _models: SequelizeModels;
//   private _sequelize: Sequelize;

//   constructor() {
//     this._basename = path.basename(module.filename);
//     let dbConfig = configs.getDatabaseConfig();

//     if (dbConfig.logging) {
//       dbConfig.logging = logger.info;

//     }
//     (Sequelize as any).cls = cls.createNamespace('sbox'); //changed namespace from sequelize-transaction=>sbox 
//     this._sequelize = new Sequelize(dbConfig.database, '',
//       '', dbConfig.dialect);
//     this._models = ({} as any);

//     fs.readdirSync(__dirname).filter((file: string) => {
//       return (file !== this._basename) && (file !== 'interfaces');
//     }).forEach((file: string) => {
//       let model = this._sequelize.import(__dirname + '/' + file);
//       this._models[(model as any).name] = model;
//     });

//     Object.keys(this._models).forEach((modelName: string) => {
//       if (typeof this._models[modelName].associate === 'function') {
//         this._models[modelName].associate(this._models);
//       }
//     });
//   }

//   getModels() {
//     return this._models;
//   }

//   getSequelize() {
//     return this._sequelize;
//   }
// }

// const database = new Database();
// export const models = database.getModels();
// export const sequelize = database.getSequelize();




