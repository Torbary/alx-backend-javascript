const fs = require('fs');


function countStudents(path) {
  // Attempt to read the database file synchronously
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Database is empty');
    }

    const header = lines[0].split(',');
    const fieldIndexMap = {};

    // Find the index of the 'field' column
    for (let i = 0; i < header.length; i++) {
      if (header[i] === 'field') {
        fieldIndexMap['field'] = i;
        break;
      }
    }

    if (!fieldIndexMap.hasOwnProperty('field')) {
      throw new Error('Invalid database format: Missing "field" column');
    }

    const counts = {};
    const lists = {};

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const firstName = values[0];
      const field = values[fieldIndexMap.field];

      if (!counts[field]) {
        counts[field] = 0;
        lists[field] = [];
      }

      counts[field]++;
      lists[field].push(firstName);
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const field in counts) {
      if (counts.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
