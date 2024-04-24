# Class private, readable, Writable
# Read/Write
class Car 
  # create our constructor
  # constrctor()
  def initialize make, model, year
    # this.make === make
    @make = make
    @model = model
    @year = year
  end

  # Read and Write
  attr_accessor :make, :year, :model

  # Read
  # attr_reader :make, :year, :model

  # def make
  #   @make
  # end

  # def model
  #   @model
  # end

  # def year
  #   @year
  # end

  # Write
  # attr_writer :make, :year, :model

  # def make= new_make
  #   @make = new_make
  # end

  # def model= new_model
  #   @model = new_model
  # end

  # def year= new_year
  #   @year = new_year
  # end

end

my_car = Car.new('Honda', 'Civic', 1999)

p my_car

puts my_car.make
puts my_car.model
puts my_car.year

my_car.make = "Ford"
my_car.model = "SUV"
my_car.year = 2024

puts my_car.make
puts my_car.model
puts my_car.year