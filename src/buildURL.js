const buildURL = {

    buildSearchUrl(options) {
        let baseUrl = `https://svcs.ebay.com/services/search/FindingService/v1?`;
        baseUrl += 'SECURITY-APPNAME=' + options.clientID;
        baseUrl += '&OPERATION-NAME=' + options.operationName;
        baseUrl += '&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON';
        baseUrl += options.param ? '&' + options.param + '=' + options.name : '';
        baseUrl += options.additionalParam ? '&' + options.additionalParam : '';
        baseUrl += options.sortOrder ? '&sortOrder=' + options.sortOrder : '';
        baseUrl += '&outputSelector(0)=SellerInfo&outputSelector(1)=PictureURLLarge&outputSelector(2)=PictureURLSuperSize';
        baseUrl += options.limit ? '&paginationInput.entriesPerPage=' + options.limit : '';
        baseUrl += options.globalID ? '&GLOBAL-ID=' + options.globalID : '';
        baseUrl += options.pageNumber ? '&paginationInput.pageNumber=' + options.pageNumber : '';
        return baseUrl;
    },

};

module.exports = buildURL;
