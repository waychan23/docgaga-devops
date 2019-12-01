
const DEFAULT_ACCESS_TOKEN_LIFE_TIME = 60 * 60 * 2;
const DEFAULT_REFRESH_TOKEN_LIFE_TIME = 60 * 60 * 24 * 30;

const GRANT_AUTHORIZATION_CODE = 'authorization_code',
      GRANT_REFRESH_TOKEN = 'refresh_token';
      
const SCOPE_NOTE_READ_WRITE = 's_n_rw',
      SCOPE_KEYWORD_READ_WRITE = 's_k_rw',
      SCOPE_USER_PROFILE_READ = 's_u_r';

module.exports = {
    mongoConfig: {
        url: 'mongodb://docgaga:123456@192.168.41.3:27017/docgaga'  //TODO 账号密码，地址端口需填写
    },
    serverConfig: {
        'host': 'https://api.docgaga.club:8443',  //TODO 需填写
        'port': 8443,  //TODO 需填写
        'urlPrefix': `https://api.docgaga.club:8443/docgaga`,  //TODO 域名端口需填写
        'assetsPath': '/docgaga/public',
        'contextPath': '/docgaga'
    },
    oauth2Clients: [{
        'id': 'docgagacrx',
        'clientId': 'docgagacrx',
        'name': '汤圆笔记-浏览器插件',
        'clientSecret': 'd0kkGA9ACHrM3Xt3nSi0N-d99crx_1708111707',  //TODO 需填写
        'grants': [ GRANT_AUTHORIZATION_CODE, GRANT_REFRESH_TOKEN ],
        'scopes': [ SCOPE_USER_PROFILE_READ, SCOPE_NOTE_READ_WRITE, SCOPE_KEYWORD_READ_WRITE ],
        'redirectUris': [ 
            'https://api.docgaga.club:8443/docgagacrx/auth/receiveGrant'  //TODO 域名端口需填写
        ],
        'accessTokenLifetime': DEFAULT_ACCESS_TOKEN_LIFE_TIME,
        'refreshTokenLifetime': DEFAULT_REFRESH_TOKEN_LIFE_TIME
    }]
};