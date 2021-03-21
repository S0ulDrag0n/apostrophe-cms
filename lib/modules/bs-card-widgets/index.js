module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Bootstrap Card',
  addFields: [
    {
      name: 'heading',
      type: 'string',
      label: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      label: 'Subtitle',
    },
    {
      name: 'content',
      type: 'area',
      label: 'Content',
      // required: true,
      options: {
        widgets: {
          'apostrophe-rich-text': {
            toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
          },
          'apostrophe-images': {
            size: 'full'
          },
        },
      },
    },
  ],
};
