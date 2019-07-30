const util = require('../../utils/util.js');

Page({
  data: {
    QR_image: '',
    QR_text: '请输入需要生成二维码的内容'
  },
  // input 输入框事件
  bindKeyInput(event) {
    this.setData({
      QR_text: event.detail.value
    });
  },
  // 生成二维码按钮事件
  generatQRCode(event) {
    let text = this.data.QR_text;
    // let sizeObj = this.setCanvasSize();

    let imgSrc = util.QRCode.drawImg(text, {
      typeNumber: 4,
      errorCorrectLevel: 'M',
      size: 500
    });

    this.setData({
      QR_image: imgSrc
    });
  },
  //适配不同屏幕大小的canvas
  setCanvasSize: function() {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750 / 686; //不同屏幕下canvas的适配比例；设计稿是750宽
      var width = res.windowWidth / scale;
      var height = width; //canvas画布为正方形
      size.w = width;
      size.h = height;
    } catch (e) {
      // Do something when catch error
      console.log('获取设备信息失败' + e);
    }
    return size;
  }
});
