# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Page.delete_all
Comment.delete_all

c1 = Comment.create(message: "Buen comentario")
c2 = Comment.create(message: "Otro buen comentario")

Page.create(url: "http://www.pagina12.com.ar", comments: [c1, c2])
