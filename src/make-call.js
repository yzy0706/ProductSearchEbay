const urlObject = require('./buildURL');
const FIND_ITEMS_BY_KEYWORD = 'findItemsByKeywords';
const FIND_ITEMS_BY_CATEGORY = 'findItemsByCategory';
const FIND_COMPLETED_ITEMS = 'findCompletedItems';
const FIND_ITEMS_ADV = 'findItemsAdvanced';
const FIND_EBAY_STORES = 'findItemsIneBayStores';

const findItemsByKeywords = function (options) {
    if (!options) throw new Error('INVALID_REQUEST_PARMS --> Keyword is missing, Keyword is required');
    this.options.operationName = FIND_ITEMS_BY_KEYWORD;
    if (!options.keywords) options = { keywords: options };
    this.options.additionalParam = utils.constructAdditionalParams.bind(this)(options);
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsByKeywordsResponse;
    }, console.error 
    );
};


const findItemsByCategory = function (options) {
    if (!options) throw new Error('INVALID_REQUEST_PARMS --> Category ID is null or invalid');
    if (!options.categoryId) options = { categoryId: options };
    this.options.operationName = FIND_ITEMS_BY_CATEGORY;
    this.options.additionalParam = utils.constructAdditionalParams.bind(this)(options);
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsByCategoryResponse;
    }, console.error 
    );
};


const findCompletedItems = function (options) {
    if (!options) throw new Error('INVALID_REQUEST_PARMS --> Keyword or category ID are required.');
    if (!options.keywords && !options.categoryId) throw new Error('Keyword or category ID are required.');
    this.options.operationName = FIND_COMPLETED_ITEMS;
    this.options.additionalParam = utils.constructAdditionalParams.bind(this)(options);
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findCompletedItemsResponse;
    }, console.error 
    );
};


const findItemsAdvanced = function (options) {
    if (!options) throw new Error('INVALID_REQUEST_PARMS --> check here for input fields https://developer.ebay.com/DevZone/finding/CallRef/findItemsAdvanced.html#Input');
    this.options.operationName = FIND_ITEMS_ADV;
    this.options.additionalParam = utils.constructAdditionalParams.bind(this)(options);
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsAdvancedResponse;
    }, console.error 
    );
};


const getVersion = function () {
    this.options.operationName = 'getVersion';
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).getVersionResponse[0];
    }, console.error 
    );
};


const findItemsByProduct = function (options) {
    if (!options) throw new Error('INVALID_REQUEST_PARMS --> Please enter the Valid input.');
    if (!options.productId) throw new Error('INVALID_REQUEST_PARMS --> Product ID is required.');
    const type = options.type ? options.type : 'ReferenceID';
    this.options.operationName = 'findItemsByProduct';
    this.options.additionalParam = utils.constructAdditionalParams.bind(this)(options);
    const url = `${urlObject.buildSearchUrl(this.options)}&productId.@type=${type}`;
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsByProductResponse;
    }, console.error 
    );
};

const findItemsIneBayStores = function (options) {
    if (!options) throw new Error('INVALID_REQUEST_PARMS --> Please enter the Valid input.');
    if (!options.storeName) throw new Error('INVALID_REQUEST_PARMS --> Store name is required.');
    options.globalId = this.options.globalID;
    this.options.operationName = FIND_EBAY_STORES;
    this.options.additionalParam = utils.constructAdditionalParams.bind(this)(options);
    return getRequest(urlObject.buildSearchUrl(this.options)).then((data) => {
        return JSON.parse(data).findItemsIneBayStoresResponse;
    }, console.error 
    );
};

module.exports = {
    findItemsByKeywords,
    findItemsByCategory,
    findCompletedItems,
    findItemsByProduct,
    findItemsAdvanced,
    findItemsIneBayStores,
    getVersion
};