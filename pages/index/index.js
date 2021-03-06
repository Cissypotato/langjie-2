const app = getApp();
Page({
    data: {
        showLogin: false,
        service_index: 0,
        loginData: {},
        second: 60,
        showSecond: false,
        service_num: 1,
        isAddNum: false,
        flag: true,
        //以下为页面初始需要从服务端加载的数据
        info_data: {//页面说明数据，包含产品名称、优惠信息、公司信息等
            info_1: '日常家居保洁服务',
            info_2: '本服务有一名保洁员上门服务，请参考您的房屋面积下单',
            info_3: '新用户现在下单 直减15元',
            info_4: '本服务由成都斓设网络科技有限公司提供技术支持',
            info_5: '联系电话：028-88888888',
        },
        banner_data: [//banner数据
            // {
            //     img:'../../images/b1.jpg',
            // },{
            //     img:'../../images/b1.jpg',
            // },{
            //     img:'../../images/b1.jpg',
            // }
        ],
        serve_data: [//服务选择数据
            // {
            //     id:8,
            //     title:'中小面积房屋 日常家居保洁',
            //     area:'50m²-90m²',
            //     time:'2小时',
            //     price:66,
            // },{
            //     id: 9,
            //     title: '中大面积房屋 日常家居保洁',
            //     area: '90m²-120m²',
            //     time: '3小时',
            //     price:88,
            // },{
            //     id: 10,
            //     title: '大面积房屋 日常家居保洁',
            //     area: '120m²以上',
            //     time: '4小时',
            //     price:149,
            // }
        ],
        explain_data: [//费用说明
            // {
            //     t:'1、2小时起服务，不足2小时按照2小时收费，2小时外每超过20分钟按1小时收费。',
            // },{
            //     t:'2、家电、厨房电器的内部清洁不在日常保洁的范围内，此类需求请参考家电清洗服务。',
            // },{
            //     t:'3、室外玻璃不在清洗服务范围内，此类需求请参考擦玻璃服务。',
            // }
        ],
        question_data: [//常见问题数据
            // {
            //     q:'问：服务人员上门服务时您发生人身财产安全损失怎么办？',
            //     t:'答：下单成功后，到家精选为用户购买了平安保险的“单单保”保险，在保障期内，若服务过程中产生人身、财产损失，请收集相关证据，并在服务预约开始48小时内通过投诉维权流程进行报案。订单未到预约服务时间、订单取消、未在线上支付尾款的，保单无效不能保险报案。'
            // },{
            //     q: '问：订单取消，支付的款项会退还吗？',
            //     t: '答：距离预约服务时间2小时外取消订单，将全额退款到支付账户；2小时内取消订单，平台将扣除20%的支付金额。另将支付金额的80%原路退款到支付账户。取消订单后，优惠券会退回到账户以便再次使用，'
            // },{
            //     q: '问：商家乱加价怎么办？',
            //     t: '答；可在58同城APP进行投诉维权，到家精选将介入处理，如核实商家确存在乱加价行为，平台可监督商家退回多收费部分。已取消的订单，平台不予受理。'
            // },
        ],
        comment_data: [//评论数据
            // {
            //     face:'../../images/face/face_1.jpg',
            //     tel:'135********',
            //     star:'../../images/face/stars.png',
            //     text:' 这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。'
            // },{
            //     face: '../../images/face/face_2.jpg',
            //     tel: '135********',
            //     star: '../../images/face/stars.png',
            //     text: ' 这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。'
            // },{
            //     face: '../../images/face/face_3.jpg',
            //     tel: '135********',
            //     star: '../../images/face/stars.png',
            //     text: ' 这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。这是用户的一篇评论。'
            // },{
            //     face: '../../images/face/face_4.jpg',
            //     tel: '135********',
            //     star: '../../images/face/stars.png',
            //     text: ' 这是用户的一篇评论。这是用户的一篇评论。'
            // },            
        ],
        recommend_data: [//推荐信息
            // {
            //     name:'石材养护',
            //     info:'专业、规范的保养和防护措施彰显装饰石材的高贵品质、延长使用寿命',
            //     link:'面议',
            // },{
            //     name: '窗帘清洗',
            //     info: '专业、细致的清洗和保养措施精心呵护布匹纹料不受损伤，柔软洁净',
            //     link: '面议',
            // },{
            //     name: '家电清洗',
            //     info: '高效服务、家具分类清洗，保洁除菌、内外洁净，家具表面无尘亮洁',
            //     link: '面议',
            // },{
            //     name: '灯具清洗',
            //     info: '清洁护理细致周到，灯具材料分类处理，除尘去污、消毒杀菌、洁净闪亮',
            //     link: '面议',
            // },
            // {
            //     name: '地毯清洗',
            //     info: '清洗保养认真全面，精心呵护、除螨去尘，保证地毯柔软洁净、无尘清香',
            //     link: '面议',
            // },
            // {
            //     name: '木地板养护',
            //     info: '周到贴心、滋养修护、温和杀菌，保护木质地板原生色泽、清亮质感',
            //     link: '面议',
            // }
        ],


        //以下为页面动画相关参数
        clientHeight: wx.getSystemInfoSync().windowHeight,
        bubble_anima: '',
        tab_index: 0,
        tab_title_show: false,
    },
    onLoad: function (options) {
        // this.getCode()

        //获取页面ID
        let type_id = options.id ? options.id : 6
        console.log(type_id, "type_id")
        this.setData({ type_id })
        this.getInitData(type_id)
        //获取用户信息
        let user_id = wx.getStorageSync("token")
        this.setData({ user_id });

        //获取分享者id
        let data = wx.getLaunchOptionsSync();
        let share_id = data.query.share_id
        console.log(share_id,"share_id")
        if (share_id) {
            wx.setStorageSync('share_id', share_id)
            this.setData({
                share_id
            })
        }

        //开启数据读取
        wx.showLoading({
            title: '',
        })
        setTimeout(() => {
            this.img_ok()
        }, 1000)
        wx.hideLoading();


    },
    onShow() {
        //获得物管id
        let obj = wx.getLaunchOptionsSync()
        let vip_state = wx.getStorageSync("vip_state")
        console.log(vip_state, 'vip_state')
        if (obj.query.server_id) {
            wx.setStorageSync('server_id', obj.query.server_id)
            console.log(obj.query.server_id)
        }
        if (vip_state == 1) {
            this.setData({
                flag: false
            })
            this.getInitData(this.data.type_id)
            console.log(this.data.type_id, 'this.data.type_id')
        }

        this.setData({
            vip_state: vip_state
        })


    },
    onReady: function () {
        //气泡 初始化
        var animation = wx.createAnimation({
            duration: 0,
            timingFunction: 'ease',
            delay: 0
        });
        animation.opacity(0).translate(200, 0).step()
        this.setData({
            bubble_anima: animation.export()
        });
    },
    getInitData(type_id) {
        wx.request({
            url: 'https://ljjz.guaishe.com/index.php/index/Services/returnServices2',
            data: {
                type_id: type_id
            },
            fail: (res) => { },
            success: (result) => {
                let data = result.data.info
                let info_data = this.data.info_data
                info_data.info_1 = data.title.name
                info_data.info_2 = data.title.names

                //价格数字变换
                let serve_data = data.services
                if (this.data.vip_state == 1) {
                    for (let k = 0; k < serve_data.length; k++) {
                        let price = String(serve_data[k].vip_price);
                        serve_data[k].price_a = price.split('');
                    };
                } else if (this.data.vip_state == 0) {
                    for (let k = 0; k < serve_data.length; k++) {
                        let price = String(serve_data[k].price);
                        serve_data[k].price_a = price.split('');
                    };
                }



                let explain_data = []
                explain_data.push({ t: data.services[0].explain1 })
                explain_data.push({ t: data.services[0].explain2 })
                explain_data.push({ t: data.services[0].explain3 })
                let a = data.services[0].content.replace(/\<img/gi, '<img width="100%" height="auto"')//富文本
                // console.log(data.services[0].comments)
                let comment_data = data.services[0].comments
                for (let i = 0; i < comment_data.length; i++) {
                    comment_data[i].user_tel = comment_data[i].user_tel.replace(/^(\d{3})\d{4}(\d+)/, "$1****$2")
                }
                let banner_data = []
                for (let i = 0; i < data.img.length; i++) {
                    // console.log(data.img[i])
                    if (data.img[i].img.slice(-3) == "jpg") {
                        banner_data.push(data.img[i])
                    }
                }
                // console.log(data.img,"data.img")
                // console.log( banner_data," banner_data")
                this.setData({
                    banner_data,
                    info_data,
                    serve_data,
                    question_data: data.problem,
                    comment_data,
                    explain_data,
                    like: data.like,
                    a

                })

            },
        })
    },
    toIndex(e) {
        let id = e.currentTarget.dataset.id
        if (id == 33) {
            wx.navigateTo({
                url: '../summer/airCondition',
            })
        } else if (id) {
            wx.navigateTo({
                url: './index?id=' + id,
            })
        }
    },
    toSummer() {
        wx.navigateTo({
            url: '../summer/airCondition',
        })
    },
    img_ok() {
        //获取页面标题的高度位置，写入数组，一定要在页面元素加载完成后执行
        var then = this;

        let arr = ['t1', 't2', 't3', 't4'];
        let t_list = new Array();
        for (let k = 0; k < 4; k++) {
            let p1 = arr[k];
            let p2 = '#' + p1;
            let t = wx.createSelectorQuery();
            t.select(p2).boundingClientRect()
            t.exec(function (res) {
                t_list[k] = res[0].top;
            });

        };
        then.setData({
            t_list,
        });
        // setTimeout(function () {
        //     let arr = ['t1', 't2', 't3', 't4'];
        //     let t_list = new Array();
        //     for (let k = 0; k < 4; k++) {
        //         let p1 = arr[k];
        //         let p2 = '#' + p1;
        //         let t = wx.createSelectorQuery();
        //         t.select(p2).boundingClientRect()
        //         t.exec(function (res) {
        //             t_list[k] = res[0].top;
        //         });

        //     };
        //     console.log(t_list)
        //     then.setData({
        //         t_list,
        //     });
        // },300);
    },
    chooseService(e) {//选择服务
        let id = e.currentTarget.dataset.id;
        let index = e.currentTarget.dataset.index;
        let service_name = this.data.serve_data[index].title
        let service_price = this.data.serve_data[index].price
        this.setData({
            service_index: index,
            service_id: id,
            service_name,
            service_price
        });
    },
    makePhone() {
        wx.makePhoneCall({
            phoneNumber: '028-83026224'
        })
    },
    reserve() {//预约按钮
        if (!this.data.user_id) {
            this.setData({
                showLogin: true
            });
        } else {
            if (this.data.type_id == 26) {
                this.setData({
                    isAddNum: true
                })
                let service_name = this.data.serve_data[this.data.service_index].title
                let service_price = this.data.serve_data[this.data.service_index].price
                console.log(service_name, 'service_name')
                this.setData({
                    service_name,
                    service_price
                })
            } else {
                let id = Number(this.data.serve_data[this.data.service_index].id);

                wx.navigateTo({
                    url: '../order/order?service_id=' + id,
                });
            }

        };
    },
    getInputValue(e) {
        let loginData = this.data.loginData
        let value = e.detail.value
        let name = e.currentTarget.dataset.name
        loginData[name] = value
        // console.log(e)
        this.setData({
            loginData
        });
    },
    getCode() { //获取手机验证码

        let tel = this.data.loginData.tel
        let second = this.data.second
        if (!tel) {
            app.alert("请输入电话号码")
        } else if (!(/^1[3456789]\d{9}$/.test(tel))) {
            app.alert("请输入正确电话号码")
        } else {
            this.setData({
                showSecond: true
            })
            let interval = setInterval(() => {
                this.setData({
                    second: second--
                });
                if (second <= 0) {
                    clearInterval(interval)
                    this.setData({
                        // time: '重新获取',
                        second: 60,
                        // disabled: false,
                        showSecond: false

                    })
                }
            }, 1000);
            wx.request({
                url: 'https://ljjz.guaishe.com/index.php/index/Login/returnCode',
                data: {
                    tel: tel
                },
                success: (res) => {
                    console.log(res)
                    if (res.data.state == true) {
                        this.setData({
                            tel_code: res.data.info,
                            tel_1: res.data.tel
                        })
                    } else {
                        app.alert(res.data.info)
                    }

                },
            })
        }
    },
    closeLogin() {
        this.setData({
            showLogin: false
        })
    },
    login() { //登录
        let code = this.data.loginData.code
        let tel = this.data.loginData.tel
        let tel_1 = this.data.tel_1
        let server_id = wx.getStorageSync('server_id')
        if (Number(code) !== Number(this.data.tel_code)) {
            app.alert("验证码填写错误，请重新填写")
        } else if (tel !== tel_1) {
            app.alert("手机号码与验证码不匹配，请重新填写")
        } else {
            wx.request({
                url: 'https://ljjz.guaishe.com/index.php/index/Login/returnId1',
                data: {
                    tel: this.data.loginData.tel,
                    server_id: server_id ? server_id : 7
                },
                success: (res) => {
                    console.log(res)
                    if (res.data.code == 200) {
                        wx.setStorageSync("token", res.data.id)
                        console.log(res.data.state, "res.data.state")
                        wx.setStorageSync("vip_state", res.data.vip)
                        if (res.data.vip == 1) {
                            this.setData({
                                flag: false
                            })
                        }
                        this.setData({
                            vip_state: res.data.vip,
                            showLogin: false,
                            user_id: res.data.id
                        })

                        app.alert("登录成功")
                        this.getInitData(this.data.type_id)
                    } else {
                        app.alert("发生错误，请稍后重试")
                    }

                },
            })
        }
    },
    // toIndex(e) {
    //     let id = e.currentTarget.dataset.id
    //     // this.onLoad({id:id})
    //     wx.navigateTo({
    //         url: './index?id='+id,
    //     })
    // },
    toMyOrder(e) {
        if (!this.data.user_id) {
            this.setData({
                showLogin: true
            })
        } else {
            wx.navigateTo({
                url: '../myOrder/myOrder?user_id=' + this.data.user_id,
            })
        }
    },

    tabClick(e) {//页面导航
        this.setData({
            tab_index: e.currentTarget.dataset.id
        });
        console.log(this.data.tab_index)
        console.log(e.currentTarget.dataset.id)
        let tab_list = this.data.t_list;
        console.log(tab_list)
        let k = Number(1);
        let d = (Number(e.currentTarget.dataset.id) + k) * 150;
        wx.pageScrollTo({
            scrollTop: tab_list[e.currentTarget.dataset.id] - 170,
            duration: d
        });
        // if(e.currentTarget.dataset.id==0){

        // }else if(e.currentTarget.dataset.id==1){
        //     let distance=
        //     wx.pageScrollTo({
        //         scrollTop: tab_list[e.currentTarget.dataset.id]-170,
        //         duration: d
        //     });  
        // }

    },
    onPageScroll: function (e) {//监测滚动事件
        // console.log(e.scrollTop)
        //滚动响应tab
        let tab_list = this.data.t_list;
        if (e.scrollTop < tab_list[0]) {
            this.setData({
                tab_index: 0
            });
        }
        if (e.scrollTop > tab_list[0] && e.scrollTop < tab_list[1]) {
            this.setData({
                tab_index: 1
            });
        }
        if (e.scrollTop > tab_list[1] && e.scrollTop < tab_list[2]) {
            this.setData({
                tab_index: 2
            });
        }
        if (e.scrollTop > tab_list[2]) {
            this.setData({
                tab_index: 3
            });
        };

        //tab锁定
        if (e.scrollTop > 460) {
            this.setData({
                tab_title_show: true,
            });
        } else {
            this.setData({
                tab_title_show: false,
            });
        };

        //气泡显示判断
        if (e.scrollTop > 1500) {
            var animation = wx.createAnimation({
                duration: 1000,
                timingFunction: 'ease',
                delay: 200
            });
            animation.opacity(1).translate(0, 0).step()
            this.setData({
                bubble_anima: animation.export()
            });
        } else {
            var animation = wx.createAnimation({
                duration: 1000,
                timingFunction: 'ease',
                delay: 200
            });
            animation.opacity(0).translate(200, 0).step()
            this.setData({
                bubble_anima: animation.export()
            });
        }
    },
    tap_info(e) {
        let t = Boolean(this.data.mass_state);
        this.setData({
            mass_state: !t
        });
    },
    onShareAppMessage: function (res) {//分享页面
        console.log(this.data.info_data.info_1)
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        console.log(res)
        console.log(this.data.type_id)
        return {
            title: this.data.info_data.info_1,
            path: '/pages/index/index?id=' + this.data.type_id
        }
    },
    // getSCode(){//获取小程序二维码
    //     wx.request({
    //       url: 'https://ljjz.guaishe.com/index.php/index/login/getAccessToken',
    //       complete: (res) => {},
    //       data: {
    //           path:"pages/index/index?server_id=1"
    //         } ,

    //       success: (result) => {
    //           console.log(result)
    //       },
    //     })
    // },
    handleServiceNum(e) {
        let type = e.currentTarget.dataset.type
        let service_num = this.data.service_num
        if (type == "reduce" && service_num > 1) {
            service_num = service_num - 1
            this.setData({ service_num })
        } else if (type == "add") {
            service_num++
            this.setData({ service_num })
        } else if (type == "reduce" && service_num == 1) {
            app.alert('不能再减啦')
        }
    },
    move() {
        return
    },
    numConfirm() {
        let service_num = this.data.service_num
        let id = Number(this.data.serve_data[this.data.service_index].id);
        wx.navigateTo({
            url: '../order/order?service_id=' + id + '&service_num=' + service_num,
        });
    },
    closeAddNum() {
        this.setData({
            isAddNum: false
        })
    },
    a() {
        console.log("阻止冒泡")
    },
    goVip() { //开通vip
        if (this.data.user_id) {
            wx.navigateTo({
                url: '../vip/vip',
            })

        } else {
            this.setData({
                showLogin: true
            });
        }
    }
})