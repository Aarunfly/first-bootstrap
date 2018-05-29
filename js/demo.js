var emailExp = /^[a-zA-z0-9_-]+@[a-zA-z0-9_-]+(\.[a-zA-z0-9_-]+)+$/;
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var keyExp = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/;
var obj = {
    email: false,
    passwrd: false,
}
$('#inputEmail3').on('blur', function () {
    obj.email = emailExp.test($(this).val());
    console.log(obj.email);
    if (obj.email) {
        $(this).parents('.form-group').removeClass('has-error').addClass('has-success')
    } else {
        $(this).parents('.form-group').removeClass('has-success').addClass('has-error')
    }
})
$('#inputPassword3').on('blur', function () {
    obj.passwrd = keyExp.test($(this).val());
    console.log(obj.passwrd);
    if (obj.passwrd) {
        $(this).parents('.form-group').removeClass('has-error').addClass('has-success')
    } else {
        $(this).parents('.form-group').removeClass('has-success').addClass('has-error')
    }
})
$('#myButton').on('click', function () {
    
    if (obj.email && obj.passwrd) {
        console.log('cs');
        var $btn = $(this).button('loading')
        // business logic...
        setTimeout(function(){
            $btn.button('reset')
        },2000)
    }
})
 $('.delvalue').on('click',function(){
        $('#inputEmail3').add($('#inputPassword3')).val('');
        $('.form-group').removeClass('has-success has-error');
    })