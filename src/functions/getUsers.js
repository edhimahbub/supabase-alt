const pool = require('../config/db')

module.exports = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id DESC')

    res.json({
      success: true,
      users: result.rows
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    })
  }
}
