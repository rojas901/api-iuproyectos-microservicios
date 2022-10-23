const Cliente = require("../models/Cliente");

const clienteController = {
	create: async (req, res) => {
		const cliente = new Cliente(req.body);
		try {
			if (await Cliente.findOne({ nombre: req.body.nombre })) {
				return res.status(200).json({ msg: "El cliente ya existe." });
			} else {
				await cliente.save();
				return res.status(200).json(cliente);
			}
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
	find: async (req, res) => {
		try {
			const cliente = await Cliente.find();
			return res.status(200).json(cliente);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
	update: async (req, res) => {
		try {
			const cliente = await Cliente.findByIdAndUpdate(
				req.params.id,
				{ ...req.body, fechaActualizacion: new Date() },
				{ returnOriginal: false }
			);
			return res.status(200).json(cliente);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
	delete: async (req, res) => {
		try {
			if (await Cliente.findByIdAndDelete(req.params.id)) {
				return res
					.status(200)
					.json({ msg: `Se ha borrado el cliente con id: ${req.params.id}` });
			} else {
				return res.status(404).json({ msg: "El cliente no existe." });
			}
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
}

module.exports = clienteController;
