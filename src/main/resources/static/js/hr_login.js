var form =new Vue({
    el:'#loginForm',
    data:{
        url:'/hr/hr_loginPost',
        form:{
            mobile: '',
            password: ''
        }
    },
    methods:{
        login : function () {
            $.ajax({
                url: '/hr/login',
                type: 'POST',
                data: this.form,
                dataType: 'json',
                success: function (msg) {
                    if (msg == '0') {
                        layer.msg('您的账号或密码输入错误！！！');
                    } else {
                        //layer.msg('登录成功，3S后跳转！');
                        //setTimeout(function () {
                            self.location = '/';
                       // }, 3000);
                    }
                }, error: function (msg) {
                    layer.msg('登录出了点小错误哦！！！');
                }

            });
        }
    }
});
