=begin

CHALLENGE 6

Implement the incomplete wrap_array_items method

=end

class ArrayFormatter
  def wrap_array_items items, left, right
    items.map do |item|
      "#{left}#{item}#{right}"
    end
  end

end

formatter = ArrayFormatter.new

puts formatter.wrap_array_items ["I", "Love", "Programming"], "<", ">"