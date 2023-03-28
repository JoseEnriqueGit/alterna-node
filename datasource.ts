import "reflect-metadata";
import { DataSource } from "typeorm";
import Heroe from "./src/models/heroe.entity";

const AppDataSource = new DataSource({
	type: "mssql",
	host: "localhost",
	port: 1433,
	username: "sa",
	password: "Sa123456",
	database: "backendalterna",
	entities: [Heroe],
	synchronize: false,
	logging: false,
	options: { encrypt: false },
});

AppDataSource.initialize()
	.then()
	.catch((error) => console.log(error));

export default AppDataSource;
