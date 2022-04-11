# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "Deleting seeds..."
# Comment.destroy_all
# Post.destroy_all
# Subforum.destroy_all
# User.destroy_all
# Friend.destroy_all

puts "🌱 Seeding Users..."
10.times do
    User.create(
        username: Faker::Internet.username,
        email: Faker::Internet.email,
        first_name: Faker::Name.name,
        last_name: Faker::Name.name
    )
end

puts "🌱 Seeding Friends..."
10.times do
    Friend.create(
        user_id: User.ids.sample,
        friend_id: User.ids.sample
    )
end

puts "🌱 Seeding Subforums..."
3.times do
    Subforum.create(
        name: Faker::Name.name,
        category: Faker::Name.name,
        description: Faker::Quote.famous_last_words
    )
end

puts "🌱 Seeding Posts..."
15.times do
    Post.create(
        name: Faker::Name.name,
        description: Faker::Quote.famous_last_words,
        subforum_id: Subforum.ids.sample,
        user_id: User.ids.sample
    )
end

puts "🌱 Seeding Comments..."
45.times do
    Comment.create(
        content: Faker::Quote.famous_last_words,
        likes: rand(1..10),
        post_id: Post.ids.sample,
        user_id: User.ids.sample
    )
end

puts "✅ Done Seeding!"