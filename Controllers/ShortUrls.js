import ShortUrl from '../Models/shortUrls.js'

export const getShortUrls = async (req, res, next) => {
  const shortUrls = await ShortUrl.find()
  res.status(200).json({
    success: true,
    data: shortUrls,
  })
  next()
}

export const createShortUrls = async (req, res, next) => {
  const data = req.body
  const newShortUrl = new ShortUrl(data)
  try {
    await newShortUrl.save()
    res.status(201).json(newShortUrl)
  } catch (error) {
    next(error)
  }
}
