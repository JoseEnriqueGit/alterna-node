import { Router } from "express";
import { getAll, create, remove, update, getById } from "./controller";

const villianRoute = Router();

villianRoute.get('/', getAll);

villianRoute.get('/:id', getById);

villianRoute.post('/', create);

villianRoute.put('/:id', update);

villianRoute.delete('/:id', remove);

export default villianRoute
