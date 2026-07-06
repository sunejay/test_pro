export const getHome = (req, res) => {
  res.render('index', { greet: 'Hello World!' })
}

export const getAbout = (req, res) => {
  res.render('about', { greet: 'About Page' })
}

export const getPosts = (req, res) => {
  const posts = [
    { title: 'First Post' },
    { title: 'Second Post' }
  ]
  res.render('posts', { posts })
}