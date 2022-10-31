const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
 
  pincode: {
    type: String,
    required: ' address is Required'
  },landmark: {
    type: String,
    required: 'landmark is Required'
  },
  gender: {
    type: String,
    required: 'pincode is Required'
  },
  price: {
    type: Number,
    required: 'price is Required'
  },
  room: {
    type: Number,
    required: 'room is Required'
  },
 /*
  address: {
    type: String,
    required: ' gender is Required'
  },
 phonenumber: {
    type: Number,
    required: ' phonenumber is Required'
  },
  */
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
 
})

module.exports = mongoose.model('room', roomSchema)