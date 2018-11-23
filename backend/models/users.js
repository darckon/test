const conexion = require('../database');
const userModel = {}

/**
 * Metodo para ingresar Usuario
 * @param data json | Json para el ingreso de Usuario 
 */
userModel.save = function (data){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('INSERT INTO users (nombre, cargo) VALUES ("'+data.nombre+'", "'+data.cargo+'")', function (error, results, fields) {
            if (error) {
                console.log("errorrr");
                status = false;
                return conexion.rollback(function() {
                    throw error;
                });
            }
            conexion.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    throw err;
                  });
                }
                console.log('success!');
            });
        });
    });
}

userModel.update = function(data, callback){
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        conexion.query('UPDATE users SET nombre = "'+ data.nombre +'", '+ 
                                         'cargo = "'+ data.cargo  +'" '+
                                         'WHERE id = '+ data.id +'', function (error, results, fields) {
            if (error) {
                console.log("error");
                status = false;
                callback(err, null);
                return conexion.rollback(function() {
                    throw error;
                });
            }
            conexion.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    throw err;
                  });
                }
                callback(null, true);
            });
        });
    });        
}

userModel.findAll = function(callback) {
    conexion.query('SELECT * FROM users ',  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            console.log(rows);
            callback(null, rows);
        }
    });
}

userModel.findById = function(id, callback) {
    conexion.query('SELECT * FROM users WHERE id = ?', id,  function(err, rows){
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows[0]);
        }
    });
}

module.exports = userModel;