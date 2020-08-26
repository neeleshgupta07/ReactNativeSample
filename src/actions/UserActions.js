export const addUser = (name, city, email) => {
  return {
    type: 'ADD_USER',
    payload: {name: name, city: city, email: email},
  };
};

export const addUserEducation = (collage, education) => {
  // return {
  //   type: 'ADD_USER_EDUCATION',
  //   payload: {collage: collage, education: education},
  // };
  return (dispatch) => {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'ADD_USER_EDUCATION',
          payload: {
            collage: data.students[1].company,
            education: data.students[1].skill,
          },
        });
      });
  };
};

export const deleteUser = (user) => {
  return {
    type: 'DELETE_USER',
    payload: user,
  };
};
