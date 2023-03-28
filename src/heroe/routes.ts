import { Router } from "express";
import { getAll, create, remove, update, getById } from "./controller";

const heroeRoute = Router();

heroeRoute.get('/', getAll);

heroeRoute.get('/:id', getById);

heroeRoute.post('/', create);

heroeRoute.put('/:id', update);

heroeRoute.delete('/:id', remove);

export default heroeRoute
