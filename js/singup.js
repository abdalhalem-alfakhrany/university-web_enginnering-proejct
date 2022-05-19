var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var password = '';
$(function () {
    'use strict';
    $('input[name="email"]').on('input', function () {
        console.log($(this).val());
        if ($(this).val().match(validEmailRegex)) {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
    $('input[name="username"]').on('input', function () {
        console.log($(this).val());
        if ($(this).val().length > 2) {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
    $('input[name="password"]').on('input', function () {
        console.log($(this).val());
        if ($(this).val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            password = $(this).val();
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
    $('input[name="password-repeate"]').on('input', function () {
        console.log($(this).val());
        if ($(this).val() === password && password !== '') {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
});