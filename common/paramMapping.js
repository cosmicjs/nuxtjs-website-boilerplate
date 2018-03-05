import config from '../config/config'
function generateTouristPlaceObject (payload) {
  let params = {
    write_key: config.bucket.write_key,
    type_slug: config.object_type,
    slug: payload.slug,
    title: payload.title,
    content: payload.content,
    metafields: [{
      required: true,
      value: JSON.stringify(payload.metadata.place_description),
      key: 'place_description',
      title: 'place description',
      type: 'text',
      children: false,
      has_length_edit: true,
      parent: false
    },
    {
      value: payload.metadata.place_height,
      key: 'place_height',
      title: 'place height',
      type: 'text',
      children: false,
      has_length_edit: true,
      parent: false
    },
    {
      value: payload.metadata.suitable_seasons,
      key: 'suitable_seasons',
      title: 'suitable seasons',
      type: 'text',
      children: false,
      has_length_edit: true,
      parent: false
    },
    {
      value: payload.metadata.expected_expence,
      key: 'expected_expence',
      title: 'expected expence',
      type: 'text',
      children: false,
      has_length_edit: true,
      parent: false
    },
    {
      value: payload.metadata.country,
      key: 'country',
      title: 'country',
      type: 'text',
      children: false,
      has_length_edit: true,
      parent: false
    },
    {
      value: payload.metadata.transportation,
      key: 'transportation',
      title: 'transportation',
      type: 'text',
      children: false,
      has_length_edit: true,
      parent: false
    },
    {
      required: true,
      value: payload.metadata.place_img1,
      key: 'place_img1',
      title: 'place img1',
      type: 'image',
      children: false,
      has_length_edit: true,
      parent: false
    },
    ]
  }

  return params
}

export {generateTouristPlaceObject}
