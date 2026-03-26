module.exports = async (req, res) => {
  return res.json({
    success: true,
    appName: process.env.APP_NAME || null,
    secretExists: !!process.env.DEMO_SECRET_KEY,
    openAiKeyExists: !!process.env.OPENAI_API_KEY
  })
}
