=begin

CHALLENGE 2

Copy the same Superhero class from the previous question.

For this challenge, make a Superhero's name updatable after it is created:

    s.name = "Arm-Fall-Off Boy"

=end


class Superhero
  def initialize name
    @name = name
  end

  attr_reader :name
  # def name
  #   @name
  # end

  attr_writer :name
  # def name= new_name
  #   @name = new_name
  # end


end

s = Superhero.new("Lady Fairplay")

puts s.name # ==> "Lady Fairplay"

s.name = "Arm-Fall-Off Boy"

puts s.name