const pool = require('../config/db')

module.exports = async (req, res) => {
  try {
    const { name, email } = req.body

    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    )

    res.json({ success: true, user: result.rows[0] })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
