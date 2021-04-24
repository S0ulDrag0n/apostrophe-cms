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
      name: 'headingSize',
      type: 'range',
      label: 'Heading size',
      min: 1,
      max: 6,
      step: 1,
      value: 5,
    },
    {
      name: 'subtitle',
      type: 'string',
      label: 'Subtitle',
    },
    {
      name: 'subtitleSize',
      type: 'range',
      label: 'Subtitle size',
      min: 1,
      max: 6,
      step: 1,
      value: 6,
    },
    {
      name: 'content',
      type: 'area',
      label: 'Content',
      options: {
        widgets: {
          'apostrophe-images': {},
          'apostrophe-rich-text': {
            toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink', 'Anchor', 'Table', 'BulletedList', 'Blockquote', 'Strike', 'Subscript', 'Superscript', 'Split' ],
            styles: [
              { name: 'Paragraph', element: 'p' },
              { name: 'Title Heading', element: 'h1' },
              { name: 'Section heading', element: 'h2' },
              { name: 'Sub-section heading', element: 'h3' }
            ],
            defaultElement: 'h2'
          },
          'bs-grid': {},
          'bs-card': {},
          'apostrophe-forms': {},
        },
      },
    },
  ],
};
