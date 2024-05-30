"use strict";

const slugify = require("slugify");

function convert(input) {
  const str = input.toLowerCase();

  if (str.match(/\/(.*)/)) {
    const slug = slugify(str.replace(/(.+\/)(.*)$/, "$2"));
    return str.replace(/(.+\/)(.*)$/, `$1${slug}`);
  }
  return slugify(str)
}

//NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
function categoryCreate(categoryData, callback) {
  categoryData.category.slug = convert(categoryData.category.slug);
  callback(null, categoryData);
}

function categoryUpdate(categoryData, callback) {
  if ("slug" in categoryData.category) {
    categoryData.category.slug = convert(categoryData.category.slug);
  }
  callback(null, categoryData);
}

function topicCreate(topicData, callback) {
  topicData.topic.slug = convert(topicData.topic.slug);
  callback(null, topicData);
}

function topicEdit(topicData, callback) {
  //Here was a problem
  topicData.topic.slug = convert(topicData.topic.slug);
  callback(null, topicData);
}

function userCreate(userData, callback) {
  //If there will be username collision, userslug will be overridden by NodeBB...
  userData.user.userslug = convert(userData.user.userslug);
  callback(null, userData);
}

// not working :(
// function updateProfile(userData, callback) {
//   if (userData?.data?.username) {
//     userData.data.userslug = convert(userData.data.username)
//     userData.fields.push('userslug');
//   }
//   if (callback) {
//     callback(null, userData);
//   }
// }


module.exports = {
  categoryCreate,
  categoryUpdate,
  topicCreate,
  topicEdit,
  userCreate,
  // updateProfile,
};
