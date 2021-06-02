'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PaySubscription = exports.GetSubscriptions = exports.CreateSubscription = undefined;

var _api = require('./api');

var CreateSubscription = exports.CreateSubscription = async function CreateSubscription(urlApi, subscription_info) {
    try {
        var epayco = await (0, _api.Epayco)(urlApi);
        var created_subscription = epayco.subscriptions.create(subscription_info);
        var result = await created_subscription;
        return result;
    } catch (error) {
        console.error('Error: ' + error);
    }
};
var GetSubscriptions = exports.GetSubscriptions = async function GetSubscriptions(urlApi) {
    try {
        var epayco = await (0, _api.Epayco)(urlApi);
        var subscriptions = epayco.subscriptions.list();
        var result = await subscriptions;
        console.info(result);
    } catch (error) {
        console.error('Error: ' + error);
    }
};

var PaySubscription = exports.PaySubscription = async function PaySubscription(urlApi, subscriptionInfo) {
    try {
        var epayco = await (0, _api.Epayco)(urlApi);
        var payment = epayco.subscriptions.charge(subscriptionInfo);

        var result = await payment;
        console.info(result);
    } catch (error) {
        console.error('Error: ' + error);
    }
};