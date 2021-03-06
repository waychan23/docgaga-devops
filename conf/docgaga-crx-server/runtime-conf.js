
module.exports = {
    crxServerInfo: {
        host: 'https://api.docgaga.club:8443', //TODO 需填写
        contextPath: '/docgagacrx',
        staticPath: '/docgagacrx/static'
    },
    oauthServerInfo: {
        host: 'https://api.docgaga.club:8443', //TODO 需填写
        contextPath: '/docgaga',
        endpoint: {
            authorize: '/oauth/authorize',
            token: '/oauth/token',
            revoke: '/oauth/revoke'
        }
    },
    oauthClientInfo: {
        clientId: 'docgagacrx',
        clientSecret: 'd0kkGA9ACHrM3Xt3nSi0N-d99crx_1708111707', //TODO 需填写
        scope: 's_n_rw',
        responseType: 'code',
        grantType: 'authorization_code',
        redirectUri: 'https://api.docgaga.club:8443/docgagacrx/auth/receiveGrant', //TODO 域名端口需填写
        stateTTL: 1000 * 20
    },
    keys: {
        oauthStateSignKey: 'oauthStateSignKey', //TODO 需填写
        loginTicketSignKey: 'loginTicketSignKey', //TODO 需填写
        sessionKey: 'sessionKey' //TODO 需填写
    },
    mongoConfig: {
        url: 'mongodb://docgagacrx:123456@mongo:27017/docgagacrx' //TODO 账号密码、地址端口需填写
    }
};
