// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-request-id': '17b56534-debb-4f8f-a097-ab33c7308512',
  'x-ms-correlation-request-id': '17b56534-debb-4f8f-a097-ab33c7308512',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060638Z:17b56534-debb-4f8f-a097-ab33c7308512',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 28 Apr 2015 06:06:37 GMT',
  connection: 'close',
  'content-length': '113' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-request-id': '17b56534-debb-4f8f-a097-ab33c7308512',
  'x-ms-correlation-request-id': '17b56534-debb-4f8f-a097-ab33c7308512',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060638Z:17b56534-debb-4f8f-a097-ab33c7308512',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 28 Apr 2015 06:06:37 GMT',
  connection: 'close',
  'content-length': '113' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate\",\"name\":\"xplatTestGAvailCreate\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c303ee41-490c-4223-96ba-cd90e409a4f8',
  'x-ms-correlation-request-id': 'c303ee41-490c-4223-96ba-cd90e409a4f8',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060641Z:c303ee41-490c-4223-96ba-cd90e409a4f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 28 Apr 2015 06:06:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate\",\"name\":\"xplatTestGAvailCreate\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c303ee41-490c-4223-96ba-cd90e409a4f8',
  'x-ms-correlation-request-id': 'c303ee41-490c-4223-96ba-cd90e409a4f8',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060641Z:c303ee41-490c-4223-96ba-cd90e409a4f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 28 Apr 2015 06:06:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3a13f9b4-60cc-408a-adff-722202f21e46',
  'x-ms-correlation-request-id': '3a13f9b4-60cc-408a-adff-722202f21e46',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060642Z:3a13f9b4-60cc-408a-adff-722202f21e46',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 28 Apr 2015 06:06:41 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3a13f9b4-60cc-408a-adff-722202f21e46',
  'x-ms-correlation-request-id': '3a13f9b4-60cc-408a-adff-722202f21e46',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060642Z:3a13f9b4-60cc-408a-adff-722202f21e46',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 28 Apr 2015 06:06:41 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '21855451-dbac-4090-a62f-319a20dbae2a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ad454131-f68a-4f87-97fe-6e0823555dfc',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060648Z:ad454131-f68a-4f87-97fe-6e0823555dfc',
  date: 'Tue, 28 Apr 2015 06:06:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '21855451-dbac-4090-a62f-319a20dbae2a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ad454131-f68a-4f87-97fe-6e0823555dfc',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060648Z:ad454131-f68a-4f87-97fe-6e0823555dfc',
  date: 'Tue, 28 Apr 2015 06:06:47 GMT',
  connection: 'close' });
 return result; }]];