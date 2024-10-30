export const SCHOOL_TABLE_CONFIG = {
    paginator: {
      first: 0,
      rows: 10,
      rowsPerPageOptions: [10, 20, 50, 100],
    },
    headers: [
      {
        cols: [
          {
            label: 'School Name',
            valueField: 'name',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'School ID',
            valueField: 'id',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'Address',
            valueField: 'address',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'City',
            valueField: 'city',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'District',
            valueField: 'district',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'State',
            valueField: 'state',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'PIN Code',
            valueField: 'postalCode',
            classes: 'text-right',
            selected: true
          },
          {
            label: 'Country',
            valueField: 'country',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'Phone',
            valueField: 'phone',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'Email',
            valueField: 'gmail',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'Established Year',
            valueField: 'establishedYear',
            classes: 'text-right',
            selected: true
          },
          {
            label: 'Board Affiliation',
            valueField: 'boardAffiliation',
            classes: 'text-left',
            selected: true
          },
          {
            label: 'Student Capacity',
            valueField: 'studentCapacity',
            classes: 'text-right',
            selected: true
          },
          {
            label: 'Current Student Count',
            valueField: 'currentStudentCount',
            classes: 'text-right',
            selected: true
          }
        ],
      },
    ],
  };
  