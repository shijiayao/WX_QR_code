//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    menu: [
      {
        name: '生成二维码',
        idx: 1
      },
      {
        name: '未开发',
        idx: 2
      },
      {
        name: '未开发',
        idx: 3
      },
      {
        name: '未开发',
        idx: 4
      }
    ]
  },
  //事件处理函数
  bindViewTap(event) {
    let domData = event.target.dataset;
    let url = '';

    switch (domData.idx) {
      case 1:
        url = '../qrcode/qrcode';
        break;

      case 2:
        url = '';
        break;

      case 3:
        url = '';
        break;

      case 4:
        url = '';
        break;

      default:
        break;
    }

    if (!url) {
      return;
    }

    wx.switchTab({
      url
    });

    console.log(url);
  }
});
