import axios from 'axios'

// axios用法很简单，请参考这里：https://github.com/mzabriskie/axios

/**
 * 传入用户名，获取用户的github上仓库信息
 * @param  {[type]} username [description]
 * @return {[type]}          [description]
 */
function getRepos(username){
  // 这里使用了 ES6 的字符串模板
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

/**
 * 传入用户名，获取用户github上的基本信息
 * @param  {[type]} username [description]
 * @return {[type]}          [description]
 */
function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

export default function getGithubInfo(username){
  // 将请求回来的数据做了一个 merge 操作
  return axios.all([getRepos(username),getUserInfo(username)])
  .then((arr) => ({ repos: arr[0].data, bio: arr[1].data}));
}
