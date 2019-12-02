// docgaga-server db

var tarDb = db.getSiblingDB('docgaga');

if(tarDb.getUser('docgaga') === null){
  tarDb.createUser(
    {
      user: "docgaga",
      pwd: "123456",
      roles: [{"role":"dbOwner","db":"docgaga"}],
    }
 );
}

var collections = [{
  name: 'docgagakeyword',
  indexes: [
    { spec: { username: 1 }, options: { sparse: true } },
    { spec: { keyword: 1 }, options: { sparse: true } },
    { spec: { createTime: -1 }, options: { sparse: true } },
    { spec: { username: 1, keyword: 1 }, options: { unique: true, sparse: true } },
    { spec: { lastUpdateTime: -1 }, options: { sparse: true } }
  ],
  createOptions: {}
}, {
  name: 'docgaganote',
  indexes: [
    { spec: { username: 1 }, options: { sparse: true } },
    { spec: { url: 1 }, options: { sparse: true } },
    { spec: { pageTitle: 1 }, options: { sparse: true } },
    { spec: { noteType: 1 }, options: { sparse: true } },
    { spec: { startPath: 1 }, options: { sparse: true } },
    { spec: { endPath: 1 }, options: { sparse: true } },
    { spec: { createTime: -1 }, options: { sparse: true } },
    { spec: { lastUpdateTime: -1 }, options: { sparse: true } },
    { spec: { keywords: 1 }, options: { sparse: true } },
    { spec: { keywordNames: 1 }, options: { sparse: true } }
  ],
  createOptions: {}
}, {
  name: 'docgagaoauth',
  indexes: [
    { sepc: { token: 1, type: 1 }, options: { unique: true } },
    { spec: { expiresAt: 1 }, options: { expireAfterSeconds: 0 } },
    { spec: { type: 1 } },
    { spec: { user: 1 } },
    { spec: { scope: 1 } },
    { spec: { client: 1 } }
  ],
  createOptions: {}
}, {
  name: 'docgagauser',
  indexes: [
    { spec: { username: 1 }, options: { unique: true } },
    { spec: { email: 1 }, options: { unique: true, sparse: true } },
    { spec: { phone: 1 }, options: { unique: true, sparse: true } },
    { spec: { createTime: -1 } },
    { spec: { blocked: 1 }, options: { sparse: true } },
    { spec: { verified: 1 }, options: { sparse: true } }
  ],
  createOptions: {}
}];

collections.forEach(function (opts) {
  var collExists = tarDb.getCollection(opts.name).exists();
  var coll = null;
  if (collExists === null) {
    tarDb.createCollection(opts.name);
  }
  coll = tarDb.getCollection(opts.name);
  var i, index;
  if (opts.indexes) {
    for (i = 0; i < opts.indexes.length; i++) {
      index = opts.indexes[i];
      coll.createIndex(index.spec, index.options);
    }
  }
});
