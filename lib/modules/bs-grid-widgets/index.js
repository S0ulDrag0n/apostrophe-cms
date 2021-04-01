const columns = [];

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    columns.push({
      name: `col${i}${j}`,
      type: 'area',
      contextual: true,
    });
  }
}

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Bootstrap Grid',
  addFields: [
    {
      name: 'numRows',
      type: 'range',
      label: 'Number of rows',
      min: 1,
      max: 12,
      step: 1,
    },
    {
      name: 'numCols',
      type: 'range',
      label: 'Number of columns',
      min: 1,
      max: 12,
      step: 1,
    },
  ].concat(columns),
};
