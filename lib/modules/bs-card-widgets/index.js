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
      options: {
        widgets: {
          'apostrophe-images': {},
          'apostrophe-rich-text': {},
          'bs-grid': {},
          'bs-card': {},
        },
      },
    },
  ],
};
