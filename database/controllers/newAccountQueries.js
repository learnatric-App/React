const { Parent, Children} = require('../models/newAccount');

class NewAccount {

  addParent = async (data) => {
    // console.log('data for adding parent toDB: ',data)
    try {
      const newParent = await Parent.create({
        FirstName: data.parent_info.FirstName,
        LastName: data.parent_info.LastName,
        Email: data.parent_info.Email, 
        password: data.parent_info.password,
        hear_about_us: data.parent_info.hear_about_us,
        child_count: data.child_count,
      })

      // console.log('newParent id: ', newParent.id)
      return newParent.id;
    } catch (e) {
      throw new Error(e);
    }
  }

  addChild = async (data) => {
    console.log('data: ', data)
    try {
      const newChild = await Children.create({
        firstName: data.firstName,
        lastName: data.lastName,
        birthday: data.birthday,
        gender: data.gender,
        grade: data.grade,
        school: data.school,
        teachersName: data.teachersName,
        teachersEmail: data.teachersEmail,
        schoolDistrict: data.schoolDistrict,
        isOkayToEmailTeacher: data.isOkayToEmailTeacher,
        parentId: data.parentID,
      })
    } catch (e) {
      throw new Error(e);
    }
  }

}

module.exports = { NewAccount }