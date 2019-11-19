const baseURL = 'https://api.zbztb.cn/api/public/v1/';
export const myrequest = (obj) => {
  obj.header=obj.header||{};
  if(obj.url.includes('my/')===true){
    obj.header.Authorization=wx.getStorageSync('token')
  }
  wx.showLoading({
    title: '努力加载中...',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...obj,
      url: baseURL + obj.url,
      success: res => {
        resolve(res.data.message)
      },
      fail: err => {
        console.log('请求失败', err)
      },
      complete: res => {
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    })
  })

}