module.exports = async (req, res) => {
  return res.json({
    success: true,
    message: 'Hello from VPS function',
    method: req.method
  })
}
