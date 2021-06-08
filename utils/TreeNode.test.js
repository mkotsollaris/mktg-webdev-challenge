import { convertInputToTreeNode } from './TreeNode'

// taken from the GraphQL query result https://cda-explorer.datocms.com/?apitoken=dc45ff8c8b27dd22a7c24aaaf8aa75&query=query%20%7B%0A%20%20allDepartments%28first%3A%20100%29%20%7B%0A%20%20%20%20name%0A%20%20%20%20parent%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20allPeople%28first%3A%20100%29%20%7B%0A%20%20%20%20name%0A%20%20%20%20avatar%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20department%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
let input = [
  {
    name: 'Engineering',
    id: '10893315',
    parent: null,
  },
  {
    name: 'Legal',
    id: '10893316',
    parent: null,
  },
  {
    name: 'IT',
    id: '10893317',
    parent: null,
  },
  {
    name: 'Design',
    id: '10893318',
    parent: null,
  },
  {
    name: 'Finance',
    id: '10893319',
    parent: null,
  },
  {
    name: 'Marketing',
    id: '10893320',
    parent: null,
  },
  {
    name: 'Research',
    id: '10893321',
    parent: null,
  },
  {
    name: 'Workplace',
    id: '10893322',
    parent: null,
  },
  {
    name: 'HR',
    id: '10893325',
    parent: null,
  },
  {
    name: 'Security',
    id: '10893309',
    parent: {
      id: '10893317',
      name: 'IT',
    },
  },
  {
    name: 'Accounts Receivable',
    id: '10893312',
    parent: {
      id: '10893319',
      name: 'Finance',
    },
  },
  {
    name: 'Release Engineering',
    id: '10893314',
    parent: {
      id: '10893315',
      name: 'Engineering',
    },
  },
  {
    name: 'Quality Assurance',
    id: '10893324',
    parent: {
      id: '10893314',
      name: 'Release Engineering',
    },
  },
  {
    name: 'Payroll',
    id: '10893326',
    parent: {
      id: '10893325',
      name: 'HR',
    },
  },
  {
    name: 'Sanitation',
    id: '10893327',
    parent: {
      id: '10893329',
      name: 'Facilities',
    },
  },
  {
    name: 'Partners',
    id: '10893328',
    parent: {
      id: '10893320',
      name: 'Marketing',
    },
  },
  {
    name: 'Facilities',
    id: '10893329',
    parent: {
      id: '10893322',
      name: 'Workplace',
    },
  },
  {
    name: 'Education',
    id: '10893311',
    parent: {
      id: '10893320',
      name: 'Marketing',
    },
  },
  {
    name: 'Web dev',
    id: '10893313',
    parent: {
      id: '10893315',
      name: 'Engineering',
    },
  },
  {
    name: 'Recruiting',
    id: '10893323',
    parent: {
      id: '10893325',
      name: 'HR',
    },
  },
  {
    name: 'GTM',
    id: '10893310',
    parent: {
      id: '10893320',
      name: 'Marketing',
    },
  },
]

test('convertDepartmentsToTreeNode', () => {
  let result = convertInputToTreeNode(input)
  expect(result.children.length).toEqual(9)
})
