'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PaySubscription = exports.GetSubscriptions = exports.CreateSubscription = undefined;

var _api = require('./api');

var CreateSubscription = exports.CreateSubscription = async function CreateSubscription(subscription_info) {
    try {
        var created_subscription = _api.Epayco.subscriptions.create(subscription_info);
        var result = await created_subscription;
        return result;
    } catch (error) {
        console.error('Error: ' + err);
    }
};
var GetSubscriptions = exports.GetSubscriptions = async function GetSubscriptions() {
    try {
        var subscriptions = _api.Epayco.subscriptions.list();
        var result = await subscriptions;
        console.info(result);
    } catch (error) {
        console.error('Error: ' + error);
    }
};

var PaySubscription = exports.PaySubscription = async function PaySubscription(subscriptionInfo) {
    try {
        var payment = _api.Epayco.subscriptions.charge(subscriptionInfo);
        var result = await payment;
        console.info(result);
    } catch (error) {
        console.error('Error: ' + error);
    }
};