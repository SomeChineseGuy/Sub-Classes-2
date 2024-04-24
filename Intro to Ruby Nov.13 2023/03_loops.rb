# Do end is a block of code, every loop will have a do... end

num = 0

# while num < 10 do
#   puts num
#   num += 1
# end


# # inverse to the while loop

# num = 0
# until num > 10 do
#   num += 1
#   puts num
# end

names = ["Joe", "Andrew", "Sarah"]

# for of, for in, c-style
# for in  === JS for of

for name in names do 
  puts "Hello there #{name}"
end

# In ruby there is NO callbacks
puts [].methods

# 123.toString()
# 123 "String" true null undefined

# const arr = [1,2,3,4]
# const arr2 = arr.map((num) => num + 1)
# arr.forEach((num) => num + 1)