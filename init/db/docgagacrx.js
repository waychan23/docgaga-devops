// docgaga-crx-server db

var tarDb = db.getSiblingDB('docgagacrx');

if(tarDb.getUser('docgagacrx') === null){
    tarDb.createUser(
        {
        user: "docgagacrx",
        pwd: "123456",
        roles: [{"role":"dbOwner","db":"docgagacrx"}],
        }
    );
}

var collections = [{
    name: 'oauthtoken',
    indexes: [
      { spec: { loginTicket: 1 }, options: { unique: true } }
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
  