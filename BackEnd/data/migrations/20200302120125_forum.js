
exports.up = function(knex) {
    //Forum Table
  knex.schema.createTable('forum', forum => {
      forum.increament(); 
      forum.string('title', 50)
      .notNullable()
      .unique()
      forum.text('description', 128)
      .notNullable()
  })
  knex.schema.createTable('post', post => {
      post.increment(); 
      post.string('title', 50)
      .notNullable()
      post.text('content', 300)
      .notNullable()
  })
  knex.schema.createTable('comment', comment => {
      comment.increament();
      comment.string('content', 300)
      .notNullable()
  })
};

exports.down = function(knex) {
  
};
