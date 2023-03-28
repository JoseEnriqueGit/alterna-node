import { Request, Response } from "express";
import AppDataSource from "../../datasource";
import Villian from "../models/villian.entity";

const heroRepository = AppDataSource.getRepository(Villian);

export const getAll = async (req: Request, res: Response) => {
	try {
		const result = await heroRepository.find();
		if (!result.length) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		res.status(200).json({
			message: "Registros obtenidos exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener los registros",
			error,
		});
	}
};

export const getById = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const result = await heroRepository.findOneBy({ id: Number.parseInt(id) });
		if (null) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		res.status(200).json({
			message: "Registros obtenidos exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener los registros",
			error,
		});
	}
};

export const create = async (req: Request, res: Response) => {
	const { alte } = req.body;

	try {
		const existHero = await heroRepository.findOneBy({ alte });
		if (existHero) {
			res.status(400).json({
				message: "Registro existente",
			});
		} else {
			const result = await heroRepository.create(req.body);
			await heroRepository.insert(result);

			res.status(201).json({
				message: "Registro creado exitosamente",
				result,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: "Error al crear el registro",
			error,
		});
	}
};

export const update = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { alte, nombre } = req.body;

	try {
		const result = await heroRepository.findOneBy({ id: Number.parseInt(id) });
		if (!result) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		const updatedHero = heroRepository.create({
			id: result.id,
			alte: alte ? alte : result.alte,
			nombre: nombre ? nombre : result.nombre,
		});
		await heroRepository.save(updatedHero);

		res.status(200).json({
			message: "Registro actualizado exitosamente",
			updatedHero,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al actualizar el registro",
			error,
		});
	}
};

export const remove = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const result = await heroRepository.findOneBy({ id: Number.parseInt(id) });
		if (!result) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		const deletedHero = await heroRepository.delete({
			id: Number.parseInt(id),
		});

		res.status(200).json({
			message: "Registro eliminado exitosamente",
			deletedHero,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al eliminar el registro",
			error,
		});
	}
};
