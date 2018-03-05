import Cosmic from './cosmic'
import config from '../config/config'
import async, { race } from 'async'
import _ from 'lodash'
import {generateTouristPlaceObject} from './paramMapping'
function getTouristPoints () {
  return new Promise((resolve, reject) => {
    const params = {
      type_slug : config.object_type,
    }
    Cosmic.getObjectsByType(config ,params,(err, res) =>{
      if(!err) {
        resolve(res.objects.all);
      }
      reject(err);
    })
  });
}
function editTouristPlace (obj) {
  return new Promise((resolve, reject) => {
    const params = generateTouristPlaceObject(obj,true)
    Cosmic.editObject(config, params, (err, res) => {
      if (!err) {
        resolve(res.object)
      } else {
        reject(err)
      }
    })
  })
}
function addTouristPoints (obj) {
  return new Promise((resolve, reject) => {
    const params = generateTouristPlaceObject(obj)
    Cosmic.addObject(config, params, (err, res) => {
      if (!err) {
        resolve(res.object)
      } else {
        reject(err)
      }
    })
  })
}
function deleteTouristPoint (place) {
  console.log(place)
  const params = {
    write_key: config.bucket.write_key,
    slug: place.slug
  }
  return new Promise((resolve, reject) => {
    Cosmic.deleteObject(config, params, (err, res) => {
      if (!err) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}
function saveMedia (payload) {
  return new Promise((resolve, reject) => {
    if (payload.metadata.place_img1.file && payload.metadata.place_img1.id) {
      console.log('in first condition')
      deleteMedia(payload.metadata.place_img1.id).then((res) => {
        addMedia(payload.metadata.place_img1.file).then((media) => {
        payload.metadata.place_img1.url = media.url
          payload.metadata.place_img1.imgix_url = media.imgix_url
          payload.metadata.place_img1.value = media.name
          payload.metadata.place_img1.id = media._id
          delete payload.metadata.place_img1.file
          resolve(payload)
        })
      })
        .catch(e => {
          reject(e)
        })
    } else if (payload.metadata.place_img1.file) {
      console.log('in second condition')
      addMedia(payload.metadata.place_img1.file).then((media) => {
        payload.metadata.place_img1.url = media.url
        payload.metadata.place_img1.imgix_url = media.imgix_url
        payload.metadata.place_img1.value = media.name
        payload.metadata.place_img1.id = media._id
        delete payload.metadata.place_img1.file
        resolve(payload)
      })
        .catch(e => {
          reject(e)
        })
    } else {
      console.log('in 3rd condition')
      resolve(payload)
    }
  })
}
function addMedia (file) {
  const params = {
    media: file,
    folder: config.image_folder
  }
  return new Promise((resolve, reject) => {
    Cosmic.addMedia(config, params, (err, res) => {
      if (!err) {
        resolve(res.body.media)
      } else {
        reject(err)
      }
    })
  })
}
function deleteMedia (id) {
  const params = {
    media_id: id,
    write_key: config.bucket.write_key
  }
  return new Promise((resolve, reject) => {
    Cosmic.deleteMedia(config, params, (err, res) => {
      if (!err) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}
export default {getTouristPoints,addTouristPoints,saveMedia,deleteTouristPoint,deleteMedia,editTouristPlace}
