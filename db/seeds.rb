5.times do |i|
  List.create(
    description: Faker::Lorem.paragraph
  )
end

2.times do |i|
  List.create(
    description: Faker::Lorem.paragraph,
    time: "10:24 pm",
    checked: true
  )
end
