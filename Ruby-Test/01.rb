=begin

CHALLENGE 1

Create a class called Superhero which takes in a name for constructing instances:

    s = Superhero.new("Lady Fairplay")

Once created, we should be able to access their given name again:

    s.name # ==> "Lady Fairplay"

=end

class Superhero
  def initialize name
    @name = name
  end

  attr_reader :name
  # def name
  #   @name
  # end

end

s = Superhero.new("Lady Fairplay")

puts s.name # ==> "Lady Fairplay"