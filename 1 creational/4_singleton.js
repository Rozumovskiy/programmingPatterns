class DB {
    constructor(data) {
        if(DB.exists) {
            return DB.instance;
        }

        DB.instance = this;
        DB.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new DB('MONGO DB');
console.log(mongo.getData());

const mysql = new DB('MySql');
console.log(mysql.getData());