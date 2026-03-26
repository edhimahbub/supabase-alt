module.exports = async (req, res) => {
  const secret = req.headers['x-demo-secret']

  if (secret !== process.env.DEMO_SECRET_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }

  return res.json({
    success: true,
    message: 'Access granted'
  })
}
