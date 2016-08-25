export default {
  getImage () {
    return {
      id: 'ccfaab95-b8e1-449e-baa4-dea8794dbfa0',
      publicId: '6eMZsFZmky0HeipraBSaMU',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/6eMZsFZmky0HeipraBSaMU.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: 'ccfaab95-b8e1-449e-baa4-dea8794dbfa0',
      name: 'Carlos Hincapié',
      username: 'comiguel',
      email: '123@gmail.com',
      password: 'pl4tzi',
      createdAt: new Date().toString()
    }
  }
}
