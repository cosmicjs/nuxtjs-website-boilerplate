import Cosmic from 'cosmicjs'
import _ from 'lodash'
var apiURL = 'https://api.cosmicjs.com'
var apiVersion = 'v1'

Cosmic.getObjectsByType = function (config, object, callback) {
  var endpoint = apiURL + '/' + apiVersion + '/' + config.bucket.slug + '/object-type/' + object.type_slug + '?read_key=' + config.bucket.read_key
  if (object.limit) endpoint += '&limit=' + object.limit
  if (object.skip) endpoint += '&skip=' + object.skip
  if (object.locale) endpoint += '&locale=' + object.locale
  if (object.sort) endpoint += '&sort=' + object.sort
  fetch(endpoint)
    .then(function (response) {
   if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
        }
        return callback(err, false)
      }
      return response.json()
    })
    .then(function (response) {
    // Constructor
      var cosmic = {}
      var objects = response.objects
      cosmic.objects = {}
      cosmic.objects.all = objects
      cosmic.object = _.map(objects, keyMetafields)
      cosmic.object = _.keyBy(cosmic.object, 'slug')
      cosmic.total = response.total
      return callback(null, cosmic)
    })
}

Cosmic.deleteMedia = function (config, object, callback) {
  var endpoint = apiURL + '/' + apiVersion + '/' + config.bucket.slug + '/media/' + object.media_id
  fetch(endpoint, {
    method: 'delete',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(object)
  })
    .then(function (response) {
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
        }
        return callback(err, false)
      }
      return response.json()
    })
    .then(function (response) {
      return callback(null, response)
    })
}

function keyMetafields (object) {
  var metafields = object.metafields
  if (metafields) {
    object.metafield = _.keyBy(metafields, 'key')
  }
  return object
}

export default Cosmic
