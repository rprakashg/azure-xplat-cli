// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1914/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"healthy\",\"pushEntityNamespace\":\"clitestnode1914Hub-ns\",\"pushEntityPath\":\"clitestnode1914Hub\",\"pushEntityConnectionString\":\"Endpoint=sb:\\/\\/clitestnode1914hub-ns.servicebus.windows.net\\/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=6PDGRBfQ+kSMoAi0VNkhyvFb\\/6xTAl4B7oVpt48ykIg=\",\"namespaceCreated\":true,\"pushEntityCreated\":true}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '65334ac6a5e68fd3b0c5a831c0fb73b5',
  date: 'Wed, 08 Apr 2015 01:23:52 GMT' });
 return result; }]];