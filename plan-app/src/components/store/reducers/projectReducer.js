const initState = {
  projects: [
    {id: "1", title: "Finding Mario", content: 'ad'},
    {id: "2", title: "The universe is big", content: 'ad'},
    {id: "3", title: "The car of the year", content: 'ad'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default: 
      // console.log('default');
      return state;
  }
}

export default projectReducer;