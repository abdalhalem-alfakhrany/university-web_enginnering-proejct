var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var validPhoneNumberRegex = /^\d{10}$/;
var password = '';
$(function () {
    'use strict';
    $('input[name="email"]').on('input', function () {
        if ($(this).val().match(validEmailRegex)) {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
    $('input[name="name"]').on('input', function () {
        if ($(this).val().length > 2) {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
    $('input[name="ph-number"]').on('input', function () {
        if ($(this).val().match(validPhoneNumberRegex)) {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
    $('textarea[name="message"]').on('input', function () {
        if ($(this).val().length > 15) {
            $(this).parent().find('span').css('background-color', 'green');
        } else {
            $(this).parent().find('span').css('background-color', 'red');
        }
    });
});