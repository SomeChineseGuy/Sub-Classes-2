# hash === collection of data, set in a key/value pair system

user = {
  "username" => "Tron",
  "password" => 0001101010
}

name = "username"
puts user[name]

#  Symbol == lightweight string 
new_user = {
  :username => "Tron",
  :password => 100111001
}

# puts [].methods
# puts "+++"
# puts "+++"
# print "Something".methods

newer_user = {
  username: "Tron",
  password: 00011101
}

puts newer_user[:username]