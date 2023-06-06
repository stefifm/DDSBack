const { clientes } = require('../base-orm/sequelize-init.js')
const { Op } = require('sequelize')
const getClienteByApellidoNombre = async (req, res) => {
  try {
    const { ApellidoYNombre } = req.query
    let where = {}
    if (ApellidoYNombre != undefined && ApellidoYNombre !== '') {
      where.ApellidoYNombre = {
        [Op.like]: '%' + ApellidoYNombre + '%'
      }
    }

    const items = await clientes.findAndCountAll({
      attributes: ['IdCliente', 'ApellidoYNombre', 'DNI'],
      order: [['ApellidoYNombre', 'ASC']],
      where
    })

    res.json(items.rows)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getClienteByApellidoNombre
}
