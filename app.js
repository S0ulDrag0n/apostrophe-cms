const path = require('path');

// pm2-runtime is great at running node apps inside containers properly,
// but its arguments can be mistaken for a command line Apostrophe task
if (process.argv.find(arg => arg.match(/ProcessContainer/))) {
  process.argv = [ process.argv[0], 'app.js' ];
}

const apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',
  baseUrl: 'https://mycovidexp.com',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  // bundles: [ 'custom-blog' ],
  modules: {

    // Apostrophe module configuration
    'custom-blog': {
      contextual: true,
    },
    'custom-blog-pages': {
      extend: 'apostrophe-pieces-pages',
    },
    'custom-blog-widgets': {
      extend: 'apostrophe-pieces-widgets',
    },
    'apostrophe-pages': {
      // We must list `apostrophe-blog-page` as one of the available page types
      types: [
        {
          name: 'custom-blog-page',
          label: 'Blog',
        },
        {
          name: 'home',
          label: 'Home',
        },
        {
          name: 'single',
          label: 'Single',
        },
      ],
    },
    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    'apostrophe-images': {
      enableAltField: true
    },
    'apostrophe-assets': {
      minify: (process.env.ENV === 'prod')
    },
    'apostrophe-forms': {
      // Best practice: set to first or last so that inputs are nested in labels
      // and easier to style
      optionLabelPosition: 'last',
      saveSubmissions: false,
    },
    'apostrophe-forms-widgets': {},
    // Enable only the field widgets that your application needs to make it
    // easier for application/website managers.
    'apostrophe-forms-text-field-widgets': {},
    'apostrophe-forms-textarea-field-widgets': {},
    // 'apostrophe-forms-file-field-widgets': {},
    // 'apostrophe-forms-select-field-widgets': {},
    // 'apostrophe-forms-radio-field-widgets': {},
    // 'apostrophe-forms-checkboxes-field-widgets': {},
    'apostrophe-forms-boolean-field-widgets': {},
    // 'apostrophe-forms-conditional-widgets': {},
    // 'apostrophe-permissions': {
    //   construct: function(self, options) {
    //     // Required if you want file fields to work on public pages.
    //     self.addPublic([ 'edit-attachment' ]);
    //   }
    // }
    'apostrophe-email': {
      nodemailer: {
        host: process.env.MAIL_HOST,
        port: 587,
        auth: {
          user: process.env.CONTACT_EMAIL,
          pass: process.env.CONTACT_PASSWORD,
        },
      },
    },
    'apostrophe-seo': {},
    'bs-card-widgets': {},
    'bs-grid-widgets': {},
  }
});
